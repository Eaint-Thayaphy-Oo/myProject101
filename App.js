import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={styles.post}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome name="user-circle-o" size={55} color="grey" />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontWeight: "bold", color: "darkblue" }}>
                  Aye Aye
                </Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 12, color: "grey" }}
                >
                  6.5.2021
                </Text>
              </View>
            </View>
            <View>
              <Text>
                Paragraphs are the building blocks of papers. Many students
                define paragraphs in terms of length: a paragraph is a group of
                at least five sentences, a paragraph is half a page long, etc.
                In reality, though, the unity and coherence of ideas among
                sentences is what constitutes a paragraph.
              </Text>
            </View>
          </View>
          <View style={styles.post}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome name="user-circle-o" size={55} color="grey" />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontWeight: "bold", color: "darkblue" }}>
                  Aye Aye
                </Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 12, color: "grey" }}
                >
                  6.5.2021
                </Text>
              </View>
            </View>
            <View>
              <Text>
                Paragraphs are the building blocks of papers. Many students
                define paragraphs in terms of length: a paragraph is a group of
                at least five sentences, a paragraph is half a page long, etc.
                In reality, though, the unity and coherence of ideas among
                sentences is what constitutes a paragraph.
              </Text>
            </View>
          </View>
          <View style={styles.post}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome name="user-circle-o" size={55} color="grey" />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontWeight: "bold", color: "darkblue" }}>
                  Aye Aye
                </Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 12, color: "grey" }}
                >
                  6.5.2021
                </Text>
              </View>
            </View>
            <View>
              <Text>
                Paragraphs are the building blocks of papers. Many students
                define paragraphs in terms of length: a paragraph is a group of
                at least five sentences, a paragraph is half a page long, etc.
                In reality, though, the unity and coherence of ideas among
                sentences is what constitutes a paragraph.
              </Text>
            </View>
          </View>
          <View style={styles.post}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome name="user-circle-o" size={55} color="grey" />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontWeight: "bold", color: "darkblue" }}>
                  Aye Aye
                </Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 12, color: "grey" }}
                >
                  6.5.2021
                </Text>
              </View>
            </View>
            <View>
              <Text>
                Paragraphs are the building blocks of papers. Many students
                define paragraphs in terms of length: a paragraph is a group of
                at least five sentences, a paragraph is half a page long, etc.
                In reality, though, the unity and coherence of ideas among
                sentences is what constitutes a paragraph.
              </Text>
            </View>
          </View>
          <View style={styles.post}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome name="user-circle-o" size={55} color="grey" />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontWeight: "bold", color: "darkblue" }}>
                  Aye Aye
                </Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 12, color: "grey" }}
                >
                  6.5.2021
                </Text>
              </View>
            </View>
            <View>
              <Text>
                Paragraphs are the building blocks of papers. Many students
                define paragraphs in terms of length: a paragraph is a group of
                at least five sentences, a paragraph is half a page long, etc.
                In reality, though, the unity and coherence of ideas among
                sentences is what constitutes a paragraph.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
    paddingTop: StatusBar.currentHeight,
  },

  header: {
    width: "100%",
    backgroundColor: "lightblue",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    flexDirection: "row",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 15,
  },

  userIcon: {
    width: 30,
    height: 30,
  },

  body: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 5,
  },

  post: {
    width: "100%",
    backgroundColor: "pink",
    borderRadius: 5,
    elevation: 3,
    padding: 8,
    marginVertical: 5,
  },
});
