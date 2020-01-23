import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { vw } from "react-native-expo-viewport-units";

export default function FlatButton({ textValue, onPress, width }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{textValue}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#333",
    alignSelf: "center",
    width: 200,
    margin: 0
  },
  buttonText: {
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  }
});
