import React, { useState, useEffect, useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { makes, types, getCars } from "../api/vehicles";
import { getRandomCarImage, years } from "../functions/misc";
import { PageHeader, Screen } from "../components";
import CarInList from "../components/carSearch/CarInList";
import NoneFound from "../components/carSearch/NoneFound";
import SearchFilter from "../components/carSearch/SearchFilter";
import ListItemSeparator from "../components/common/ListItemSeparator";
import ModelModal from "../components/carSearch/ModelModal";

function CarSearch() {
  const [refreshing, setRefreshing] = useState(false);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [selectedType, setSelectedType] = useState(types[0]);
  const [selectedMake, setSelectedMake] = useState(makes[0]);
  const [selectedYear, setSelectedYear] = useState(years[0]);
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
        result.image = getRandomCarImage();
        data.push(result);
      });
      setFilteredVehicles(data);
    }
    setRefreshing(false);
  };

  const filters = [
    {
      title: "Type",
      options: types,
      onSelect: handleSelectType,
      selectedItem: selectedType,
    },
    {
      title: "Make",
      options: makes,
      onSelect: handleSelectMake,
      selectedItem: selectedMake,
    },
    {
      title: "Year",
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
      <PageHeader text="Filter Cars" />
      <View style={styles.row}>
        {filters.map((f) => (
          <View style={styles.third} key={f.title}>
            <SearchFilter
              title={f.title}
              options={f.options}
              onSelect={f.onSelect}
              selectedItem={f.selectedItem}
            />
          </View>
        ))}
      </View>
      <PageHeader text="Select Model" />
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
        ListEmptyComponent={<NoneFound />}
      />
      <ModelModal
        model={selectedModel}
        visible={visible}
        setVisible={setVisible}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  third: {
    flex: 1 / 3,
  },
});

export default CarSearch;
