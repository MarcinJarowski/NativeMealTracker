import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../components/navigation/Header";
import ShoppingList from "../screens/ShoppingList.js";

const screens = {
  ShoppingList: {
    screen: ShoppingList,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header title="Lista zakupów" navigation={navigation} />
        )
      };
    }
  }
};

// home stack navigator screens
const ShoppingListStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 60 }
  }
});

export default ShoppingListStack;
