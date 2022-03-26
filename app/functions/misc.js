// import { faker } from "@faker-js/faker";

const getYears = () => {
  let currentYear = new Date().getFullYear() + 1;
  let displayYears = [];
  for (let i = currentYear; i > currentYear - 25; i--) {
    displayYears.push({ value: String(i), label: String(i) });
  }
  return displayYears;
};

export const years = getYears();

export const getRandomCarImage = () => {
  const images = [
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my22/gt-4dr-coupe/all-vehicles/2022-AMG-GT43-4DR-COUPE-AVP-DR.png",
    "https://images.ctfassets.net/wmdwnw6l5vg5/71jz89dFBIdA9KHrLh8T0h/c4c0a817afe77c35ff5a1461f052b03f/economy.png",
    "https://www.chicagotribune.com/resizer/coI0JHa_AAGTW3lcMXxSYjsli10=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/53E7MBRVDZHVNBUZPDLOWAXQ3I.jpg",
    "https://www.generatormix.com/images/thumbs/random-cars.jpg",
  ];
  return images[Math.floor(Math.random() * images.length)];
};

export function generateRandomPrice() {
  return "$100.00";
  // return `$${faker.finance.amount()}`;
}
export function generateRandomAddress() {
  return "Costa Mesa, CA";
  // return `${faker.address.city()}, ${faker.address.stateAbbr()}`;
}
