import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({
  title,
  description,
  image = null,
  onPress,
  renderRightActions,
  time,
  style,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={"#E7E9E9"}
        onPress={onPress}
        activeOpacity={0.2}
      >
        <View style={[styles.container, style]}>
          <Image
            style={styles.image}
            source={image || require("../assets/defaultUser.jpg")}
          />

          <View style={styles.containerText}>
            <Text numberOfLines={1} style={[styles.text]}>
              {title}
            </Text>

            {description && (
              <Text
                numberOfLines={2}
                style={[styles.text, { color: "#918C8C", fontSize: 16 }]}
              >
                {description}
              </Text>
            )}
          </View>
          <Text style={[styles.text, { color: "#918C8C", fontSize: 16 }]}>
            {time}
          </Text>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 10,
  },
  containerText: {
    marginLeft: 14,
    flex: 1,
    justifyContent: "center",
  },
  image: {
    borderRadius: 27.5,
    height: 55,
    width: 55,
  },
  text: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ListItem;
