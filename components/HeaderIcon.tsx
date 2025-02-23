import { COLORS } from "@/constants/Colors";
import React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";

interface HeaderIcon {
  iconSource: ImageSourcePropType;
  selected?: boolean;
  onPress: () => void;
}

const ICON_SIZE = 30;

export const HeaderIcon = ({
  iconSource,
  selected = false,
  onPress,
}: HeaderIcon) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={selected ? styles.selected : null}
    >
      <Image style={styles.image} source={iconSource} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: { width: ICON_SIZE, height: ICON_SIZE },
  selected: { backgroundColor: COLORS.active },
});
