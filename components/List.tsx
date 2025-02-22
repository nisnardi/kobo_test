import React, { useCallback } from "react";
import { Dimensions, FlatList, StyleSheet } from "react-native";
import { ListItem } from "@/components/ListItem";
import { Item } from "@/types/Item";
import { ListGridItem } from "./ListGridItem";

interface ListProps {
  data: Item[];
  onPressItem: () => void;
  showListAsGrid: boolean;
}

export const List = ({
  data,
  onPressItem,
  showListAsGrid = false,
}: ListProps) => {
  const listType = showListAsGrid ? "grid" : "list";
  const itemWidth = Dimensions.get("window").width / 2;

  const renderItem = useCallback(
    ({ item }: { item: Item }) =>
      showListAsGrid ? (
        <ListGridItem item={item} onPress={onPressItem} itemWidth={itemWidth} />
      ) : (
        <ListItem item={item} onPress={onPressItem} key={item.id} />
      ),
    [showListAsGrid]
  );

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={data}
      renderItem={renderItem}
      numColumns={showListAsGrid ? 2 : 1}
      key={`${listType}-list`}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: "center",
  },
});
