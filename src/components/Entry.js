import React from 'react'
import { ForumAPI } from '../api'
import { Link } from 'react-router-dom'

class Entry extends React.Component {
	state = {
		text : '',
		postArr: ['Lorem ipsum dolor sit amet, consecteturs', 'help']
	}

	addText = (str) => {
		let newArr = this.state.postArr
		newArr.push(str)
		console.log(this.state)
		this.setState({ text : str , postArr : newArr })
	}

	addTextForm = () => {
		const entry = this.refs.textEntry.value
		this.props.addText(entry)
		return (
			<h2 id="forumContent">this.refs.textText.value</h2>
		)
	}

	renderPosts = (index) => {
		return(
			<h2 id="forumContent">{this.state.postArr[index]}</h2>
		);
	}

	renderAllPosts = () => {
		for (var i = 0; i < this.state.postArr.length; i++) {
			return (this.renderPosts(i))
		}
	}

	render() {
		const entry = ForumAPI.get(parseInt(this.props.match.params.eid), 10)
		if (!entry) {
			return <div>Forum post not found!</div>
		}
		return (
			<div>
			  <h1 id="title">{entry.title}</h1>
			  {this.renderAllPosts()}
			  <form ref="textForm" onSubmit={this.addTextForm}>
              	<input type="text" id="textEntry" ref="textText"/>
            	<button type="submit">Add Post</button>
			  </form>
			  <Link to='/communityForum'>Back</Link>
			</div>
		)
	}
}

export default Entry