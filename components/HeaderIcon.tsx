import React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";

interface HeaderIcon {
  iconSource: ImageSourcePropType;
  onPress: () => void;
}

const ICON_SIZE = 30;

export const HeaderIcon = ({ iconSource, onPress }: HeaderIcon) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.image} source={iconSource} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: { width: ICON_SIZE, height: ICON_SIZE },
});
