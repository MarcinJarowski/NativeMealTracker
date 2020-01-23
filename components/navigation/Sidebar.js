import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image
} from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import profileImg from "../../assets/images/profile.jpg";
import backgroundImg from "../../assets/images/sidebarBg.jpg";
export default Sidebar = props => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <ImageBackground
          source={backgroundImg}
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image source={profileImg} style={styles.image} />
          <Text style={styles.userName}>Marcin</Text>
        </ImageBackground>
      </View>

      <View style={styles.liWrapper}>
        <DrawerNavigatorItems {...props} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  userName: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -5, height: 5 },
    textShadowRadius: 10
  },
  header: {
    flex: 1,
    height: 200,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderWidth: 0,
    overflow: "hidden"
  },
  liWrapper: {
    paddingTop: 10
  },
  image: {
    margin: "auto",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 60,
    width: 120,
    height: 120,
    resizeMode: "cover"
  },
  view: {
    flex: 1,
    flexDirection: "row"
  }
});
