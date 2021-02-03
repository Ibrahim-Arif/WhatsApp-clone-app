import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import ListItem from "../components/ListItem";
import Seperator from "../components/Seperator";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

function CallsScreen({ data, style, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={data}
        keyExtractor={(call) => call.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            onPress={() => null}
            description={item.description}
            RightComponent={
              <TouchableOpacity
                style={styles.callButton}
                onPress={() => console.log("called clicked")}
              >
                <MaterialIcons name="call" size={24} color={colors.darkgrey} />
              </TouchableOpacity>
            }
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
  callButton: {
    justifyContent: "center",
    flex: 1,
  },
});
export default CallsScreen;
