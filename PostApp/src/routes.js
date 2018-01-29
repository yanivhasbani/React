import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export default (
    <Route path="/" component={App} >
        {/* This is the default component to be shown
            Only when we are at "/" */}
        <IndexRoute component={PostsIndex} />
        <Route path="posts/new" component={PostsNew} />
        {/* :id will come from this.props.param.id  */}
        {/* The number will come from the URL itself! */}
        {/* This is done by react-router */}
        <Route path="posts/:id" component={PostsShow} />
    </Route>
);
