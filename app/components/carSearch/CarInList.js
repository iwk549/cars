import React from "react";
import { StyleSheet, View } from "react-native";

function CarInList({ car }) {
  console.log(car);
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {},
});

export default CarInList;
