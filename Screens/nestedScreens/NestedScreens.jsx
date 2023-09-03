import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import PostsScreen from "../nestedScreens/PostsScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";
import { Feather } from "@expo/vector-icons";
import LogOut from "../../Components/LogOut";

const NestedScreen = createStackNavigator();

export default NestedStack = ({ navigation, route }) => {
  const { login, email } = route.params;
  // console.log(email);
  return (
    <NestedScreen.Navigator
      screenOptions={({ navigation }) => ({
        headerTitleAlign: "center", // Выравнивание заголовка по центру
        headerStyle: {
          backgroundColor: "#FFFFFF",
          height: 88,
          borderBottomWidth: 1,
          borderBottomColor: "#BDBDBD",
        },
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 17,
          color: "#212121",
          letterSpacing: -0.408,
        },
      })}
    >
      <NestedScreen.Screen
        name="Posts"
        component={PostsScreen}
        initialParams={{ login: login, email: email }}
        options={{
          headerLeft: null, // Скрыть кнопку "назад"
          title: "Posts",
          headerRight: () => <LogOut style={styles.iconLogOut} />,
          tabBarStyle: { display: "block" },
        }}
      />
      <NestedScreen.Screen
        name="Comments"
        options={{
          tabBarStyle: { display: "none" },
        }}
        component={CommentsScreen}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{ tabBarStyle: { display: "none" } }}
      />
    </NestedScreen.Navigator>
  );
};

const styles = StyleSheet.create({
  iconLogOut: {
    marginRight: 16,
  },
});
