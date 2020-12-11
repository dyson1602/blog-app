import React from 'react'
import BlogCard from '../Components/BlogCard'

function SavedContainer(props) {
  let blogCards = props.blogArray.map(blogObj => <BlogCard blog={blogObj}/>)
  if (props.blogArray.length > 0){
    return (
    <>
    <h1>SAVED</h1>
      { blogCards }
    </>
  )
  } else {
    return (
      <h1>SAVED</h1>
    )
  }
  
}

export default SavedContainer