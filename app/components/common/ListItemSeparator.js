import React from "react";
import { StyleSheet, View } from "react-native";

import { defaultStyles } from "../../config";

function ListItemSeparator() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: defaultStyles.colors.dark,
    marginHorizontal: 20,
  },
});

export default ListItemSeparator;
