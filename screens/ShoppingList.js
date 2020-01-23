import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { globalStyles, images } from "../styles/globalStyles";
import { TextInput } from "react-native-gesture-handler";
import { vw } from "react-native-expo-viewport-units";
import { AntDesign } from "@expo/vector-icons";
import FlatButton from "../components/Button";

export default function ShoppingList() {
  const [value, onChangeText] = React.useState("");
  const [counterValue, setCounterValue] = React.useState(1);

  const addToCounter = () => {
    let newValue = counterValue + 1;
    setCounterValue(newValue);
  };
  const decreaseFromCounter = () => {
    if (counterValue > 1) {
      let newValue = counterValue - 1;
      setCounterValue(newValue);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={globalStyles.container}>
        <View style={styles.formWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder="Wpisz nazwę produktu..."
          />
          <View style={styles.counter}>
            <TouchableOpacity onPress={decreaseFromCounter} style={styles.icon}>
              <AntDesign name="minuscircle" size={32} color="#e16c6c" />
            </TouchableOpacity>
            <Text style={styles.counterValue}>Ilość: {counterValue}</Text>
            <TouchableOpacity onPress={addToCounter} style={styles.icon}>
              <AntDesign name="pluscircle" size={32} color="#729283" />
            </TouchableOpacity>
          </View>
          <FlatButton
            textValue="Dodaj produkt"
            onPress={() => console.log("elo")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    width: vw(90),
    padding: vw(3)
  },
  counter: {
    marginVertical: 20,
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: "auto",
    alignItems: "center"
  },
  counterValue: {
    fontWeight: "bold",
    fontSize: 20
  },
  icon: {
    paddingHorizontal: 20
  },
  input: {
    height: 40,
    width: vw(80),
    alignSelf: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    textAlign: "center",
    paddingHorizontal: 20
  }
});
