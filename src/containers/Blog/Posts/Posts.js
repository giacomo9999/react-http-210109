import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";
import styles from "./Posts.module.css";

class Posts extends Component {
  state = { postData: [], selectedPostId: null };

  componentDidMount() {
    axios
      .get("/posts")
      .then((res) => {
        const posts = res.data.slice(0, 4);
        const adjPosts = posts.map((post) => {
          return { ...post, author: "Jim G." };
        });
        this.setState({ postData: adjPosts, error: false });
      })
      .catch((err) => console.log(err));
  }

  postSelectedHandler = (id) => {
    console.log("Post selected...", id);
    this.setState({ selectedPostId: id });
  };

  render() {
    console.log("Render state: ", this.state);
    const posts = this.state.postData.map((post, index) => {
      return (
        <Link to={"/" + post.id} key={"link_" + index}>
          <Post
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        </Link>
      );
    });
    return (
      <div>
        <section className={styles.Posts}>{posts}</section>
        <Route path="/:id" exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;
