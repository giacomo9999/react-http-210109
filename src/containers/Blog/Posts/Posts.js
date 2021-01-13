import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import styles from "./Posts.module.css";

class Posts extends Component {
  state = { postData: [] };

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
      .catch(
        (err) => console.log(err)
        // this.setState({ error: true, errorMsg: "An error occurred" })
      );
  }

  postSelectedHandler = (id) => {
    // console.log(id + " Clicked.");
    this.setState({ selectedPostId: id });
  };
  render() {
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
    return <section className={styles.Posts}>{posts}</section>;
  }
}

export default Posts;
