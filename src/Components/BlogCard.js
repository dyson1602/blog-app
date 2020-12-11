import React, { Component } from 'react'


class BlogCard extends Component {

  state = {
    counter: 0
  }

  incrementCounter = () => {
    console.log(this.props)
    this.setState((prevState) => ({ counter: prevState.counter + 1 }))
    if(this.props.cardClickHandler){this.props.cardClickHandler(this.props.blog)}
  }

  render() {
    const {blog} = this.props
    return (
      <div>
        <h1>{blog.name}</h1>
        <img alt="old people" src={blog.img} style={{ maxWidth: "70vw", maxHeight: "20vh" }} />
        <h4>Counter: {this.state.counter}</h4>
        <button onClick={this.incrementCounter}>Save</button>
        <button>Visit</button>
      </div>
    )
  }

}



// function BlogCard({blogObj}) {

//   return(

//     <div>
//         <h1>{blogObj.name}</h1>
//         <img alt="old people" src={blogObj.img} style={{maxWidth: "70vw", maxHeight: "50vh"}}/>
//         <button onClick={ this.incrementCounter }>Save</button>
//         <button>Visit</button>
//     </div>
//   )
// }

export default BlogCard