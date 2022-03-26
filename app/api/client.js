import { create } from "apisauce";

const baseURL = "https://vpic.nhtsa.dot.gov/api/";

const apiClient = create({
  baseURL,
});

export default apiClient;
