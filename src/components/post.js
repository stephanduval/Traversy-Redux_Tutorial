import React, { Component } from 'react';
import { connect } from 'react-redux';  // this connects your components to the redux store.
import { fetchPosts } from '../actions/postActions'

// =========== We don't need these anymore because they now come from REDUX in the postActions file and the { store }
/*class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts : []
        }
    }


    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({ posts : data }));
    }
*/
class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

export default connect(null, { fetchPosts })(Posts);