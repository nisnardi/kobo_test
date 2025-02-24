import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

interface ListFooterProps {
  message: string;
  isLoading?: boolean;
}

export const ListFooter = ({ isLoading = false, message }: ListFooterProps) => {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator testID="loading-test-id" />
      ) : (
        <Text style={styles.text}>{message}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  text: {
    textAlign: "center",
  },
});
