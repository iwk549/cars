import React from "react";
import { StyleSheet, View } from "react-native";

import { defaultStyles } from "../../config";

function ListItemSeparator() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    height: 2,
    backgroundColor: defaultStyles.colors.primary,
    marginHorizontal: 20,
    marginVertical: 5,
  },
});

export default ListItemSeparator;
