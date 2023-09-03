import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

import IconAdd from "../assets/images/iconAdd.svg";
import IconDelete from "../assets/images/iconDelete.svg";

export default ImageAvatar = ({
  wrapperPhoto,
  photoImage,
  iconAdd,
  iconDelete,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePick = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!pickerResult.canceled && pickerResult.assets.length > 0) {
      setSelectedImage(pickerResult.assets[0].uri);
    }
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <View style={wrapperPhoto}>
        {!selectedImage ? (
          <TouchableOpacity activeOpacity={0.3} onPress={handleImagePick}>
            <IconAdd width={25} height={25} style={iconAdd} />
          </TouchableOpacity>
        ) : (
          <Image source={{ uri: selectedImage }} style={photoImage} />
        )}
      </View>
      {selectedImage && (
        <TouchableOpacity activeOpacity={0.3} onPress={handleDeleteImage}>
          <IconDelete width={37} height={37} style={iconDelete} />
        </TouchableOpacity>
      )}
    </>
  );
};
