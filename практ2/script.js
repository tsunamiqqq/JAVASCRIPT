function isValidDateString(dateStr) {
  if (typeof dateStr !== "string") return false;

  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateStr)) return false;

  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function parseTime(timeStr) {
  if (typeof timeStr !== "string") {
    throw new Error("Time must be a string");
  }

  const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  if (!regex.test(timeStr)) {
    throw new Error("Invalid time format. Use HH:MM");
  }

  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours * 60 + minutes;
}

function formatTime(totalMinutes) {
  totalMinutes = ((totalMinutes % 1440) + 1440) % 1440;

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function getDayOfWeek(dateStr) {
  if (!isValidDateString(dateStr)) {
    throw new Error("Invalid date format. Use YYYY-MM-DD");
  }

  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return days[date.getDay()];
}

function calculateAge(birthdateStr) {
  if (!isValidDateString(birthdateStr)) {
    throw new Error("Invalid birthdate format. Use YYYY-MM-DD");
  }

  const [year, month, day] = birthdateStr.split("-").map(Number);
  const birthDate = new Date(year, month - 1, day);

  const todayRaw = new Date();
  const today = new Date(
    todayRaw.getFullYear(),
    todayRaw.getMonth(),
    todayRaw.getDate()
  );

  if (birthDate > today) {
    throw new Error("Birthdate cannot be in the future");
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;

    const previousMonthLastDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();

    days += previousMonthLastDay;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

function validateMeetingTime(range1, range2) {
  if (!Array.isArray(range1) || range1.length !== 2) {
    throw new Error("range1 must be [start, end]");
  }

  if (!Array.isArray(range2) || range2.length !== 2) {
    throw new Error("range2 must be [start, end]");
  }

  const start1 = parseTime(range1[0]);
  const end1 = parseTime(range1[1]);
  const start2 = parseTime(range2[0]);
  const end2 = parseTime(range2[1]);

  if (start1 >= end1 || start2 >= end2) {
    throw new Error("Start time must be earlier than end time");
  }

  return end1 <= start2 || end2 <= start1;
}

function daysUntilEvent(targetDateStr) {
  if (!isValidDateString(targetDateStr)) {
    throw new Error("Invalid date format. Use YYYY-MM-DD");
  }

  const [year, month, day] = targetDateStr.split("-").map(Number);
  const targetDate = new Date(year, month - 1, day);

  const nowRaw = new Date();
  const today = new Date(
    nowRaw.getFullYear(),
    nowRaw.getMonth(),
    nowRaw.getDate()
  );

  const diffMs = targetDate - today;
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

function convertTimeZone(timeStr, sourceZone, targetZone) {
  const timeZones = {
    UTC: 0,
    GMT: 0,
    EET: 2,
    CET: 1,
    EST: -5,
    PST: -8,
    IST: 5.5,
    JST: 9
  };

  if (!(sourceZone in timeZones)) {
    throw new Error("Unsupported source time zone");
  }

  if (!(targetZone in timeZones)) {
    throw new Error("Unsupported target time zone");
  }

  const timeInMinutes = parseTime(timeStr);
  const sourceOffset = timeZones[sourceZone] * 60;
  const targetOffset = timeZones[targetZone] * 60;

  const convertedMinutes = timeInMinutes - sourceOffset + targetOffset;
  return formatTime(convertedMinutes);
}

module.exports = {
  getDayOfWeek,
  calculateAge,
  validateMeetingTime,
  daysUntilEvent,
  convertTimeZone
};


if (require.main === module) {
  console.log("Day of Week:");
  console.log('2026-03-27 |', getDayOfWeek("2026-03-27"));
  console.log("");

  console.log("Age Calculator:");
  console.log('2008-08-18 -', calculateAge("2008-08-18"));
  console.log("");

  console.log("Meeting Time Validator:");
  console.log('[09:00, 11:00] and [10:00, 12:00] -', validateMeetingTime(["09:00", "11:00"], ["10:00", "12:00"]));
  console.log('[09:00, 11:00] and [11:00, 12:00] -', validateMeetingTime(["09:00", "11:00"], ["11:00", "12:00"]));
  console.log("");

  console.log("Days Until Event:");
  console.log('2026-04-05 -', daysUntilEvent("2026-04-05"), 'Day');
  console.log("");

  console.log("Time Zone Converter:");
  console.log('12:00 UTC - EET =', convertTimeZone("12:00", "UTC", "EET"));
  console.log('23:30 UTC - IST =', convertTimeZone("23:30", "UTC", "IST"));
}
