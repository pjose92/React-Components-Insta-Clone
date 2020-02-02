/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
// import dummydata

import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/PostsContainer/PostsPage";
import data from "./dummy-data";

const App = (props) => {
  // set up state for the dummy data and pass to your PostsPage
  const [instaData, setInstaData] = useState(data);
  // console.log(instaData);
  return (
    <div className="App">
      {/* Add components here  and pass props where appropriate */}
      <SearchBar />
      <PostsPage 
      data={instaData}/>
    </div>
  );
};

export default App;
