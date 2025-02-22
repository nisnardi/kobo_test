import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Item } from "@/types/Item";
import { getRandomColor } from "@/utils/colors";

interface ListItemProps {
  onPress: () => void;
  item: Item;
}

export const ListItem = ({ onPress, item }: ListItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          { backgroundColor: item.backgroundColor || getRandomColor() },
        ]}
      >
        {item.avatar ? (
          <Image style={styles.image} source={{ uri: item.avatar }} />
        ) : null}
        <View style={styles.descriptionContainer}>
          {item.first_name && item.last_name ? (
            <Text>
              {item.first_name} {item.last_name}
            </Text>
          ) : null}
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
