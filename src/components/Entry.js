import React from 'react'
import { ForumAPI } from '../api'
import { Link } from 'react-router-dom'

class Entry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text : '',
			postArr: [ForumAPI.get(parseInt(this.props.match.params.eid, 10)).content]
		};
	}

	addTextForm = (event) => {
		event.preventDefault();
		const entry = document.getElementById('textEntry').value
		let currArr = this.state.postArr
		currArr.push(entry)
		this.setState({ text : entry, postArr : currArr})
	}

	renderPosts = (index) => {
		return(
			<h2 id="forumContent">{index}</h2>
		)
	}

	render() {
		return (
			<div>
			  <h1 id="title">{ForumAPI.get(parseInt(this.props.match.params.eid, 10)).title}</h1>
			  {this.state.postArr.map((idx) => (
			  	this.renderPosts(idx)
			  ))}
			  <form ref="textForm">
              	<input type="text" id="textEntry" ref="textText"/>
            	<button type="submit" onClick={this.addTextForm.bind(this)}>Add Post</button>
			  </form>
			  <Link to='/communityForum'>Back</Link>
			</div>
		)
	}
}

export default Entry