import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../components/Header.js";
import MealsLibrary from "../screens/MealsLibrary.js";

const screens = {
  MealsLibrary: {
    screen: MealsLibrary,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Posiłki" navigation={navigation} />
      };
    }
  }
};

// home stack navigator screens
const MealsLibraryStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 60 }
  }
});

export default MealsLibraryStack;
