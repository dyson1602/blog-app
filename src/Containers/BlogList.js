import React from 'react'
import apiResponse from '../data'
import BlogCard from '../Components/BlogCard'

class BlogList extends React.Component {

  render() {
    let blogsArray = apiResponse.map(blogObj => <BlogCard key={blogObj.id} blog={blogObj} cardClickHandler={this.props.cardClickHandler}/>)
    return(
      <>
        { blogsArray }
      </>
    )
  }

}

export default BlogList