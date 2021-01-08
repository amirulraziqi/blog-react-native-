import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    // state === { data: object }
    // action === { type: 'add_blogpost' || 'edit_blogpost' || 'delete_blogpost' }

    switch (action.type) {
        case "add_blogpost":
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        case "delete_blogpost":
            // this returns a new array containing all blogPosts whose id !== action.payload, which is id
            return state.filter((blogPost) => blogPost.id !== action.payload)
        default:
            return state;
    }
};

// addBlogPost(dispatch) => {return () => dispatch(...)}
// function returns a function that calls dispatch functions
const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: "add_blogpost", payload: { title, content } });
        callback();
    }
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id });
    }
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    [{ id: 1, title: 'TEST POST', content: "TEST CONTENT" }]
);
