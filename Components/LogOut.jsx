import React from "react";
import { TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

export default LogOut = ({ style }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={style}>
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};
