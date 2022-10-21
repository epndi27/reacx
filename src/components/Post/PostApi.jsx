import React, { Component} from 'react';
import axios  from 'axios'

const api = 'http://localhost:8000/api/Casing/All'

class PostApi extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[],
            response:'',
            display:"none",
        }
    }

    componentDidMount(){
        axios.get(api).then(res => {
          this.setState({
            posts: res.data
          })
        } )
    }

    render() {
        return (
            <>
                    {this.state.posts.map((posts) => {
                        return (
                            <h1 key={posts.idCasing}> {posts.NamaCasing}</h1>
                        );
                    })}
            </>
        );
    }
}

export default PostApi;