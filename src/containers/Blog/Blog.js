import React, { Component } from "react";
import axios from "../../axios";
import { Route, NavLink } from "react-router-dom";

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";
import styles from "./Blog.module.css";

class Blog extends Component {
  render() {
    return (
      <div className={styles.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName={styles.selectedLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                  activeClassName={styles.selectedLink}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>HOME</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/:id" exact component={FullPost} />
        <Route path="/new-post" exact component={NewPost} />
      </div>
    );
  }
}

export default Blog;
