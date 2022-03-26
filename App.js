import React from "react";
import { StyleSheet, View } from "react-native";
import CarSearch from "./app/screens/CarSearch";

export default function App() {
  return (
    <View style={styles.container}>
      <CarSearch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
