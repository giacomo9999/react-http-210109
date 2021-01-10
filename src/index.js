import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";
axios.defaults.headers.post["Content-type"] = "application/json";

axios.interceptors.request.use(
  (req) => {
    console.log(req);
    return req;
  },
  (err) => {
    console.log("Index.js error");
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => console.group(res),
  (err) => {
    console.log("Response error",err);
    return Promise.reject(err);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
