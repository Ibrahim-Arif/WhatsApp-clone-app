import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Seperator from "../components/Seperator";
import MyText from "../components/MyText";
import colors from "../config/colors";

function StoriesScreen({ data }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={item.image}
            onPress={() => null}
          />
        )}
        ItemSeparatorComponent={() => <Seperator />}
        ListHeaderComponent={() => (
          <>
            <ListItem
              title="My story"
              description="Tap to add story update"
              image={require("../assets/user.jpg")}
              style={{ marginTop: 5 }}
              onPress={() => null}
            />
            <Seperator />
            <MyText
              style={{
                fontSize: 14,
                color: colors.darkgrey,
                marginLeft: 10,
                paddingVertical: 5,
              }}
            >
              Viewed updates
            </MyText>
            <Seperator />
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default StoriesScreen;
