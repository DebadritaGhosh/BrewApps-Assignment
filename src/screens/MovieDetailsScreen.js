import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
//importing components
import Screen from "../components/Screen";
//importing vector icon
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
//importing API/Link
import { IMAGEURL } from "../constants/apiRoutes";

//Dimensions
let W = Dimensions.get("window").width;
let H = Dimensions.get("window").height;

const MovieDetailsScreen = ({ navigation, route }) => {
  const movieDetails = route.params.movieDetails;
  return (
    <Screen>
      <View style={styles.movieDetailsScreen__navBar}>
        <Ionicons
          name="chevron-back"
          size={30}
          color="grey"
          onPress={() => navigation.goBack()}
        />
        <Text style={{ color: "grey", fontSize: 18 }}>Back</Text>
      </View>
      <ImageBackground
        style={styles.movieDetailsScreen__background}
        source={{ uri: IMAGEURL + movieDetails.poster_path }}
      >
        <View style={styles.movieDetailsScreen__contentBox}>
          <Text style={styles.movieDetailsScreen__title}>
            {movieDetails.title}
          </Text>
          <Text style={styles.movieDetailsScreen__date}>
            {movieDetails.release_date}
          </Text>
          <View style={styles.movieDetailsScreen__smallContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Foundation name="crown" size={24} color="white" />
              <Text style={{ color: "white", marginLeft: 10 }}>
                {movieDetails.vote_average * 10}%
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Foundation name="clock" size={24} color="white" />
              <Text style={{ color: "white", marginLeft: 10 }}>2h 22 mins</Text>
            </View>
          </View>
          <Text style={styles.movieDetailsScreen__overview}>
            {movieDetails.overview}
          </Text>
        </View>
      </ImageBackground>
    </Screen>
  );
};

const styles = StyleSheet.create({
  movieDetailsScreen__navBar: {
    backgroundColor: "#F1B95E",
    width: "100%",
    minHeight: 75,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  movieDetailsScreen__background: {
    flex: 1,
    width: W,
    alignItems: "center",
    justifyContent: "center",
  },
  movieDetailsScreen__contentBox: {
    backgroundColor: "#242B2E",
    opacity: 0.9,
    width: "80%",
    minHeight: 200,
    padding: 10,
  },
  movieDetailsScreen__title: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 15,
  },
  movieDetailsScreen__date: { color: "white", marginBottom: 10 },
  movieDetailsScreen__smallContainer: {
    width: "80%",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  movieDetailsScreen__overview: { color: "white", fontWeight: "bold" },
});

export default MovieDetailsScreen;
