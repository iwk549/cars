import Constants from "expo-constants";
const api = `https://ultimate-scoreboard-api.onrender.com/api/v1`;

const settings = {
  dev: {
    apiUrl: api,
    stripePublishableKey:
      "pk_test_51ICSJ1KBPtxgKzXZQ6UjaNNo9rXD3syghaWeiUKjSSI5r04pCpgoHCWcj63Px7xJiDP3iMMd8UZdn66JmnVVNwwh00RvZblR8q",
  },
  staging: {
    apiUrl: api,
  },
  prod: {
    apiUrl: api,
    stripePublishableKey:
      "pk_live_51ICSJ1KBPtxgKzXZ2i7hR9K25ORtK4kHvi8dETF37iZwFOt9ZkEoaudIZBCsNAvoNggo16YGXJ0XMZpZUzamw9Bn00lw63rsDd",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
