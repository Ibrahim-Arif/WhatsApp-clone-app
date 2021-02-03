import React from "react";
import { StyleSheet, View } from "react-native";

import MainScreen from "./app/screens/MainScreen";

function App() {
  return (
    <View style={styles.container}>
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
