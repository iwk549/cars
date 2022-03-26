import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "../common/text/AppText";

function NoneFound() {
  return (
    <AppText style={styles.text}>
      No cars were found under the selected criteria
    </AppText>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    padding: 15,
  },
});

export default NoneFound;
