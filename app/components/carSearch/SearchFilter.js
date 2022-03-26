import React from "react";
import { StyleSheet, View } from "react-native";

import ListFilter from "../common/ListFilter";
import AppText from "../common/text/AppText";

function SearchFilter({ options, onSelect, selectedItem, title }) {
  return (
    <View style={styles.container}>
      <ListFilter
        title={title}
        options={options}
        onSelect={onSelect}
        selectedItem={selectedItem}
      />
      <AppText style={styles.text}>{selectedItem.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    padding: 3,
  },
});

export default SearchFilter;
