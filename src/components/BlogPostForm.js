import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const BlogPostForm = ({ onSubmit }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState();

  return (
    <View>
      <Text style={styles.label}>Enter Title: </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Save Post"
        style={styles.button}
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 15,
    padding: 5,
    alignSelf: "center",
  },
  input: {
    height: 40,
    width: "90%",
    fontSize: 18,
    alignSelf: "center",
    marginBottom: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  button: {
      fontSize: 24,
      margin: 10,
  }
});

export default BlogPostForm;
