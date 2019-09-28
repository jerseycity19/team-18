import React, {Component} from 'react'
import ReactDOM from "react-dom"
import './Roster.css'
import {Link} from 'react-router-dom'

// The Roster component matches one of two different routes
// depending on the full pathname
class Roster extends Component {
  percentage = {
    value: 1,
    count: 0
  }
  state = {
    showHide: "block",
    something: "none",
    percentageCount: 0
  }

 myFunction= (number) => {
  this.percentage.value = this.percentage.value * number.target.getAttribute('variable');
  console.log(this.percentage.value)
  this.percentage.count +=1;
  this.setState({ percentageCount: this.percentage.count})
  if (this.percentage.count == 5) {
    this.state.something = "block"
  }
}
render(){
  return(
  <div>
    
      <p ref="text" style={{display: this.state.showHide}}>How old are you?
      <ul>
      <li><input type="radio" ref='myCheck' variable={.99} onClick={this.myFunction.bind(this)}></input>16-19</li>
      <li><input type="radio" ref='myCheck' variable={.99} onClick={this.myFunction.bind(this)}></input>30</li>
      <li><input type="radio" ref='myCheck' variable={.99} onClick={this.myFunction.bind(this)}></input>40</li>
      <li><input type="radio" ref='myCheck' variable={.99} onClick={this.myFunction.bind(this)}></input>50</li>
      </ul>
      </p>
      <p ref="text" style={{display: this.state.showHide}}>Whats your level of education?
      <ul>
      <li><input type="radio" ref='myCheck' variable={.8} onClick={this.myFunction.bind(this)}></input>High School</li>
      <li><input type="radio" ref='myCheck' variable={.98} onClick={this.myFunction.bind(this)}></input>College</li>
      <li><input type="radio" ref='myCheck' variable={.91} onClick={this.myFunction.bind(this)}></input>Graduate/Ph.D</li>
      <li><input type="radio" ref='myCheck' variable={.82} onClick={this.myFunction.bind(this)}></input>Working</li>
      <li><input type="radio" ref='myCheck' variable={.77} onClick={this.myFunction.bind(this)}></input>Retired</li>
      </ul>
      </p>
      <p ref="text" style={{display: this.state.showHide}}>What's your area like?
      <ul>
      <li><input type="radio" ref='myCheck' variable={.91} onClick={this.myFunction.bind(this)}></input>Rural</li>
      <li><input type="radio" ref='myCheck' variable={.94} onClick={this.myFunction.bind(this)}></input>Urban</li>
      <li><input type="radio" ref='myCheck' variable={.97} onClick={this.myFunction.bind(this)}></input>Suburban</li>
      </ul>
      </p>
      <p ref="text" style={{display: this.state.showHide}}>What's your income level?
      <ul>
      <li><input type="radio" ref='myCheck' variable={.98} onClick={this.myFunction.bind(this)}></input>$0-10,000</li>
      <li><input type="radio" ref='myCheck' variable={.92} onClick={this.myFunction.bind(this)}></input>$10,000-50,000</li>
      <li><input type="radio" ref='myCheck' variable={.95} onClick={this.myFunction.bind(this)}></input>$50,000-10,000</li>
      <li><input type="radio" ref='myCheck' variable={.91} onClick={this.myFunction.bind(this)}></input>$100,000+</li>

      </ul>
      <p ref="text" style={{display: this.state.showHide}}>Do you know somoene who misuses narcotics?
      <ul>
      <li><input type="radio" ref='myCheck' variable={.99} onClick={this.myFunction.bind(this)}></input>Yes</li>
      <li><input type="radio" ref='myCheck' variable={.89} onClick={this.myFunction.bind(this)}></input>No</li>
      </ul>
      </p>
      </p>
      {this.state.percentageCount >= 5 ? 
      <h1 style={{display:this.state.something}}>You are {parseInt(this.percentage.value*100)}% likely to be addicted to opiods!
            <p>Share with</p> <a Link to=''><u>Instagram</u></a> or <a Link to=''><u>Twitter</u></a>
      </h1>
      : ''}


  </div>

  )
}
}
export default Roster