import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import DateContextProvider from "./contexts/dateContext";
import MealsContextProvider from "./contexts/mealsContext";
import ShoppingListContextProvider from "./contexts/shoppingListContext";
import Navigator from "./routes/menuDrawer";

export default function App() {
  return (
    <DateContextProvider>
      <MealsContextProvider>
        <ShoppingListContextProvider>
          <Navigator />
        </ShoppingListContextProvider>
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
