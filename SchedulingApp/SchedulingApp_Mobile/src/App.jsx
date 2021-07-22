import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button } from "react-native-paper";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native"; /* No HTML elements in React native. Must use built-in components*/
import Layout from "./Layout";

export default App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* View is like a div */}
      <Layout />
      {/* <Text>Open up App.js to start working on your app!</Text>
      <Button mode="contained">A Sexy Button</Button>
      <StatusBar style="auto" /> */}
    </SafeAreaView> /* View maps to whatever platform. UIView = ios. AndroidView= android */
  );
};

const styles = StyleSheet.create({
  /* Similar to makeStyles */
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
