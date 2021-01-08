import React, { useState } from 'react';

// Creates a Context object which contains multiple child components, notably Provider and Consumer
const BlogContext = React.createContext();

// Provider component accepts a value prop to be passed down to 
export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }])
    };

    return (
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost}}>
            {children} 
        </BlogContext.Provider>
    );
};

export default BlogContext;