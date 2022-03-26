import React from "react";
import { StyleSheet, View } from "react-native";

import AppPicker from "./form/AppPicker";

function ListFilter({ options, onSelect, selectedItem, title }) {
  return (
    <View style={styles.container}>
      <AppPicker
        options={options}
        onSelect={onSelect}
        selectedOption={selectedItem}
        title={title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ListFilter;
