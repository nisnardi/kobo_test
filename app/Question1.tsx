import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { COLORS } from "@/constants/Colors";

const DATA = require("../assets/MOCK_DATA.json");

export default function Question1() {
  const [showListasGrid, setShowListasGrid] = useState(false);

  const _onPressItem = () => {
    console.log("open item");
  };

  const _onPressGrid = () => setShowListasGrid(true);

  const _onPressList = () => setShowListasGrid(false);

  console.log(showListasGrid);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header onPressGrid={_onPressGrid} onPressList={_onPressList} />
        <List data={DATA} onPressItem={_onPressItem} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
