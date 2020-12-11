import logo from './logo.svg';
import './App.css';
import BlogList from './Containers/BlogList'
import React from 'react'
import SavedContainer from './Containers/SavedContainer'

class App extends React.Component {

  state = { blogArray: [] }

  cardClickHandler = (blogObj) => {
    if (!this.state.blogArray.includes(blogObj)) {
      this.setState((prevState) => ({
        blogArray: [...prevState.blogArray, blogObj]
      }))
    }
  }

  render() {
    return (
      <>
        <BlogList cardClickHandler={this.cardClickHandler} />
        <SavedContainer blogArray={this.state.blogArray} />
      </>
    )
  }

}

export default App;
