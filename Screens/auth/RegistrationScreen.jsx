import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  ImageBackground,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
// import { SvgXml } from "react-native-svg";
// import * as ImagePicker from "expo-image-picker";

import ImageAvatar from "../../Components/ImageAvatar";

import BackgroundImage from "../../assets/images/photo-bg.jpg";
// import { iconAdd, iconDelete } from "../assets/images/icons";
// import IconAdd from "../../assets/images/iconAdd.svg";
// import IconDelete from "../../assets/images/iconDelete.svg";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/;

export default RegistrationScreen = () => {
  const navigation = useNavigation();
  // console.log(Platform.OS);
  const [isFocusedLogin, setIsFocusedLogin] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);
  const [state, setState] = useState(initialState);

  const handleKeyboardDidShow = () => {
    setIsShowKeyboard(true);
  };

  const handleKeyboardDidHide = () => {
    setIsShowKeyboard(false);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      handleKeyboardDidShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      handleKeyboardDidHide
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const keyboardHide = () => {
    // setIsShowKeyboard(false); //подумать, может нужно убрать, оно лишнее
    Keyboard.dismiss();
    if (emailRegex.test(state.email)) {
      // console.log(emailRegex.test(state.email));
      console.log(state);
      setState(initialState);
      navigation.navigate("HomeScreen", {
        login: state.login,
        email: state.email,
      });
    } else {
      // console.log(emailRegex.test(state.email));
      Alert.alert(
        "Alert",
        "Email address is not valid. Example: test@gmail.com"
      );
    }
  };

  const handleFocusLogin = () => {
    setIsFocusedLogin(true);
    setIsShowKeyboard(true);
  };

  const handleBlurLogin = () => {
    setIsFocusedLogin(false);
    setIsShowKeyboard(false);
  };

  const handleFocusEmail = () => {
    setIsFocusedEmail(true);
    setIsShowKeyboard(true);
  };

  const handleBlurEmail = () => {
    setIsFocusedEmail(false);
    setIsShowKeyboard(false);
  };

  const handleFocusPassword = () => {
    setIsFocusedPassword(true);
    setIsShowKeyboard(true);
  };

  const handleBlurPassword = () => {
    setIsFocusedPassword(false);
    setIsShowKeyboard(false);
  };

  const loginBorderColor = isFocusedLogin ? "#FF6C00" : "#E8E8E8";
  const loginBgColor = isFocusedLogin ? "#FFFFFF" : "#F6F6F6";
  const emailBorderColor = isFocusedEmail ? "#FF6C00" : "#E8E8E8";
  const emailBgColor = isFocusedEmail ? "#FFFFFF" : "#F6F6F6";
  const passwordBorderColor = isFocusedPassword ? "#FF6C00" : "#E8E8E8";
  const passwordBgColor = isFocusedPassword ? "#FFFFFF" : "#F6F6F6";

  handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground style={styles.imageBg} source={BackgroundImage}>
          <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
            behavior={Platform.OS == "ios" ? "padding" : ""}
          >
            <View
              style={{
                ...styles.image,
                marginBottom:
                  isShowKeyboard && Platform.OS === "android"
                    ? 110
                    : isShowKeyboard && Platform.OS === "ios"
                    ? -200
                    : 0,
              }}
            >
              <ImageAvatar
                wrapperPhoto={styles.photo}
                photoImage={styles.photoImage}
                iconAdd={styles.iconAdd}
                iconDelete={styles.iconDelete}
              />

              <View style={{ ...styles.form }}>
                <Text style={styles.title}>Registration</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    onFocus={handleFocusLogin}
                    onBlur={handleBlurLogin}
                    style={{
                      ...styles.input,
                      borderColor: loginBorderColor,
                      backgroundColor: loginBgColor,
                    }}
                    placeholder="Login"
                    placeholderTextColor="#BDBDBD"
                    value={state.login}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, login: value }))
                    }
                  />
                  <TextInput
                    onFocus={handleFocusEmail}
                    onBlur={handleBlurEmail}
                    style={{
                      ...styles.input,
                      borderColor: emailBorderColor,
                      backgroundColor: emailBgColor,
                    }}
                    placeholder="Email address"
                    keyboardType="email-address"
                    autoComplete="email"
                    placeholderTextColor="#BDBDBD"
                    value={state.email}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                  />
                  <View style={styles.inputPassword}>
                    <TextInput
                      onFocus={handleFocusPassword}
                      onBlur={handleBlurPassword}
                      style={{
                        ...styles.input,
                        borderColor: passwordBorderColor,
                        backgroundColor: passwordBgColor,
                      }}
                      secureTextEntry={!showPassword}
                      autoComplete="password"
                      placeholder="Password"
                      placeholderTextColor="#BDBDBD"
                      value={state.password}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          password: value,
                        }))
                      }
                    />
                    <Text
                      style={styles.inputText}
                      onPress={handleTogglePassword}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.button}
                  onPress={keyboardHide}
                >
                  <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
                <View style={styles.wrapperQuestion}>
                  <Text style={styles.questionText}>
                    Already have an account?
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={styles.accountText}>Log In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    position: "absolute",
    left: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  form: {
    paddingTop: 92,
    paddingBottom: 45,
    paddingHorizontal: 16,
  },
  image: {
    position: "relative",
    flexShrink: 0,
    backgroundColor: "#fff",
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginBottom: 0,
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
    top: 15,
    left: 229,
  },
  title: {
    fontFamily: "Roboto-Medium",
    marginBottom: 33,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontStyle: "normal",
    letterSpacing: 0.3,
  },
  inputWrapper: {
    display: "flex",
    gap: 16,
    marginBottom: 43,
  },
  input: {
    fontFamily: "Roboto-Regular",
    color: "#212121",
    fontStyle: "normal",
    width: "100%",
    height: 50,
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  inputPassword: {
    position: "relative",
  },
  inputText: {
    fontFamily: "Roboto-Regular",
    position: "absolute",
    top: "27%",
    right: 16,
    color: "#1B4371",
    fontSize: 16,
    fontStyle: "normal",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 51,
    borderRadius: 100,
    paddingHorizontal: 32,
    paddingVertical: 15,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    color: "#FFF",
    textAlign: "center",
    fontStyle: "normal",
    fontSize: 16,
  },
  wrapperQuestion: {
    display: "flex",
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  questionText: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    marginTop: 16,
  },
  accountText: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    marginTop: 16,
    textDecorationLine: "underline",
  },
});
