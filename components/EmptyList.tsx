import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface EmptyListProps {
  message: string;
}

export const EmptyList = ({ message }: EmptyListProps) => {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
