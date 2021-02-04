import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import MyText from "../components/MyText";
import colors from "../config/colors";

function Message({ position, text, time }) {
  return (
    <View
      style={[
        styles.container,
        position === "left"
          ? { borderBottomLeftRadius: 0, backgroundColor: colors.lightgrey }
          : {
              borderBottomRightRadius: 0,
              backgroundColor: "#E5ECEB",
              alignSelf: "flex-end",
            },
      ]}
    >
      <MyText
        style={
          position === "left"
            ? { color: colors.black }
            : { color: colors.primary }
        }
      >
        {text}
      </MyText>
      <View style={styles.time}>
        {position === "right" && (
          <Ionicons
            name="checkmark-done-sharp"
            size={24}
            color="#007ACC"
            style={{ marginLeft: 7 }}
          />
        )}
        <MyText style={{ color: colors.darkgrey, fontSize: 16 }}>{time}</MyText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: colors.lightgrey,
    width: "45%",
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 3,
    marginBottom: 10,
  },
  time: {
    alignItems: "center",
    flexDirection: "row-reverse",
    marginTop: 3,
  },
});
export default Message;
