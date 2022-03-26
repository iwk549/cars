import client from "./client";

const endpoint = "vehicles";

export const models = [
  { value: "hatchback", label: "Hatchback" },
  { value: "sedan", label: "Sedan" },
  { value: "truck", label: "Truck" },
];

export const makes = [
  { value: "chevrolet", label: "Chevy" },
  { value: "ford", label: "Ford" },
  { value: "honda", label: "Honda" },
  { value: "nissan", label: "Nissan" },
  { value: "toyota", label: "Toyota" },
];

export const getCars = (model, make, year) => {
  return client.get(
    endpoint +
      "/GetModelsForMakeYear/make/" +
      make.value +
      "/modelyear/" +
      year.value +
      "/vehicletype/" +
      model.value +
      "?format=json"
  );
};
