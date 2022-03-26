import React from "react";
import { Text, StyleSheet } from "react-native";

import { defaultStyles } from "../../config";

function AppText({ style, children, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: defaultStyles.text,
});

export default AppText;
