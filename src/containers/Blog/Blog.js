import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = { postData: [], selectedPostId: null };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/postsss")
      .then((res) => {
        const posts = res.data.slice(0, 4);
        const adjPosts = posts.map((post) => {
          return { ...post, author: "Jim G." };
        });
        this.setState({ postData: adjPosts });
      })
      .catch((err) => this.setState({ error: true }));
  }

  postSelectedHandler = (id) => {
    console.log(id + " Clicked.");
    this.setState({ selectedPostId: id });
  };

  render() {
    const posts = this.state.postData.map((post, index) => {
      return (
        <Post
          key={"post_" + index}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      );
    });
    return this.state.error ? (
      <div>
        <h1>An error occurred</h1>
      </div>
    ) : (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
