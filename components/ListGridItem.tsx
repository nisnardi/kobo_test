import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Item } from "@/types/Item";
import { getRandomColor } from "@/utils/colors";

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
        {
          backgroundColor: item.backgroundColor || getRandomColor(),
          width: itemWidth,
        },
      ]}
    >
      {item.avatar ? (
        <Image
          style={[styles.image, { width: imageSize, height: imageSize }]}
          source={item.avatar}
          contentFit="cover"
        />
      ) : null}
      <Text style={styles.text}>
        {item.first_name} {item.last_name}
      </Text>
      {item.email ? <Text style={styles.text}>{item.email}</Text> : null}
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
