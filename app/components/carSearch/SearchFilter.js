import React from "react";
import { StyleSheet, View } from "react-native";

import ListFilter from "../common/ListFilter";
import AppText from "../common/text/AppText";

function SearchFilter({ options, onSelect, selectedItem, placeholder, title }) {
  return (
    <View style={styles.container}>
      <ListFilter
        options={options}
        onSelect={onSelect}
        selectedItem={selectedItem}
        placeholder={placeholder}
        title={title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    padding: 3,
    fontWeight: "bold",
  },
});

export default SearchFilter;
