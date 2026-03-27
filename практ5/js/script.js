function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

class Product {
  constructor({ id, name, price, category, stock, description }) {
    if (!name || typeof name !== "string") {
      throw new Error("Некоректна назва товару");
    }
    if (typeof price !== "number" || price < 0) {
      throw new Error("Некоректна ціна");
    }
    if (!category || typeof category !== "string") {
      throw new Error("Некоректна категорія");
    }
    if (!Number.isInteger(stock) || stock < 0) {
      throw new Error("Некоректна кількість на складі");
    }

    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.stock = stock;
    this.description = description || "";
}

get formattedPrice() {
  return `${this.price.toFixed(2)} грн`;
}

isInStock() {
  return this.stock > 0;
}

getTotalValue() {
    return Number((this.price * this.stock).toFixed(2));
  }
}

class CatalogManager {
  #products = [];
  #nextId = 1;

  addProduct(productData) {
    const product = new Product({
      id: this.#nextId++,
      ...productData
    });

    this.#products = [...this.#products, product];
  }

  removeProduct(id) {
    const initialLength = this.#products.length;
    this.#products = this.#products.filter(product => product.id !== id);

    if (initialLength === this.#products.length) {
      throw new Error("Товар з таким ID не знайдено");
    }
  }

  updateProduct(id, data) {
    let found = false;

    this.#products = this.#products.map(product => {
      if (product.id === id) {
        found = true;
        return new Product({
          ...deepClone(product),
          ...deepClone(data),
          id: product.id
        });
      }
      return product;
    });

    if (!found) {
      throw new Error("Товар з таким ID не знайдено");
    }
  }

  getAllProducts() {
    return this.#products.map(product => new Product(deepClone(product)));
  }

  getProductsByCategory(category) {
    return this.#products
      .filter(product => product.category.toLowerCase() === category.toLowerCase())
      .map(product => new Product(deepClone(product)));
  }

  searchProducts(query) {
    const lowerQuery = query.toLowerCase();

    return this.#products
      .filter(product =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery)
      )
      .map(product => new Product(deepClone(product)));
  }

  getExpensiveProducts(minPrice) {
    return this.#products
      .filter(product => product.price > minPrice)
      .map(product => new Product(deepClone(product)));
  }

  getTotalCatalogValue() {
    return Number(
      this.#products.reduce((sum, product) => sum + product.getTotalValue(), 0).toFixed(2)
    );
  }

  getCategories() {
    return [...new Set(this.#products.map(product => product.category))];
  }

  getCategoryStats() {
    return this.#products.reduce((stats, product) => {
      if (!stats[product.category]) {
        stats[product.category] = {
          count: 0,
          totalStock: 0,
          totalValue: 0
        };
      }

      stats[product.category].count += 1;
      stats[product.category].totalStock += product.stock;
      stats[product.category].totalValue = Number(
        (stats[product.category].totalValue + product.getTotalValue()).toFixed(2)
      );

      return stats;
    }, {});
  }
}

const catalog = new CatalogManager();

catalog.addProduct({
  name: "Ноутбук Lenovo",
  price: 25000,
  category: "Електроніка",
  stock: 5,
  description: "Потужний ноутбук для роботи та навчання"
});

catalog.addProduct({
  name: "Миша Logitech",
  price: 1200,
  category: "Електроніка",
  stock: 15,
  description: "Бездротова миша"
});

catalog.addProduct({
  name: "Стіл письмовий",
  price: 4500,
  category: "Меблі",
  stock: 3,
  description: "Дерев'яний письмовий стіл"
});

function showResult(data) {
  document.getElementById("result").textContent =
    typeof data === "string" ? data : JSON.stringify(data, null, 2);
}

function renderTable(products) {
  const container = document.getElementById("tableContainer");

  if (!products.length) {
    container.innerHTML = "<p>Немає даних для відображення.</p>";
    return;
  }

let html = `
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Назва</th>
        <th>Ціна</th>
        <th>Категорія</th>
        <th>Кількість</th>
        <th>Опис</th>
        <th>Вартість запасу</th>
      </tr>
    </thead>
  <tbody>
`;

for (const product of products) {
  html += `
    <tr>
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.formattedPrice}</td>
      <td>${product.category}</td>
      <td>${product.stock}</td>
      <td>${product.description}</td>
      <td>${product.getTotalValue().toFixed(2)} грн</td>
    </tr>
  `;
}

  html += "</tbody></table>";
  container.innerHTML = html;
}

function getFormData() {
  return {
    name: document.getElementById("name").value.trim(),
    price: Number(document.getElementById("price").value),
    category: document.getElementById("category").value.trim(),
    stock: Number(document.getElementById("stock").value),
    description: document.getElementById("description").value.trim()
  };
}

function clearForm() {
  document.getElementById("productId").value = "";
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("category").value = "";
  document.getElementById("stock").value = "";
  document.getElementById("description").value = "";
}

function addProduct() {
  try {
    const data = getFormData();
    catalog.addProduct(data);
    showResult("Товар успішно додано.");
    renderTable(catalog.getAllProducts());
    clearForm();
  } catch (error) {
    showResult("Помилка: " + error.message);
  }
}

function updateProduct() {
  try {
    const id = Number(document.getElementById("productId").value);
    if (!id) {
      throw new Error("Введи ID товару для оновлення");
    }

    const data = getFormData();
    catalog.updateProduct(id, data);
    showResult("Товар успішно оновлено.");
    renderTable(catalog.getAllProducts());
    clearForm();
  } catch (error) {
    showResult("Помилка: " + error.message);
  }
}

function removeProduct() {
  try {
    const id = Number(document.getElementById("productId").value);
    if (!id) {
      throw new Error("Введи ID товару для видалення");
    }

    catalog.removeProduct(id);
    showResult("Товар успішно видалено.");
    renderTable(catalog.getAllProducts());
    clearForm();
  } catch (error) {
    showResult("Помилка: " + error.message);
  }
}

function findByCategory() {
  try {
    const category = document.getElementById("searchCategory").value.trim();
    if (!category) {
      throw new Error("Введи категорію");
    }

    const products = catalog.getProductsByCategory(category);
    showResult(products);
    renderTable(products);
  } catch (error) {
    showResult("Помилка: " + error.message);
  }
}

function searchByText() {
  try {
    const query = document.getElementById("searchText").value.trim();
    if (!query) {
      throw new Error("Введи текст для пошуку");
    }

    const products = catalog.searchProducts(query);
    showResult(products);
    renderTable(products);
  } catch (error) {
    showResult("Помилка: " + error.message);
  }
}

function findExpensive() {
  try {
    const minPrice = Number(document.getElementById("minPrice").value);
    if (isNaN(minPrice)) {
      throw new Error("Введи ціну");
    }

    const products = catalog.getExpensiveProducts(minPrice);
    showResult(products);
    renderTable(products);
  } catch (error) {
    showResult("Помилка: " + error.message);
  }
}

function showTotalValue() {
  const total = catalog.getTotalCatalogValue();
  showResult(`Сумарна вартість каталогу: ${total.toFixed(2)} грн`);
  renderTable(catalog.getAllProducts());
}

function showCategories() {
  const categories = catalog.getCategories();
  showResult(categories);
  renderTable(catalog.getAllProducts());
}

function showCategoryStats() {
  const stats = catalog.getCategoryStats();
  showResult(stats);
  renderTable(catalog.getAllProducts());
}

function showAllProducts() {
  const products = catalog.getAllProducts();
  showResult(products);
  renderTable(products);
}

renderTable(catalog.getAllProducts());
showResult("Каталог готовий до роботи.");
