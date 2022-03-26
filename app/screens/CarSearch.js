import React, { useState, useEffect, useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { makes, models, getCars } from "../api/vehicles";
import { years } from "../functions/misc";
import { ListFilter, PageHeader, Screen } from "../components";
import CarInList from "../components/carSearch/CarInList";
import NoneFound from "../components/carSearch/NoneFound";
import SearchFilter from "../components/carSearch/SearchFilter";

function CarSearch() {
  const [refreshing, setRefreshing] = useState(false);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedMake, setSelectedMake] = useState(makes[0]);
  const [selectedYear, setSelectedYear] = useState(years[0]);

  useEffect(() => {
    getData(selectedModel, selectedMake, selectedYear);
  }, []);

  const handleSelectModel = (model) => {
    setSelectedModel(model);
    getData(model, selectedMake, selectedYear);
  };

  const handleSelectMake = (make) => {
    setSelectedMake(make);
    getData(selectedModel, make, selectedYear);
  };

  const handleSelectYear = (year) => {
    setSelectedYear(year);
    getData(selectedModel, selectedMake, year);
  };

  const getData = async (model, make, year) => {
    setRefreshing(true);
    const res = await getCars(model, make, year);
    if (res.ok) {
      setFilteredVehicles(res.data.Results);
    }
    setRefreshing(false);
  };

  const filters = [
    {
      title: "Model",
      options: models,
      onSelect: handleSelectModel,
      selectedItem: selectedModel,
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

  return (
    <Screen>
      <PageHeader text="Search Cars" />
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
      {filteredVehicles.length > 0 ? (
        <FlatList
          data={filteredVehicles}
          keyExtractor={(v) => String(v.Model_ID)}
          renderItem={({ item }) => <CarInList car={item} />}
          refreshing={refreshing}
          onRefresh={() => getData(selectedModel, selectedMake, selectedYear)}
          ListEmptyComponent={<NoneFound />}
        />
      ) : null}
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
