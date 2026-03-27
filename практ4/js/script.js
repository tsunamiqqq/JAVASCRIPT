function debounce(fn, delay) {
  let timerId = null;

  return function (...args) {
    const context = this;
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

function throttle(fn, interval) {
  let lastCallTime = 0;
  let timeoutId = null;
  let lastArgs = null;
  let lastContext = null;

  return function (...args) {
    const now = Date.now();
    const remaining = interval - (now - lastCallTime);

    lastArgs = args;
    lastContext = this;

    if (remaining <= 0) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

      lastCallTime = now;
      fn.apply(lastContext, lastArgs);
      lastArgs = null;
      lastContext = null;
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        lastCallTime = Date.now();
        timeoutId = null;

        if (lastArgs) {
          fn.apply(lastContext, lastArgs);
          lastArgs = null;
          lastContext = null;
        }
      }, remaining);
    }
  };
}

function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

function retry(fn, attempts) {
  return async function (...args) {
    let lastError;

    for (let i = 0; i < attempts; i++) {
      try {
        return await fn.apply(this, args);
      } catch (error) {
        lastError = error;
      }
    }

    throw lastError;
  };
}

function timeit(fn) {
  return async function (...args) {
    const start = performance.now();
    const result = await fn.apply(this, args);
    const end = performance.now();

    return {
      result: result,
      time: end - start
    };
  };
}

const searchInput = document.getElementById("searchInput");
const searchOutput = document.getElementById("searchOutput");
const scrollOutput = document.getElementById("scrollOutput");

const handleSearch = debounce((event) => {
  searchOutput.textContent = event.target.value || "(порожньо)";
}, 500);

const handleScroll = throttle(() => {
  scrollOutput.textContent = window.scrollY;
}, 300);

searchInput.addEventListener("input", handleSearch);
window.addEventListener("scroll", handleScroll);
