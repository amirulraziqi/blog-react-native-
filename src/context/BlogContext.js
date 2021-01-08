import React from 'react';

// Creates a Context object which contains multiple child components, notably Provider and Consumer
const BlogContext = React.createContext();

// Provider component accepts a value prop to be passed down to 
export const BlogProvider = ({ children }) => {
    return (
        <BlogContext.Provider value={[12,15]}>
            {children} 
        </BlogContext.Provider>
    );
};

export default BlogContext;