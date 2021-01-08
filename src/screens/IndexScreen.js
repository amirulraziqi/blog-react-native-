import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context); // access BlogContext object

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title} // where blogPost is each elem in blogPosts
        renderItem={({ item }) => {
          // item refers to indivudal blogPost elem object
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <EvilIcons name="trash" size={24} color="black" style={styles.icon} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 30,
    }
})

export default IndexScreen;
