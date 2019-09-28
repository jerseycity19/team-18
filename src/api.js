// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const ForumAPI = {
  entries: [
    { eid: 1, title: "Drug Abuse for Adults", content: "Lorem ipsum dolor sit amet, consectetur"},
    { eid: 2, title: "How can I talk to my friend about getting help?", content: "adipiscing elit, sed do eiusmod tempor"}
  ],
  all: function() { return this.entries},
  get: function(id) {
    const isEntry = p => p.eid === id
    return this.entries.find(isEntry)
  }
}

const PlayerAPI = {
  players: [
    { number: 1, name: "Ben Blocker", position: "G" },
    { number: 2, name: "Dave Defender", position: "D" },
    { number: 3, name: "Sam Sweeper", position: "D" },
    { number: 4, name: "Matt Midfielder", position: "M" },
    { number: 5, name: "William Winger", position: "M" },
    { number: 6, name: "Fillipe Forward", position: "F" }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export { PlayerAPI, ForumAPI }
