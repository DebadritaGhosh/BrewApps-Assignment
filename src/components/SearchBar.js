import { StyleSheet, View, Dimensions, TextInput } from "react-native";
import React from "react";

let W = Dimensions.get("window").width;
let H = Dimensions.get("window").height;
//
import {handleFilterMovie} from "../helpers/helperFunction";

const SearchBar = ({movieList,setMovieList}) => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchbar__searchField}
        onChangeText={(e) => handleFilterMovie(e,movieList,setMovieList)}
        // value={text}
        placeholder="Search"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: { 
    backgroundColor: "#F1B95E",
   height: 75,
    width: W,
    justifyContent: "center",
    alignItems: "center"
  },
  searchbar__searchField: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 5,
    padding: 10
  },
});
