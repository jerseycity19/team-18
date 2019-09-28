import React from 'react'
import { ForumAPI } from '../api'
import { Link } from 'react-router-dom'

const CommunityForum = () => (
  <div>
    <h1 class="title">Community Forum</h1>
      <ul>
      {
      	ForumAPI.all().map(p => (
      	  <li key={p.eid} class="forumContainer">
      	  	<Link to={`/communityForum/${p.eid}`} class="forumTitle">{p.title}</Link>
      	  </li>
      	))
      }
      </ul>
  </div>
)

export default CommunityForum