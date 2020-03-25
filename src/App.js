/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { Component } from "react";
import "./App.css";
import Authenticate from './Authentication/Authenticate'
import PostPage from './components/PostsContainer/PostsPage'
// import the PostsPage and SearchBar and add them to the App
// import dummydata

// import SearchBar from "./components/SearchBar/SearchBarContainer";
// import PostsPage from "./components/PostsContainer/PostsPage";
// import dummyData from "./dummy-data";

const AuthenticatedPostPage = Authenticate(PostPage);


class App extends Component {
  constructor(){

    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount(){

  }
  // set up state for the dummy data and pass to your PostsPage

  render() {
    localStorage.clear()
    return (
      <div className="App">
        {/* Add components here  and pass props where appropriate */}
        <AuthenticatedPostPage />
      </div>
    );
  }
}


export default App;


