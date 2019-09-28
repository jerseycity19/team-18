import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CommunityForum from './CommunityForum'
import Entry from './Entry'

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <Route exact path='/communityForum' component={CommunityForum}/>
    <Route path='/communityForum/:eid' component={Entry}/>
  </Switch>
)


export default Forum
