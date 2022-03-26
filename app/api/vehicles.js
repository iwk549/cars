import client from "./client";

const endpoint = "vehicles";

export const types = [
  { value: "car", label: "Car" },
  { value: "truck", label: "Truck" },
];

export const makes = [
  { value: "chevrolet", label: "Chevy" },
  { value: "ford", label: "Ford" },
  { value: "honda", label: "Honda" },
  { value: "nissan", label: "Nissan" },
  { value: "toyota", label: "Toyota" },
];

export const getCars = (type, make, year) => {
  return client.get(
    endpoint +
      "/GetModelsForMakeYear/make/" +
      make?.value +
      "/modelyear/" +
      year?.value +
      "/vehicletype/" +
      type?.value +
      "?format=json"
  );
};
