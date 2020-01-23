import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../components/Header.js";
import ShoppingList from "../screens/ShoppingList.js";

const screens = {
  ShoppingList: {
    screen: ShoppingList,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Planer" navigation={navigation} />
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
