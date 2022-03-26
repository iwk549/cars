import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import AppText from "../text/AppText";
import { defaultStyles, clicks } from "../../../config";

function BlockButton({
  backgroundColor,
  bottom,
  onPress,
  textColor,
  size,
  title,
  style,
  buttonStyle,
  icon,
  forceBackgroundColor,
}) {
  const height =
    size === "extraSmall"
      ? defaultStyles.sizes.buttonExtraSmall
      : size === "small"
      ? defaultStyles.sizes.buttonSmall
      : size === "medium"
      ? defaultStyles.sizes.buttonMedium
      : size === "large"
      ? defaultStyles.sizes.buttonLarge
      : 70;
  const styles = StyleSheet.create({
    button: {
      backgroundColor:
        forceBackgroundColor || defaultStyles.colors[backgroundColor],
      width: "100%",
      height: height,
      borderRadius: Math.floor(height * 0.2),
      justifyContent: "center",
      alignItems: "center",
      bottom: bottom || 0,
      fontWeight: "bold",
      marginVertical: 5,
    },
    container: {
      width: "100%",
      paddingHorizontal: 10,
      alignItems: "center",
    },
    buttonIcon: {
      position: "absolute",
      left: 25,
      top: height / 3,
      paddingVertical: 5,
      zIndex: 99,
      width: 25,
    },
    buttonText: {
      fontSize: size === "extraSmall" ? 15 : 25,
      textAlign: "center",
      marginHorizontal: 5,
    },
  });

  return (
    <View style={styles.container}>
      {icon && (
        <IconRender
          icon={icon.icon}
          iconType={icon.iconType}
          iconSize={icon.iconSize}
          hue={icon.hue}
          style={styles.buttonIcon}
          suggestedColor={icon.suggestedColor}
        />
      )}
      <TouchableOpacity
        activeOpacity={clicks.clickOpacity}
        style={[styles.button, buttonStyle]}
        onPress={onPress}
      >
        <AppText
          style={[
            styles.buttonText,
            {
              color: defaultStyles.colors[textColor],
            },
            style,
          ]}
        >
          {title}
        </AppText>
      </TouchableOpacity>
    </View>
  );
}

export default BlockButton;
