import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ position: "relative" }}>
        <TextInput
          style={styles.input}
          placeholder="Comment..."
          placeholderTextColor="#BDBDBD"
        />
        <TouchableOpacity activeOpacity={0.7} style={styles.iconArrow}>
          <View
            style={{
              width: 34,
              height: 34,
              backgroundColor: "#FF6C00",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="arrowup" size={20} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
    backgroundColor: "#FFF",
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  input: {
    fontFamily: "Inter-Medium",
    color: "#212121",
    fontStyle: "normal",
    width: "100%",
    height: 50,
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  iconArrow: {
    position: "absolute",
    top: 8,
    right: 8,
  },
});
