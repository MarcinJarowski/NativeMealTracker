import React, { useContext } from "react";
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import DateContextProvider from "./contexts/dateContext";
import MealsContextProvider from "./contexts/mealsContext";
import Navigator from "./routes/menuDrawer";

export default function App() {
  return (
    <DateContextProvider>
      <MealsContextProvider>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <Navigator />
        </TouchableWithoutFeedback>
      </MealsContextProvider>
    </DateContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
