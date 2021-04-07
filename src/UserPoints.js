import React, { useState, useEffect } from "react";
import "./App.css";

export default function Appsus() {
  const [posts, setPosts] = useState();
  const url = `https://dev-react-explained-api.pantheonsite.io/wp-json/wp/v2/posts/`;

  const fetchPosts = () => {
    console.log(`Fetching posts`);
    fetch(url)
      .then(response => response.json())
      .then(posts => {
        setPosts(posts);
      })
      .catch(error => console.error(error));
  };

  //Log when posts change
  useEffect(() => console.log(posts), [posts]);

  //Get posts on initial render and if no posts exists
  useEffect(() => {
    fetchPosts();
  });

  //Fetch posts every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`5 second refresh!`);
      fetchPosts();
    }, 5000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </>
  );
}