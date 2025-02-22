import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const IMAGE_SIZE = 30;

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>User List</Text>
      <View style={styles.buttonsContainer}>
        {/* // Grid mode */}
        <Image
          style={styles.image}
          source={require("../assets/images/grid.png")}
        />
        {/* // List mode */}
        <Image
          style={styles.image}
          source={require("../assets/images/list.png")}
        />
        {/* // Sort last Name A-Z */}
        <Image
          style={styles.image}
          source={require("../assets/images/sort_az.png")}
        />
        {/* // Sort last Name Z-A */}
        <Image
          style={styles.image}
          source={require("../assets/images/sort_za.png")}
        />
        {/* // Only show elements that have large avatars */}
        <Image
          style={styles.image}
          source={require("../assets/images/avatar.png")}
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
  image: { width: IMAGE_SIZE, height: IMAGE_SIZE },
});
