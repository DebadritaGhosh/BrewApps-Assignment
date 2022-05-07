import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
//importing screens
import MovieListScreen from "./src/screens/MovieListScreen";
import MovieDetailsScreen from "./src/screens/MovieDetailsScreen";
import TopRatedMovie from "./src/screens/TopRatedMovie";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const nowPlayingMovieNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="movielist" component={MovieListScreen} />
    <Stack.Screen name="moviedetails" component={MovieDetailsScreen} />
  </Stack.Navigator>
);

const topRatedMovieNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="topmovie" component={TopRatedMovie} />
    <Stack.Screen name="moviedetails" component={MovieDetailsScreen} />
  </Stack.Navigator>
);


const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "#F1B95E",
      activeTintColor: "black",
      inactiveBackgroundColor: "#F1B95E",
      inactiveTintColor: "grey",
    }}
  >
    <Tab.Screen
      name="Now Playing"
      component={nowPlayingMovieNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="movie-open" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Top Rated"
      component={topRatedMovieNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Entypo name="star-outlined" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#F1B95E" />
      <TabNavigator />
    </NavigationContainer>
  );
}
