import jsonplaceholder from './../apis/jsonplaceholder.js';

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const response = await jsonplaceholder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response.data});
    }
};