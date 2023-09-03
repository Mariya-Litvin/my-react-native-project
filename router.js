import React from "react";
import { View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import HomeScreen from "./Screens/main/HomeScreen";
import CreatePostsScreen from "./Screens/main/CreatePostsScreen";
import ProfileScreen from "./Screens/main/ProfileScreen";

import { Feather } from "@expo/vector-icons";

const MainStack = createStackNavigator(); // вказує на групу навігаторів
const MainTabs = createBottomTabNavigator();

export default useRoutes = (isAuth) => {
  if (!isAuth) {
    return (
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    );
  }
  // return (
  //   <MainTabs.Navigator
  //     initialRouteName="HomeScreen"
  //     screenOptions={{
  //       tabBarShowLabel: false,
  //       // headerTitleAlign: "center",
  //     }}
  //   >
  //     <MainTabs.Screen
  //       name="HomeScreen"
  //       component={HomeScreen}
  //       options={{
  //         tabBarIcon: ({ focused, color, size }) => (
  //           <View
  //             style={{
  //               width: 70,
  //               height: 40,
  //               backgroundColor: focused ? "#FF6C00" : "transparent", // Оранжевый фон для выбранной вкладки
  //               borderRadius: 20,
  //               justifyContent: "center",
  //               alignItems: "center",
  //             }}
  //           >
  //             <Feather
  //               name="grid"
  //               size={24}
  //               color={focused ? "#FFF" : "#212121"}
  //             />
  //           </View>
  //         ),
  //         headerShown: false,
  //       }}
  //     />
  //     <MainTabs.Screen
  //       name="Create post"
  //       component={CreatePostsScreen}
  //       options={{
  //         tabBarIcon: ({ focused, color, size }) => (
  //           <View
  //             style={{
  //               width: 70,
  //               height: 40,
  //               backgroundColor: focused ? "#FF6C00" : "transparent", // Оранжевый фон для выбранной вкладки
  //               borderRadius: 20,
  //               justifyContent: "center",
  //               alignItems: "center",
  //             }}
  //           >
  //             <Feather
  //               name="plus"
  //               size={20}
  //               color={focused ? "#FFF" : "#212121"}
  //             />
  //           </View>
  //         ),
  //       }}
  //     />
  //     <MainTabs.Screen
  //       name="Profile"
  //       component={ProfileScreen}
  //       options={{
  //         tabBarIcon: ({ focused, color, size }) => (
  //           <View
  //             style={{
  //               width: 70,
  //               height: 40,
  //               backgroundColor: focused ? "#FF6C00" : "transparent", // Оранжевый фон для выбранной вкладки
  //               borderRadius: 20,
  //               justifyContent: "center",
  //               alignItems: "center",
  //             }}
  //           >
  //             <Feather
  //               name="user"
  //               size={24}
  //               color={focused ? "#FFF" : "#212121"}
  //             />
  //           </View>
  //         ),
  //         headerShown: false,
  //       }}
  //     />
  //   </MainTabs.Navigator>
  // );
};
