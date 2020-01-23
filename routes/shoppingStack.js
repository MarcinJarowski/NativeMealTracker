import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../components/navigation/Header";
import ShoppingList from "../screens/ShoppingList.js";

const screens = {
  ShoppingList: {
    screen: ShoppingList,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Zakupy" navigation={navigation} />
      };
    }
  }
};

// home stack navigator screens
const ShoppingListStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#fff",
    headerStyle: { backgroundColor: "#eee", height: 60 }
  }
});

export default ShoppingListStack;
