import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import MyTextInput from "../components/MyTextInput";
import Message from "../components/Message";

function ChatScreen({ title, data, onClose }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={onClose}>
          <View style={styles.backIcon} />
        </TouchableOpacity>

        <ListItem
          style={{ paddingRight: 20 }}
          textStyle={{ fontSize: 30 }}
          title={title}
          RightComponent={
            <Icon
              IconComponent={
                <Entypo name="phone" size={24} color={colors.primary} />
              }
              backgroundColor={colors.lightgrey}
            />
          }
        />
      </View>

      <View style={styles.list}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Message
              text={item.text}
              position={item.username === title ? "right" : "left"}
              time={item.time}
            />
          )}
          inverted
          showsVerticalScrollIndicator={false}
        />
      </View>

      <MyTextInput
        placeholder="Type your message..."
        style={styles.textInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column-reverse",
    paddingHorizontal: 15,
  },
  backIcon: {
    backgroundColor: colors.darkgrey,
    width: 25,
    height: 5,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
  },
  textInput: {
    borderRadius: 60,
    height: 50,
  },
  topContainer: {
    position: "absolute",
    top: 10,
    width: Dimensions.get("screen").width,
  },
  list: {
    position: "absolute",
    width: "100%",
    top: 100,
    alignSelf: "center",
    bottom: 65,
  },
});
export default ChatScreen;
