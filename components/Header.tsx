import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { HeaderIcon } from "./HeaderIcon";
import { Sort } from "@/types/Sort";

interface HeaderProps {
  isAvatarFilterEnabled: boolean;
  onPressGrid: () => void;
  onPressList: () => void;
  onPressSort: (sort: Sort) => void;
  onPressAvatarFilter: () => void;
}

export const Header = ({
  isAvatarFilterEnabled = false,
  onPressGrid,
  onPressList,
  onPressSort,
  onPressAvatarFilter,
}: HeaderProps) => {
  const onPressSortHandler = (sortType: Sort) => () => onPressSort(sortType);

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>User List</Text>
      <View style={styles.buttonsContainer}>
        {/* // Grid mode */}
        <HeaderIcon
          onPress={onPressGrid}
          iconSource={require("../assets/images/grid.png")}
        />
        {/* // List mode */}
        <HeaderIcon
          onPress={onPressList}
          iconSource={require("../assets/images/list.png")}
        />
        {/* // Sort last Name A-Z */}
        <HeaderIcon
          onPress={onPressSortHandler("ASC")}
          iconSource={require("../assets/images/sort_az.png")}
        />
        {/* // Sort last Name Z-A */}
        <HeaderIcon
          onPress={onPressSortHandler("DESC")}
          iconSource={require("../assets/images/sort_za.png")}
        />
        {/* // Only show elements that have large avatars */}
        <HeaderIcon
          onPress={onPressAvatarFilter}
          iconSource={require("../assets/images/avatar.png")}
          selected={isAvatarFilterEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
