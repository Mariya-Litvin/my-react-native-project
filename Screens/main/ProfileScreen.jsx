import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import BackgroundImage from "../../assets/images/photo-bg.jpg";
import LogOut from "../../Components/LogOut";
import ImageAvatar from "../../Components/ImageAvatar";

export default ProfileScreen = ({ navigation, route }) => {
  const { login } = route.params;
  const userNameToShow = login || "userName";
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBg} source={BackgroundImage}>
        <View style={styles.imageBasic}>
          <ImageAvatar
            wrapperPhoto={styles.photo}
            photoImage={styles.photoImage}
            iconAdd={styles.iconAdd}
            iconDelete={styles.iconDelete}
          />
          <LogOut style={styles.iconLogOut} />
          <Text style={styles.userName}>{userNameToShow}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#FFF",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  imageBasic: {
    position: "relative",
    flexShrink: 0,
    backgroundColor: "#fff",
    height: 665,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    paddingTop: 92,
    paddingBottom: 43,
    paddingHorizontal: 16,
  },
  photo: {
    position: "absolute",
    top: -62,
    left: 128,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  photoImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  iconAdd: {
    position: "absolute",
    top: 80,
    left: 107,
  },
  iconDelete: {
    position: "absolute",
    top: -80,
    left: 33,
  },

  iconLogOut: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  userName: {
    fontFamily: "Roboto-Medium",
    color: "#212121",
    fontSize: 30,
    fontStyle: "normal",
    letterSpacing: 0.3,
  },
});
