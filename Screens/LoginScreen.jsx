import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import BackgroundImage from "../assets/images/photo-bg.jpg";

export default LoginScreen = () => {
  const navigation = useNavigation();

  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

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
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleFocusEmail = () => {
    setIsFocusedEmail(true);
    setIsShowKeyboard(true);
  };

  const handleBlurEmail = () => {
    setIsFocusedEmail(false);
  };

  const handleFocusPassword = () => {
    setIsFocusedPassword(true);
    setIsShowKeyboard(true);
  };

  const handleBlurPassword = () => {
    setIsFocusedPassword(false);
  };

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
              style={{ ...styles.image, marginBottom: isShowKeyboard ? 60 : 0 }}
            >
              <View style={styles.form}>
                <Text style={styles.title}>Увійти</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    onFocus={handleFocusEmail}
                    onBlur={handleBlurEmail}
                    style={{
                      ...styles.input,
                      borderColor: emailBorderColor,
                      backgroundColor: emailBgColor,
                    }}
                    placeholder="Адреса електронної пошти"
                    keyboardType="email-address"
                    autoComplete="email"
                    placeholderTextColor="#BDBDBD"
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
                      placeholder="Пароль"
                      placeholderTextColor="#BDBDBD"
                    />
                    <Text
                      style={styles.inputText}
                      onPress={handleTogglePassword}
                    >
                      {showPassword ? "Приховати" : "Показати"}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.button}
                  onPress={keyboardHide}
                >
                  <Text style={styles.buttonText}>Увійти</Text>
                </TouchableOpacity>
                <View style={styles.wrapperQuestion}>
                  <Text style={styles.questionText}>Немає акаунту?</Text>
                  <Text
                    style={styles.accountText}
                    onPress={() => navigation.navigate("Registration")}
                  >
                    Зареєструватися
                  </Text>
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
    paddingTop: 32,
    paddingBottom: 111,
    paddingHorizontal: 16,
  },
  image: {
    flexShrink: 0,
    backgroundColor: "#fff",
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
    paddingVertical: 16,
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
    top: "26%",
    right: 16,
    color: "#1B4371",
    fontSize: 16,
    fontStyle: "normal",
  },
  button: {
    display: "flex",
    height: 51,
    borderRadius: 100,
    paddingHorizontal: 32,
    paddingVertical: 15,
    backgroundColor: "#FF6C00",
    flexDirection: "column",
    alignItems: "center",
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
