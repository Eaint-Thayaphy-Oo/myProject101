import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View></View>
        <Text style={styles.headerText}>Project 101</Text>
        {/* <Image
          source={require("./assets/images/user.jpg")}
          style={styles.userIcon}
        /> */}
        <TouchableOpacity
          onPress={() => {
            alert("Hi,this is Touched");
          }}
        >
          <FontAwesome name="user-circle-o" size={30} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },

  header: {
    width: "100%",
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 15,
  },

  userIcon: {
    width: 30,
    height: 30,
  },
});
