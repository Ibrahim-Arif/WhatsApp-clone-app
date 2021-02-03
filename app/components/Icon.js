import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  backgroundColor,
  color = "#000",
  name,
  IconComponent,
  onPress,
  image,
  style,
  size = 40,
  imageSize = size,
  iconSize = null,
}) {
  return (
    <View
      style={[
        {
          alignItems: "center",
          backgroundColor: backgroundColor,
          borderRadius: size / 2,
          height: size,
          justifyContent: "center",
          width: size,
        },
        style,
      ]}
    >
      <TouchableOpacity onPress={onPress}>
        {name && (
          <MaterialCommunityIcons
            name={name}
            size={iconSize ? iconSize : size * 0.7}
            color={color}
          />
        )}
        {IconComponent}
        {image && (
          <Image
            source={image}
            style={{
              width: imageSize,
              height: imageSize,
              borderRadius: size / 2,
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

export default Icon;
