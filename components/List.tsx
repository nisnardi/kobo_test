import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { ListItem } from "@/components/ListItem";
import { Item } from "@/types/Item";

interface ListProps {
  data: Item[];
  onPressItem: () => void;
}

export const List = ({ data, onPressItem }: ListProps) => {
  const renderItem = ({ item }: { item: Item }) => (
    <ListItem item={item} onPress={onPressItem} />
  );

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: "center",
  },
});
