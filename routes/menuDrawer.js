import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

// stacks
import PlannerStack from "./plannerStack";
import ProfilePageStack from "./profilePageStack";
import ShoppingListStack from "./shoppingStack";
import MealsLibraryStack from "./mealsLibraryStack";

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Planer: {
    screen: PlannerStack
  },
  Zakupy: {
    screen: ShoppingListStack
  },
  Posiłki: {
    screen: MealsLibraryStack
  },
  Profil: {
    screen: ProfilePageStack
  }
});

export default createAppContainer(RootDrawerNavigator);
