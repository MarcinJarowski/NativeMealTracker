import React from "react";
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
