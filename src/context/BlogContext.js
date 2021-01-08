import React, { useReducer } from "react";

// Creates a Context object which contains multiple child components, notably Provider and Consumer
const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    // state === { data: object }
    // action === { type: 'add' || 'edit' || 'delete' }

    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}`}];
        default:
            return state;
    }
}

// Provider component accepts a value prop to be passed down to
export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
      dispatch({ type: 'add_blogpost' })
  }    

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
