import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, Button } from "react-native";

import userImage from "../../assets/images/userFoto.jpg";

export default PostsScreen = ({ navigation, route }) => {
  const { login, email } = route.params;
  const userNameToShow = login || "userName";
  // console.log(userNameToShow, email);

  return (
    <View style={styles.container}>
      <View style={styles.userData}>
        <View style={styles.userFoto}>
          <Image source={userImage} style={{ width: "100%", height: "100%" }} />
        </View>
        <View>
          <Text style={styles.userName}>{userNameToShow}</Text>
          <Text style={styles.userEmail}>{email}</Text>
        </View>
        {/* <View style={{ display: "flex", gap: 10, marginTop: 10 }}>
          <Button
            title="Go to comments"
            onPress={() => navigation.navigate("Comments")}
          />
          <Button
            title="Go to map"
            onPress={() => navigation.navigate("Map")}
          />
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "#FFF",
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  userData: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  userFoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    fontStyle: "normal",
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    fontStyle: "normal",
    color: "rgba(33, 33, 33, 0.80)",
  },
});
