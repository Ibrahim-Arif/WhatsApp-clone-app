import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.container}
    >
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={30}
        color={"#fff"}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: colors.yellow,
    justifyContent: "center",
    marginRight: 10,
    width: 40,
    height: 40,
  },
});

export default ListItemDeleteAction;
