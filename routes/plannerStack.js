import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../components/Header.js";
import Planner from "../screens/Planner.js";

const screens = {
  Planner: {
    screen: Planner,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Planer" navigation={navigation} />
      };
    }
  }
};

// home stack navigator screens
const PlannerStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 60 }
  }
});

export default PlannerStack;
