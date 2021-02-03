import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemMenuAction from "../components/ListItemMenuAction";
import Seperator from "../components/Seperator";

function MessagesScreen({ messages, style, onDelete }) {
  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            description={item.description}
            time={item.time}
            renderRightActions={() => (
              <>
                <ListItemDeleteAction onPress={() => onDelete(item)} />
                <ListItemMenuAction onPress={() => null} />
              </>
            )}
          />
        )}
        ItemSeparatorComponent={() => <Seperator />}
        ListHeaderComponent={() => <View style={{ marginBottom: 5 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MessagesScreen;
