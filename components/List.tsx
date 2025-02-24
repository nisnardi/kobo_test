import React, { useCallback } from "react";
import { Dimensions, FlatList, StyleSheet } from "react-native";
import { ListItem } from "@/components/ListItem";
import { Item } from "@/types/Item";
import { ListGridItem } from "./ListGridItem";
import { Loader } from "./Loader";
import { EmptyList } from "./EmptyList";
import ListFooter from "./ListFooter";

interface ListProps {
  data: Item[];
  showListAsGrid: boolean;
  isAvatarFilterEnabled: boolean;
  isLoading?: boolean;
  isLoadingPage?: boolean;
  onPressItem: () => void;
  onEndReached: () => void;
}

export const List = ({
  data,
  showListAsGrid = false,
  isLoading = false,
  isLoadingPage = false,
  onPressItem,
  onEndReached,
}: ListProps) => {
  const listType = showListAsGrid ? "grid" : "list";
  const itemWidth = Dimensions.get("window").width / 2;

  const renderItem = useCallback(
    ({ item, index }: { item: Item; index: number }) =>
      showListAsGrid ? (
        <ListGridItem
          item={item}
          key={`${index}-${listType}-item.id`}
          onPress={onPressItem}
          itemWidth={itemWidth}
        />
      ) : (
        <ListItem
          item={item}
          key={`${index}-${listType}-item.id`}
          onPress={onPressItem}
        />
      ),
    [showListAsGrid, itemWidth, onPressItem]
  );

  const onEndReachedHandler = () => {
    if (data.length > 0) {
      onEndReached();
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={data}
      renderItem={renderItem}
      numColumns={showListAsGrid ? 2 : 1}
      key={listType}
      keyExtractor={(item) => `${listType}-list-item-${item.id}`}
      initialNumToRender={20}
      maxToRenderPerBatch={10}
      windowSize={showListAsGrid ? 6 : 12}
      removeClippedSubviews={true}
      showsVerticalScrollIndicator={false}
      onEndReached={onEndReachedHandler}
      onEndReachedThreshold={0.5}
      ListEmptyComponent={<EmptyList message="No Items to show.." />}
      ListFooterComponent={() => {
        if (data.length > 0) {
          return <ListFooter isLoading={isLoadingPage} message="End of list" />;
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: "center",
    flexGrow: 1,
  },
});
