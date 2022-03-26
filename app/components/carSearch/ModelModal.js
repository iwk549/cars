import React from "react";
import { StyleSheet, ScrollView, Modal, Image } from "react-native";
import BlockButton from "../common/button/BlockButton";

import PageHeader from "../common/text/PageHeader";
import { defaultStyles } from "../../config";

function ModelModal({ model, visible, setVisible }) {
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
        />
        <PageHeader text={model.Make_Name + " " + model.Model_Name} />
        <Image
          source={{
            uri: model.image,
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
    borderRadius: 5,
  },
  image: {
    height: 200,
    width: defaultStyles.sizes.screenDimensions.width - 20,
    resizeMode: "contain",
  },
});

export default ModelModal;
