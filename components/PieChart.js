import React from "react";
import PieChart from "react-minimal-pie-chart";
import { View, Text, StyleSheet } from "react-native";

export default PieChartCircle = props => {
  const chartData = props.chartData;
  return <View style={styles.pieChartWrapper}></View>;
};

const styles = StyleSheet.create({
  pieChartWrapper: {
    position: "relative",
    maxWidth: 150
  },
  kcalNo: {
    fontSize: 14,
    position: "absolute",
    textAlign: "center",
    height: 20,
    width: 80,
    top: 65,
    left: 35,
    fontWeight: "bold"
  }
});
