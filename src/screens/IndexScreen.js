import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const blogPosts = useContext(BlogContext); // access BlogContext object
    
    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList
                data={blogPosts}
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