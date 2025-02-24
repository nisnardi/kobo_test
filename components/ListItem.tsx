import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Item } from "@/types/Item";

interface ListItemProps {
  onPress: () => void;
  item: Item;
}

export const ListItem = ({ onPress, item }: ListItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[styles.container, { backgroundColor: item.backgroundColor }]}
      >
        <View style={styles.image}>
          {item.avatar ? (
            <Image
              style={styles.image}
              source={item.avatar}
              contentFit="cover"
            />
          ) : null}
        </View>
        <View style={styles.descriptionContainer}>
          <Text>
            {item.first_name} {item.last_name}
          </Text>
          {item.email ? <Text>{item.email}</Text> : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  image: { width: 100, height: 100 },
  descriptionContainer: {
    flex: 1,
    paddingLeft: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
});
