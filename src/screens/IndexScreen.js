import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context); // access BlogContext object
    
    return (
        <View>
            <Text>Index Screen</Text>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title} // where blogPost is each elem in blogPosts
                renderItem={({ item }) => { // item refers to indivudal blogPost elem object
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;