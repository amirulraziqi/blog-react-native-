import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  // state === { data: object }
  // action === { type: 'add_blogpost' || 'edit_blogpost' || 'delete_blogpost' }

  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

// addBlogPost(dispatch) => {return () => dispatch(...)}
// function returns a function that calls dispatch functions
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  }
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
