import React from "react";
import { TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import colors from "../config/colors";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Entypo name="dots-three-horizontal" size={22} color={colors.light} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: colors.lightgrey,
    justifyContent: "center",
    marginRight: 10,
    width: 40,
    height: 40,
  },
});

export default ListItemDeleteAction;
