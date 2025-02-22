import React from "react";
import { Dimensions, FlatList, StyleSheet } from "react-native";
import { ListItem } from "@/components/ListItem";
import { Item } from "@/types/Item";
import { ListGridItem } from "./ListGridItem";

interface ListProps {
  data: Item[];
  onPressItem: () => void;
  showAsGrid: boolean;
}

export const List = ({ data, onPressItem, showAsGrid = false }: ListProps) => {
  const itemWidth = Dimensions.get("window").width / 2;
  const numColumns = showAsGrid ? 2 : 1;

  const renderItem = ({ item }: { item: Item }) =>
    showAsGrid ? (
      <ListGridItem
        item={item}
        onPress={onPressItem}
        itemWidth={itemWidth}
        key={item.id}
      />
    ) : (
      <ListItem item={item} onPress={onPressItem} key={item.id} />
    );

  return (
    <FlatList
      key={`flatlist-${showAsGrid ? "grid" : "list"}`}
      contentContainerStyle={styles.list}
      data={data}
      renderItem={renderItem}
      numColumns={numColumns}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: "center",
  },
});
