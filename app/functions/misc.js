const getYears = () => {
  let currentYear = new Date().getFullYear();
  let displayYears = [];
  for (let i = currentYear; i > currentYear - 25; i--) {
    displayYears.push({ value: String(i), label: String(i) });
  }
  return displayYears;
};

export const years = getYears();
