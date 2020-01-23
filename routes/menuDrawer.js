import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

// stacks
import PlannerStack from "./plannerStack";
import ProfilePageStack from "./profilePageStack";
import ShoppingListStack from "./shoppingStack";
import MealsLibraryStack from "./mealsLibraryStack";

import { Feather } from "@expo/vector-icons";
import { vw, vh } from "react-native-expo-viewport-units";
import Sidebar from "../components/navigation/Sidebar";

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator(
  {
    Planer: {
      screen: PlannerStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Feather name="calendar" size={24} color={tintColor} />
        )
      }
    },
    Zakupy: {
      screen: ShoppingListStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Feather name="shopping-cart" size={24} color={tintColor} />
        )
      }
    },
    Posiłki: {
      screen: MealsLibraryStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Feather name="book-open" size={24} color={tintColor} />
        )
      }
    },
    Profil: {
      screen: ProfilePageStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Feather name="user" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    contentComponent: props => <Sidebar {...props} />,
    drawerWidth: vw(75),
    hideStatusBar: true,
    drawerType: "slide",
    drawerPosition: "right",
    contentOptions: {
      activeBackgroundColor: "#red",

      itemStyle: {
        alignItems: "center",
        alignSelf: "center",
        textAlign: "center",
        width: vw(65),
        marginHorizontal: 5,
        paddingVertical: 10,
        paddingLeft: 30
      },
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8
      }
    }
  }
);

export default createAppContainer(RootDrawerNavigator);
