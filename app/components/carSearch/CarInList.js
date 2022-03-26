import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import AppText from "../common/text/AppText";
import { getRandomCarImage } from "../../functions/misc";
import { clicks, defaultStyles } from "../../config";

function CarInList({ car, isEven, onSelect }) {
  console.log(car);
  return (
    <TouchableOpacity
      activeOpacity={clicks.clickOpacity}
      onPress={() => onSelect(car)}
      style={[styles.container, isEven ? styles.even : styles.odd]}
    >
      <AppText style={styles.header}>
        {car.Make_Name} {car.Model_Name}
      </AppText>
      <View style={styles.infoContainer}>
        <View style={styles.half}>
          <AppText>{car.VehicleTypeName}</AppText>
        </View>
        <View style={styles.half}>
          <Image
            source={{
              uri: car.image,
            }}
            style={styles.image}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  infoContainer: {
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
  image: {
    height: 100,
    width: defaultStyles.sizes.screenDimensions.width / 2 - 20,
    resizeMode: "contain",
  },
});

export default CarInList;
