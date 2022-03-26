import React from "react";
import { StyleSheet, View } from "react-native";

import { defaultStyles } from "../../config";
import IconRender from "../icon/IconRender";
import AppText from "./text/AppText";

function PullToRefresh() {
  return (
    <View style={styles.container}>
      <IconRender
        icon="arrow-collapse-down"
        color={defaultStyles.colors.lightText}
        size={10}
        style={styles.iconLeft}
      />
      <AppText style={styles.text}>Pull Down to Refresh</AppText>
      <IconRender
        icon="arrow-collapse-down"
        color={defaultStyles.colors.lightText}
        size={10}
        style={styles.iconRight}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.primary,
    height: 15,
    padding: 2,
  },
  iconLeft: {
    position: "absolute",
    left: 30,
    top: 2,
  },
  iconRight: {
    position: "absolute",
    right: 30,
    top: 2,
  },
  text: {
    textAlign: "center",
    color: defaultStyles.colors.lightText,
    fontSize: 10,
    paddingHorizontal: 2,
  },
});

export default PullToRefresh;
