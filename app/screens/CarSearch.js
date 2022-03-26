import React, { useState, useEffect, useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { makes, types, getCars } from "../api/vehicles";
import {
  generateRandomPrice,
  getRandomCarImage,
  generateRandomAddress,
  years,
} from "../functions/misc";
import {
  PageTitle,
  Screen,
  ListItemSeparator,
  CarInList,
  NoneFound,
  SearchFilter,
  ModelModal,
  PullToRefresh,
} from "../components";

function CarSearch() {
  const [refreshing, setRefreshing] = useState(false);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getData(selectedType, selectedMake, selectedYear);
  }, []);

  const handleSelectType = (model) => {
    setSelectedType(model);
    getData(model, selectedMake, selectedYear);
  };

  const handleSelectMake = (make) => {
    setSelectedMake(make);
    getData(selectedType, make, selectedYear);
  };

  const handleSelectYear = (year) => {
    setSelectedYear(year);
    getData(selectedType, selectedMake, year);
  };

  const getData = async (model, make, year) => {
    setRefreshing(true);
    const res = await getCars(model, make, year);
    if (res.ok) {
      let data = [];
      res.data.Results.forEach((r) => {
        let result = { ...r };
        result.image1 = getRandomCarImage();
        result.image2 = getRandomCarImage();
        result.dailyRate = generateRandomPrice();
        result.location = generateRandomAddress();
        data.push(result);
      });
      setFilteredVehicles(data);
    }
    setRefreshing(false);
  };

  const filters = [
    {
      placeholder: "Type",
      options: types,
      onSelect: handleSelectType,
      selectedItem: selectedType,
    },
    {
      placeholder: "Make",
      options: makes,
      onSelect: handleSelectMake,
      selectedItem: selectedMake,
    },
    {
      placeholder: "Year",
      options: years,
      onSelect: handleSelectYear,
      selectedItem: selectedYear,
    },
  ];

  const handleSelectModel = (car) => {
    setSelectedModel(car);
    setVisible(true);
  };

  return (
    <Screen>
      <PageTitle text="Filter Cars" />
      <View style={styles.row}>
        {filters.map((f) => (
          <View style={styles.half} key={f.placeholder}>
            <SearchFilter
              placeholder={f.placeholder}
              title={f.placeholder}
              options={f.options}
              onSelect={f.onSelect}
              selectedItem={f.selectedItem}
            />
          </View>
        ))}
      </View>
      <PullToRefresh />
      <FlatList
        data={filteredVehicles}
        keyExtractor={(v) => String(v.Model_ID)}
        renderItem={({ item, index }) => (
          <CarInList
            car={item}
            isEven={index % 2 === 0}
            onSelect={handleSelectModel}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => getData(selectedType, selectedMake, selectedYear)}
        ItemSeparatorComponent={ListItemSeparator}
        ListEmptyComponent={<NoneFound selectedType={selectedType} />}
      />
      <ModelModal
        model={selectedModel}
        visible={visible}
        setVisible={setVisible}
        selectedType={selectedType}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  half: {
    flex: 1 / 2,
  },
});

export default CarSearch;
