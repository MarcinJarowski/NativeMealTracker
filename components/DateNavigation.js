import React, { useContext } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet
} from "react-native";
import { DateContext } from "../contexts/dateContext";
import { Ionicons } from "@expo/vector-icons";
import "moment/locale/pl";
import { vw, vh } from "react-native-expo-viewport-units";

export default DateNavigation = props => {
  const { date, changeDate } = useContext(DateContext);
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.arrow}
        onPress={() => {
          let prevDate = date.clone().subtract(1, "days");
          changeDate(prevDate);
        }}
      >
        <Ionicons name="ios-arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.dateBox}>
        <View style={styles.selectedDay}>
          <Text style={styles.dateDay}>{date.format("dddd")}</Text>
          <Text style={styles.calendarDate}>{date.format("ll")}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.arrow}
        onPress={() => {
          let nextDate = date.clone().add(1, "days");
          changeDate(nextDate);
        }}
      >
        <Ionicons name="ios-arrow-forward" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    width: vw(90),
    height: vh(8),
    marginVertical: 12,
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-between"
  },
  dateBox: {
    flexDirection: "row",
    justifyContent: "center"
  },
  selectedDay: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  dateDay: {
    marginRight: 20,
    fontWeight: "600"
  },
  calendarDate: {
    fontWeight: "600"
  },
  arrow: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 5
  }
});
