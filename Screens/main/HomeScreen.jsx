import React from "react";
import { useRoute } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import NestedStack from "../nestedScreens/NestedScreens";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const MainTabs = createBottomTabNavigator();

import { Feather } from "@expo/vector-icons";

export default HomeScreen = ({ navigation, route }) => {
  const { login, email } = route.params;
  // console.log(email);
  return (
    <MainTabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "grid";
          } else if (route.name === "Create post") {
            iconName = "plus";
          } else if (route.name === "Profile") {
            iconName = "user";
          }

          return (
            <View
              style={{
                width: 70,
                height: 40,
                backgroundColor: focused ? "#FF6C00" : "transparent",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather
                name={iconName}
                size={24}
                color={focused ? "#FFF" : "#212121"}
              />
            </View>
          );
        },
        tabBarShowLabel: false,
        headerTitleAlign: "center",
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
      <MainTabs.Screen
        name="Home"
        component={NestedStack}
        initialParams={{ login: login, email: email }}
        options={({ navigation }) => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
        })}
      />
      <MainTabs.Screen
        name="Create post"
        options={{
          tabBarStyle: { display: "none" },
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.5}
              style={{ marginLeft: 16 }}
              onPress={() => navigation.navigate("Posts")}
            >
              <Feather name="arrow-left" size={24} color="#212121" />
            </TouchableOpacity>
          ),
        }}
        component={CreatePostsScreen}
      />
      <MainTabs.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ login: login }}
        options={{
          headerShown: false,
        }}
      />
    </MainTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
