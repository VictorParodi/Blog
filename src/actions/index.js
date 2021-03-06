import jsonplaceholder from './../apis/jsonplaceholder.js';

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const response = await jsonplaceholder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response.data});
    }
};

export const fetchUser = (id) => {
    return async (dispatch, getState) => {
        const response = await jsonplaceholder.get(`/users/${id}`);
        dispatch({type: 'FETCH_USER', payload: response.data});
    }
};