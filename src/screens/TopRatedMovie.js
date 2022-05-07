import { View, FlatList, ActivityIndicator, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import Screen from "../components/Screen";
//
import { TOPRATED } from "../constants/apiRoutes";
//importing components
import Card from "../components/Card";
import Line from "../components/Line";
import SearchBar from "../components/SearchBar";
//importing globalstyles
import globalStyles from "../globalStyles/globalstyles";

let W = Dimensions.get("window").width;
let H = Dimensions.get("window").height;

const TopRatedMovie = () => {
    const [movieList, setMovieList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
  
    const fetchMovieList = () => {
      setMovieList([]);
      fetch(TOPRATED)
        .then((response) => response.json())
        .then((data) => setMovieList(data.results));
    };
  
    useEffect(() => {
      fetchMovieList();
    }, []);
  
    return (
      <Screen>
        <View style={globalStyles.container}>
          {movieList.length === 0 ? (
            <>
              <ActivityIndicator />
            </>
          ) : (
            <>
              <SearchBar movieList={movieList} setMovieList={setMovieList} />
              <FlatList
                data={movieList}
                keyExtractor={(movies) => movies.id.toString()}
                renderItem={({ item }) => (
                  <Card
                    movieList={movieList}
                    setMovieList={setMovieList}
                    item={item}
                  />
                )}
                ItemSeparatorComponent={() => <Line />}
                refreshing={refreshing}
                onRefresh={() => fetchMovieList()}
              />
            </>
          )}
        </View>
      </Screen>
    );
}

export default TopRatedMovie
