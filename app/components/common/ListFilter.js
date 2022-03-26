import React from "react";
import { StyleSheet, View } from "react-native";

import AppPicker from "./form/AppPicker";

function ListFilter({ options, onSelect, selectedItem, title, placeholder }) {
  return (
    <View style={styles.container}>
      <AppPicker
        options={options}
        onSelect={onSelect}
        selectedOption={selectedItem}
        placeholder={placeholder}
        title={title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ListFilter;
