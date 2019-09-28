import React, {Component} from 'react'
import ReactDOM from "react-dom"
import './Roster.css'
import {Link} from 'react-router-dom'
import Chart from "react-apexcharts";

class RadialChart extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          toolbar: {
            show: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: '70%',
              background: '#fff',
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              name: {
                offsetY: -10,
                show: true,
                color: '#888',
                fontSize: '17px'
              },
              value: {
                formatter: function (val) {
                  return parseInt(val);
                },
                color: '#111',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['Percent'],
      },
      series: [props.series],
    }
  }

  changeSeries = (num) => {
  	this.setState({ options : this.state.options , series : [num]});
  }

  render() {
    return (
      <div id="card">
        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="radialBar" height="350" />
        </div>
      </div>
    );
  }
}
// The Roster component matches one of two different routes
// depending on the full pathname
class Roster extends Component {
  constructor(props) {
  	super(props);
  	this.chartRef = React.createRef();
  }
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
  this.chartRef.current.changeSeries(this.percentage.value*100);
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
      <h1 style={{display:this.state.something}}>Your demographic is {parseInt(this.percentage.value*100)}% likely to be addicted to opioids!
            <p>Share with</p> <a target="_blank" href="https://www.instagram.com/weareshatterproof/"><u>Instagram</u></a> or <a target="_blank"  href="https://twitter.com/ShatterproofHQ
"><u>Twitter</u></a>
      </h1>
      : ''}
      <RadialChart series={this.percentage.value} ref={this.chartRef} />

  </div>

  )
}
}
export default Roster