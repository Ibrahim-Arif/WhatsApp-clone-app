import React, { useState } from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import CallsScreen from "./CallsScreen";
import colors from "../config/colors";
import Data from "../assets/Data";
import Icon from "../components/Icon";
import MenuItem from "../components/MenuItem";
import MyText from "../components/MyText";
import Screen from "../components/Screen";
import MessagesScreen from "./MessagesScreen";
import StoriesScreen from "./StoriesScreen";

const menuItems = [
  { title: "messages" },
  { title: "calls" },
  { title: "groups" },
  { title: "stories" },
];

function MainScreen({}) {
  const [activeMenu, setActiveMenu] = useState("messages");
  const [messages, setMessages] = useState(Data.initialMessages);
  const [groups, setGroups] = useState(Data.initialGroups);

  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (id, type) => {
    if (type === "messages")
      setMessages(messages.filter((message) => message.id !== id));
    else if (type === "groups")
      setGroups(groups.filter((group) => group.id !== id));
  };

  const handleRefresh = (type) => {
    setRefreshing(true);
    if (type === "messages") setMessages(Data.initialMessages);
    else if (type === "groups") setGroups(Data.initialGroups);
    setRefreshing(false);
  };

  return (
    <Screen style={styles.container}>
      <MyText style={styles.topText}>{"Chat with \nfriends"}</MyText>

      <View>
        <FlatList
          data={Data.stories}
          renderItem={({ item }) => (
            <Icon image={item.image} size={50} style={{ margin: 8 }} />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
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
        {activeMenu === "messages" && (
          <MessagesScreen
            data={messages}
            type="messages"
            onDelete={handleDelete}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => handleRefresh("messages")}
                colors={[colors.yellow]}
              />
            }
          />
        )}
        {activeMenu === "calls" && <CallsScreen data={Data.calls} />}
        {activeMenu === "groups" && (
          <MessagesScreen
            data={groups}
            type="groups"
            onDelete={handleDelete}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => handleRefresh("groups")}
                colors={[colors.yellow]}
              />
            }
          />
        )}
        {activeMenu === "stories" && <StoriesScreen data={Data.stories} />}
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
