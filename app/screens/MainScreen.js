import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";
import Icon from "../components/Icon";
import MenuItem from "../components/MenuItem";
import MyText from "../components/MyText";
import Screen from "../components/Screen";
import MessagesScreen from "./MessagesScreen";

const storyData = [
  { id: 1, image: require("../assets/user.jpg") },
  { id: 2, image: require("../assets/user.jpg") },
  { id: 3, image: require("../assets/user.jpg") },
  { id: 4, image: require("../assets/user.jpg") },
  { id: 5, image: require("../assets/user.jpg") },
  { id: 6, image: require("../assets/user.jpg") },
  { id: 7, image: require("../assets/user.jpg") },
  { id: 8, image: require("../assets/user.jpg") },
  { id: 9, image: require("../assets/user.jpg") },
  { id: 10, image: require("../assets/user.jpg") },
];
const menuItems = [
  { title: "messages" },
  { title: "calls" },
  { title: "groups" },
  { title: "create" },
];
const initialMessages = [
  {
    id: 1,
    title: "Bilal",
    description: "Hey there! are you free now?",
    time: "11:50",
    image: require("../assets/user.jpg"),
  },
  {
    id: 2,
    title: "Jason",
    description: "how are you?",
    time: "09:38",
    image: require("../assets/user.jpg"),
  },
  {
    id: 3,
    title: "Tyler",
    description: "is it raining?",
    time: "01:45",
    image: require("../assets/user.jpg"),
  },
  {
    id: 4,
    title: "Mark",
    description: "hheheheh i'm reading it too",
    time: "12:00",
    image: require("../assets/user.jpg"),
  },
  {
    id: 5,
    title: "unknown",
    description: "whats'up weirdo",
    time: "07:30",
    image: require("../assets/user.jpg"),
  },
  {
    id: 6,
    title: "Bilal",
    description: "Hey there! are you free now?",
    time: "11:50",
    image: require("../assets/user.jpg"),
  },
  {
    id: 7,
    title: "Jason",
    description: "how are you?",
    time: "09:38",
    image: require("../assets/user.jpg"),
  },
  {
    id: 8,
    title: "Tyler",
    description: "is it raining?",
    time: "01:45",
    image: require("../assets/user.jpg"),
  },
  {
    id: 9,
    title: "Mark",
    description: "hheheheh i'm reading it too",
    time: "12:00",
    image: require("../assets/user.jpg"),
  },
  {
    id: 10,
    title: "unknown",
    description: "whats'up weirdo",
    time: "07:30",
    image: require("../assets/user.jpg"),
  },
];

function MainScreen({}) {
  const [activeMenu, setActiveMenu] = useState("messages");
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = ({ id }) => {
    setMessages(messages.filter((m) => m.id !== id));
  };

  return (
    <Screen style={styles.container}>
      <MyText style={styles.topText}>{"Chat with \nfriends"}</MyText>

      <View>
        <FlatList
          data={storyData}
          horizontal={true}
          renderItem={({ item }) => (
            <Icon
              image={item.image}
              size={50}
              backgroundColor="#fff"
              style={{ margin: 8 }}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => (
            <Icon
              IconComponent={
                <AntDesign name="search1" size={26} color={colors.white} />
              }
              backgroundColor={colors.light}
              size={50}
            />
          )}
          ListHeaderComponentStyle={{ alignSelf: "center", marginLeft: 10 }}
        />
      </View>

      <View>
        <FlatList
          data={menuItems}
          renderItem={({ item }) => (
            <MenuItem
              title={item.title}
              onPress={() => setActiveMenu(item.title)}
              visible={activeMenu === item.title ? true : false}
            />
          )}
          numColumns={4}
          columnWrapperStyle={{ justifyContent: "space-evenly" }}
          keyExtractor={(item) => item.title}
          ListHeaderComponent={() => <View style={{ marginTop: 10 }} />}
        />
      </View>

      <View style={styles.detailContainer}>
        <MessagesScreen messages={messages} onDelete={handleDelete} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  topText: {
    color: colors.white,
    fontSize: 36,
    margin: 20,
  },
  menuItems: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  detailContainer: {
    marginTop: 20,
    paddingHorizontal: 5,
    backgroundColor: colors.white,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
});
export default MainScreen;
