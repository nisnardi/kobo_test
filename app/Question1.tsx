import React from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";

import { Header } from "@/components/Header";
import { ListItem } from "@/components/ListItem";

import { Item } from "@/types/Item";
import { COLORS } from "@/constants/Colors";

const DATA = require("../assets/MOCK_DATA.json");

export default function Question1() {
  const _onPressItem = () => {
    console.log("open item");
  };

  const renderItem = ({ item }: { item: Item }) => (
    <ListItem item={item} onPress={_onPressItem} />
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header />
        <FlatList
          contentContainerStyle={styles.list}
          data={DATA}
          renderItem={renderItem}
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
  list: {
    justifyContent: "center",
  },
});
