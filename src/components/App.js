import React from 'react';
import PostList from './PostList.js';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="row">
                <div className="column sixteen wide">
                    <PostList />
                </div>
            </div>
        </div>
    );
};

export default App;