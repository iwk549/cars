import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";

function PageHeader({ text }) {
  return <AppText style={styles.headerText}>{text}</AppText>;
}

const styles = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    padding: 5,
  },
});

export default PageHeader;
