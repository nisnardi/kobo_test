import { COLORS } from "@/constants/Colors";
import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

export const Loader = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color={COLORS.active} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
