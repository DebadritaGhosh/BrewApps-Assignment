import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
//importing usenavigation hook
import { useNavigation } from "@react-navigation/native";
//importing Components
import DeleteItem from "./DeleteItem";
//
import { IMAGEURL } from "../constants/apiRoutes";
//
let W = Dimensions.get("window").width;
let H = Dimensions.get("window").height;

const Card = ({ movieList, setMovieList, item }) => {
  const navigation = useNavigation();
  return (
    <Swipeable renderRightActions={() => <DeleteItem movieList={movieList} setMovieList={setMovieList} item={item} />}>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("moviedetails", { movieDetails: item })
        }
      >
        <View style={styles.card__imageContainer}>
          <Image
            style={{
              width: "90%",
              height: "100%",
              resizeMode: "cover",
            }}
            source={{ uri: IMAGEURL + item.backdrop_path }}
          />
        </View>
        <View style={styles.card__detailContainer}>
          <Text
            style={{ fontSize: 15, fontWeight: "bold" }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.title}
          </Text>
          <Text style={{ fontSize: 10 }} numberOfLines={5} ellipsizeMode="tail">
            {item.overview}
          </Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    width: W,
    maxHeight: 150,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  card__imageContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  card__detailContainer: {
    flex: 2,
    paddingHorizontal: 5,
    height: "100%",
    justifyContent: "space-around",
  },
});
