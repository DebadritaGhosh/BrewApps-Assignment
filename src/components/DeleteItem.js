import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { handleDelete } from "../helpers/helperFunction";

function DeleteItem({ movieList, setMovieList, item }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => handleDelete(item, movieList, setMovieList)}
    >
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" size={35} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    //   backgroundColor: "pink",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DeleteItem;
