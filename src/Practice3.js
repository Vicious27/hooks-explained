import React, { useState, useEffect } from "react";
import "./App.css";

const Practice3 = () => {

  const [catImg, setCatImg] = useState(``);

  useEffect(() => {
    fetch(`https://source.unsplash.com/random`)
      .then((response) => response.json)
      .then((data) => setCatImg(data.file))
      .catch((error) => console.error(error))
  }, []);



  return (
    <>
      <h1>Random Photo</h1>
      {/* eslint-disable-next-line */}
      <img src={catImg} alt="Random Cat Image" width="500" />
    </>
  );
};

export default Practice3;

/*
 * 1. Create a value in state using hooks called catImg
 * 2. Use useEffect to make an API call to https://aws.random.cat/meow for a random picture of a cat
 * 3. Add the url for the image to the page below the title
 * 4. Pass an empty array of dependencies to useEffect so it only fetches on initial page load
 */