const getYears = () => {
  let currentYear = new Date().getFullYear();
  let displayYears = [];
  for (let i = currentYear; i > currentYear - 25; i--) {
    displayYears.push({ value: String(i), label: String(i) });
  }
  return displayYears;
};

export const years = getYears();

export const getRandomCarImage = () => {
  const images = [
    "https://media.ed.edmunds-media.com/honda/accord-hybrid/2021/oem/2021_honda_accord-hybrid_sedan_touring_fq_oem_1_1600.jpg",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my22/gt-4dr-coupe/all-vehicles/2022-AMG-GT43-4DR-COUPE-AVP-DR.png",
  ];
  return images[Math.floor(Math.random() * images.length)];
};
