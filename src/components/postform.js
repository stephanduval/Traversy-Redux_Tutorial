import React, { Component } from 'react';


class PostsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);  // allows us to use this in the variables
        this.onSubmit = this.onSubmit.bind(this);  // allows us to use this in the variables
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
    
        const post = {
            title: this.state.title,
            body: this.state.body
        } 

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST'
            headers: {
                'content-type' : 'applicaiton/json'
            },
            body: JSON.stringify(post)
        })
        .then(rest => rest.json())
        .then(data => console.log(data));
    }
    render() {
        
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label><br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br />
                        <textarea name="body" onChange={this.onChange} value={this.state.body}/>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                    <br />
                </form>
            </div>
        )
    }
}

export default PostsForm;