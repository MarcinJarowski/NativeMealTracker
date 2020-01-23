import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import DateContextProvider from "./contexts/dateContext";
import MealsContextProvider from "./contexts/mealsContext";
import Navigator from "./routes/menuDrawer";

export default function App() {
  return (
    <DateContextProvider>
      <MealsContextProvider>
        <Navigator />
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
