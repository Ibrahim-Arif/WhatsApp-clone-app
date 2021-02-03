import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemMenuAction from "../components/ListItemMenuAction";
import MyText from "../components/MyText";
import Seperator from "../components/Seperator";

function MessagesScreen({ data, type, style, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={data}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            onPress={() => null}
            description={item.description}
            RightComponent={<MyText style={styles.time}>{item.time}</MyText>}
            renderRightActions={() => (
              <>
                <ListItemDeleteAction
                  onPress={() => otherProps.onDelete(item.id, type)}
                />
                <ListItemMenuAction onPress={() => null} />
              </>
            )}
          />
        )}
        ItemSeparatorComponent={() => <Seperator />}
        ListHeaderComponent={() => <View style={{ marginBottom: 5 }} />}
        showsVerticalScrollIndicator={false}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  time: {
    color: "#918C8C",
    fontSize: 16,
  },
});
export default MessagesScreen;
