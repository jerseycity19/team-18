import React from 'react'
import { ForumAPI } from '../api'
import { Link } from 'react-router-dom'

const Entry = (props) => {
	const entry = ForumAPI.get(
		parseInt(props.match.params.eid, 10)
	)
	if (!entry) {
		return <div>Forum post not found!</div>
	}

	)
}

export default Entry
