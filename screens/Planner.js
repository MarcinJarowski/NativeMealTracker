import React, { useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/globalStyles";
import DateNavigation from "../components/DateNavigation.js";
import PieChartCircle from "../components/PieChart.js";

export default function Planner() {
  const chartData = [25, 35, 40];
  return (
    <View style={globalStyles.container}>
      <DateNavigation />
      <View>
        <PieChartCircle chartData={chartData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
