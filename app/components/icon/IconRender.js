import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconRender({ icon, size, color, style }) {
  return (
    <MaterialCommunityIcons
      name={icon}
      size={size}
      color={color}
      style={style}
    />
  );
}

export default IconRender;
