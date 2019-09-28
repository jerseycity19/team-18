import React from 'react'
import { ForumAPI } from '../api'
import { Link } from 'react-router-dom'

class Entry extends React.Component {
	state = {
		text : '',
		postArr: ['Lorem ipsum dolor sit amet, consecteturs', 'help']
	}

	addText = (text) => {
		this.setState({ text : this.state.text , postArr : this.state.postArr + [this.state.text] })
	}

	addTextForm = () => {
		const entry = this.refs.textEntry.value
		this.props.addText(entry)
		return (
			<h2 class="forumContent">this.refs.textEntry.value</h2>
		)
	}

	renderPosts = (index) => {
		return(
			<h2 class="forumContent">{this.state.postArr[index]}</h2>
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
			  <h1 class="title">{entry.title}</h1>
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

// const Entry = (props) => {
// 	const entry = ForumAPI.get(
// 		parseInt(props.match.params.eid, 10)
// 	)
// 	if (!entry) {
// 		return <div>Forum post not found!</div>
// 	}
// 	return (
// 		<div>
// 		  <h1 class="title">{entry.title}</h1>
// 		  <h2 class="forumContent">{entry.content}</h2>

// 		  <Link to='/communityForum'>Back</Link>
// 		</div>
// 	)
// }

export default Entry