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
  testID?: string;
}

const ICON_SIZE = 30;

export const HeaderIcon = ({
  iconSource,
  selected = false,
  onPress,
  testID,
}: HeaderIcon) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={selected ? styles.selected : null}
      testID="header-icon-container-test-id"
    >
      <Image
        style={styles.image}
        source={iconSource}
        testID="header-icon-test-id"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: { width: ICON_SIZE, height: ICON_SIZE },
  selected: { backgroundColor: COLORS.active },
});
