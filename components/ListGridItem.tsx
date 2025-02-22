import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Item } from "@/types/Item";

interface ListGridItem {
  onPress: () => void;
  item: Item;
  itemWidth: number;
}

const GAP = 20;

export const ListGridItem = ({ item, itemWidth, onPress }: ListGridItem) => {
  const imageSize = itemWidth - GAP;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: item.backgroundColor, width: itemWidth },
      ]}
    >
      <Image
        style={[styles.image, { width: imageSize, height: imageSize }]}
        source={{ uri: item.avatar }}
        resizeMode="cover"
      />
      <Text style={styles.text}>
        {item.first_name} {item.last_name}
      </Text>
      <Text style={styles.text}>{item.email}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: "center",
  },
  image: {
    marginBottom: GAP,
  },
  text: {
    marginBottom: GAP,
  },
});
