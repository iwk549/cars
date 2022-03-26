import React from "react";
import {
  StyleSheet,
  ScrollView,
  Modal,
  Image,
  View,
  Alert,
  StatusBar,
} from "react-native";
import BlockButton from "../common/button/BlockButton";

import PageHeader from "../common/text/PageHeader";
import { defaultStyles } from "../../config";
import AppText from "../common/text/AppText";
import ListItemSeparator from "../common/ListItemSeparator";

function ModelModal({ model, visible, setVisible, selectedType }) {
  if (!model) return false;
  return (
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
          icon={{ icon: "cancel", size: 15, color: "black" }}
        />
        <PageHeader text={model.Make_Name + " " + model.Model_Name} />
        <AppText style={styles.text}>{model.VehicleTypeName}</AppText>
        <AppText style={styles.text}>{model.location}</AppText>
        <AppText style={styles.text}>{model.dailyRate}/day</AppText>
        <ListItemSeparator />
        <BlockButton
          title={`Rent this ${selectedType?.label} Now`}
          backgroundColor="primary"
          textColor="lightText"
          icon={{
            icon: "car",
            size: 20,
            color: "white",
          }}
          onPress={() =>
            Alert.alert(
              `Congratulations on renting this ${selectedType.value}!!!`
            )
          }
        />
        <ListItemSeparator />
        <Image
          source={{
            uri: model.image1,
          }}
          style={styles.image}
        />
        <View style={{ height: 5 }} />
        <Image
          source={{
            uri: model.image2,
          }}
          style={styles.image}
        />
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    margin: 5,
    marginTop: StatusBar.currentHeight,
    borderRadius: 5,
  },
  image: {
    height: 200,
    width: defaultStyles.sizes.screenDimensions.width - 20,
    resizeMode: "contain",
    alignSelf: "center",
  },
  text: {
    textAlign: "center",
  },
});

export default ModelModal;
