import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { COLORS } from "@/constants/Colors";
import { Item } from "@/types/Item";
import { Sort } from "@/types/Sort";
import { sortCollection } from "@/utils/sorting";

const DATA = require("../assets/MOCK_DATA.json");

export default function Question1() {
  const [originalCollection, setOriginalCollection] = useState<Item[]>(DATA);
  const [robots, setRobots] = useState<Item[]>(DATA);
  const [showListAsGrid, setShowListAsGrid] = useState(false);
  const [sort, setSort] = useState<Sort>("ASC");
  const [shouldFilterWithoutAvatar, setShouldFilterWithoutAvatar] =
    useState(false);

  useEffect(() => {
    const sortedCollection = sortCollection(
      originalCollection,
      sort,
      shouldFilterWithoutAvatar
    );

    setRobots(sortedCollection);
  }, [sort, shouldFilterWithoutAvatar]);

  const _onPressItem = () => {
    console.log("open item");
  };

  const _onPressGrid = () => setShowListAsGrid(true);

  const _onPressList = () => setShowListAsGrid(false);
  const _onPressSort = (sortType: Sort) => setSort(sortType);

  const _onPressAvatarFilter = () => {
    setShouldFilterWithoutAvatar((prevState) => !prevState);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.container}>
        <Header
          onPressGrid={_onPressGrid}
          onPressList={_onPressList}
          onPressSort={_onPressSort}
          onPressAvatarFilter={_onPressAvatarFilter}
          isAvatarFilterEnabled={shouldFilterWithoutAvatar}
        />
        <List
          data={robots}
          onPressItem={_onPressItem}
          showListAsGrid={showListAsGrid}
          isAvatarFilterEnabled={shouldFilterWithoutAvatar}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
