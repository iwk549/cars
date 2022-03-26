import { Dimensions } from "react-native";
import Constants from "expo-constants";

export default {
  buttonExtraSmall: 25,
  buttonSmall: 40,
  buttonMedium: 70,
  buttonLarge: 100,
  screenDimensions: Dimensions.get("window"),
  borderRadius: 15,
  statusBarHeight: Constants.statusBarHeight,
};
