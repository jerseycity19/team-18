import React from 'react'
import { ForumAPI } from '../api'
import { Link } from 'react-router-dom'

const CommunityForum = () => (
  <div>
    <h1>Community Forum</h1>
      <ul>
      {
      	ForumAPI.all().map(p => (
      	  <li key={p.eid}>
      	  	<Link to={`/communityForum/${p.eid}`}>{p.title}</Link>
      	  </li>
      	))
      }
      </ul>
  </div>
)

export default CommunityForum