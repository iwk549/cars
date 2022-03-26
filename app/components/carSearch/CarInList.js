import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import AppText from "../common/text/AppText";
import IconRender from "../icon/IconRender";
import { clicks, defaultStyles } from "../../config";

function CarInList({ car, isEven, onSelect }) {
  return (
    <TouchableOpacity
      activeOpacity={clicks.clickOpacity}
      onPress={() => onSelect(car)}
      style={[styles.container, isEven ? styles.even : styles.odd]}
    >
      <AppText style={styles.header}>{car.Model_Name}</AppText>
      <View style={styles.infoContainer}>
        <View style={styles.half}>
          <Image
            source={{
              uri: car.image1,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.half}>
          <Image
            source={{
              uri: car.image2,
            }}
            style={styles.image}
          />
        </View>
      </View>
      <AppText style={styles.text}>
        Tap to Rent
        <IconRender icon="gesture-tap" size={20} color="black" />
      </AppText>
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
  text: {
    margin: 3,
    textAlign: "center",
  },
});

export default CarInList;
