import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "../common/text/AppText";

function CarInList({ car }) {
  console.log(car);
  return (
    <>
      <AppText style={styles.header}>
        {car.Make_Name} {car.Model_Name}
      </AppText>
      <View style={styles.container}>
        <View style={styles.half}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    flexDirection: "row",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  half: {
    flex: 0.5,
  },
});

export default CarInList;
