import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./AppText";
import { defaultStyles } from "../../../config";

function PageTitle({ text }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{text}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.primary,
    padding: 5,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: defaultStyles.colors.lightText,
  },
});

export default PageTitle;
