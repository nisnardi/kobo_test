import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { HeaderIcon } from "./HeaderIcon";

interface HeaderProps {
  onPressGrid: () => void;
  onPressList: () => void;
}

export const Header = ({ onPressGrid, onPressList }: HeaderProps) => {
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
          onPress={() => {}}
          iconSource={require("../assets/images/sort_az.png")}
        />
        {/* // Sort last Name Z-A */}
        <HeaderIcon
          onPress={() => {}}
          iconSource={require("../assets/images/sort_za.png")}
        />
        {/* // Only show elements that have large avatars */}
        <HeaderIcon
          onPress={() => {}}
          iconSource={require("../assets/images/avatar.png")}
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
