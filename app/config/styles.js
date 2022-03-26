import { Platform } from "react-native";

import colors from "./colors";
import fonts from "./fonts";
import sizes from "./sizes";

export default {
  colors,
  sizes,
  text: {
    color: colors.darkText,
    fontSize: fonts.fontSize,
    fontFamily: Platform.OS === "android" ? fonts.android : fonts.ios,
  },
};
