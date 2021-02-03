import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "./app/config/colors";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import ListItemDeleteAction from "./app/components/ListItemDeleteAction";
import MainScreen from "./app/screens/MainScreen";
import MenuItem from "./app/components/MenuItem";

function App({}) {
  return (
    <View style={styles.container}>
      <MainScreen />

      {/* <MenuItem title="messages" onPress={() => null} visible={true} /> */}

      {/* <ListItem
        title="ibrahim"
        description="how are you"
        // image={require("./app/assets/user.jpg")} 
        time="12:40"
        renderRightActions={() => (
          <ListItemDeleteAction onPress={() => console.log("delete pressed")} />
        )}
        onPress={() => null}
      /> */}
      {/* <Icon
        image={require("./app/assets/user.jpg")}
        size={50}
        backgroundColor={colors.darkgrey}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // justifyContent: "center",
    // alignItems: "center",
  },
});
export default App;
