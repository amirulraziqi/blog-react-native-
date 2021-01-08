import React from 'react';

// Creates a Context object which contains multiple child components, notably Provider and Consumer
const BlogContext = React.createContext();

// Provider component accepts a value prop to be passed down to 
export const BlogProvider = ({ children }) => {
    const blogPosts = [
        { title: "Blog Post #1" },
        { title: "Blog Post #2"}
    ]

    return (
        <BlogContext.Provider value={blogPosts}>
            {children} 
        </BlogContext.Provider>
    );
};

export default BlogContext;