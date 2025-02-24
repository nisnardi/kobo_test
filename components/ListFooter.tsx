import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

interface ListFooterProps {
  message: string;
  isLoading?: boolean;
}

const ListFooter = ({ isLoading = false, message }: ListFooterProps) => {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.text}>{message}</Text>
      )}
    </View>
  );
};

export default ListFooter;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  text: {
    textAlign: "center",
  },
});
