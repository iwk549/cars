import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Modal, ScrollView } from "react-native";

import AppText from "../text/AppText";
import BlockButton from "../button/BlockButton";
import ListItemSeparator from "../ListItemSeparator";
import PageHeader from "../text/PageHeader";
import { defaultStyles } from "../../../config";

function AppPicker({ options, selectedOption, placeholder, title, onSelect }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <BlockButton
        title={title}
        backgroundColor="primary"
        textColor="lightText"
        size="small"
        onPress={() => setVisible(true)}
      />
      <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
        style={styles.modal}
      >
        <ScrollView style={styles.modal}>
          <BlockButton
            title="Cancel"
            onPress={() => setVisible(false)}
            backgroundColor="light"
            textColor="darkText"
            size="small"
          />
          <PageHeader text={"Select " + title} />
          {options.map((o, idx) => {
            const isSelected = o.value === selectedOption;
            const itemStyle = idx % 2 === 0 ? {} : styles.oddItemStyle;
            return (
              <TouchableOpacity
                style={[
                  styles.itemStyle,
                  itemStyle,
                  isSelected ? styles.selectedStyle : {},
                ]}
                onPress={() => {
                  onSelect(o);
                  setVisible(false);
                }}
              >
                <AppText style={styles.text}>{o.label}</AppText>
                <ListItemSeparator />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  itemStyle: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  modal: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    margin: 5,
    borderRadius: 5,
  },
  oddItemStyle: {},
  selectedStyle: {
    backgroundColor: defaultStyles.colors.light,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 5,
  },
});

export default AppPicker;
