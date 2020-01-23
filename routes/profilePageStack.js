import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../components/Header.js";
import ProfilePage from "../screens/ProfilePage.js";

const screens = {
  ProfilePage: {
    screen: ProfilePage,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Profil" navigation={navigation} />
      };
    }
  }
};

// home stack navigator screens
const ProfilePageStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 60 }
  }
});

export default ProfilePageStack;
