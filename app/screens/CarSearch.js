import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { makes } from "../api/vehicles";
import { PageHeader, Screen } from "../components";

function CarSearch() {
  return (
    <Screen style={styles.container}>
      <PageHeader text="Search Cars" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default CarSearch;
