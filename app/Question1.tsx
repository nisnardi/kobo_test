import React, { useMemo, useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { COLORS } from "@/constants/Colors";
import { Item } from "@/types/Item";
import { Sort } from "@/types/Sort";
import { sortCollection } from "@/utils/sorting";

const DATA = require("../assets/MOCK_DATA.json");

export default function Question1() {
  const [robots, setRobots] = useState<Item[]>(DATA);
  const [showListAsGrid, setShowListAsGrid] = useState(false);
  const [sort, setSort] = useState<Sort>("ASC");

  const sortedRobots = useMemo(
    () => sortCollection(robots, sort),
    [robots, sort]
  );

  const _onPressItem = () => {
    console.log("open item");
  };

  const _onPressGrid = () => setShowListAsGrid(true);

  const _onPressList = () => setShowListAsGrid(false);
  const _onPressSort = (sortType: Sort) => setSort(sortType);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header
          onPressGrid={_onPressGrid}
          onPressList={_onPressList}
          onPressSort={_onPressSort}
        />
        <List
          data={sortedRobots}
          onPressItem={_onPressItem}
          showAsGrid={showListAsGrid}
        />
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
