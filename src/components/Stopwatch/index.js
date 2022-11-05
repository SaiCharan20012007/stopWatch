// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {count: 1, min: 0, sec: 0}

  startTimer = () => {
    this.timerId = setInterval(this.tick, 1000)
    console.log('timer started')
  }

  resetTimer = () => {
    this.timerId = clearInterval(this.timerId)
    this.setState({count: 0})
    this.setState({min: 0})
    this.setState({sec: 0})
  }

  stopTimer = () => {
    this.timerId = clearInterval(this.timerId)

    console.log('timer stopped')
  }

  tick = () => {
    const {count, sec} = this.state
    this.setState({sec: count})
    this.setState(prevState => ({count: prevState.count + 1}))
    if (sec >= 59) {
      this.setState({sec: 0})
      this.setState({count: 0})
      this.setState(prevState => ({min: prevState.min + 1}))
    }
  }

  render() {
    const {min, sec} = this.state
    const minute = min > 9 ? `${min}` : `0${min}`
    const second = sec > 9 ? `${sec}` : `0${sec}`

    return (
      <div className="bg-container">
        <h1 className="title">Stopwatch</h1>
        <div className="card">
          <div className="top-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="timeIcon"
              alt="stopwatch"
            />
            <p className="subTitle">Timer</p>
          </div>
          <h1 className="time">
            {minute}:{second}
          </h1>
          <div className="btn-container">
            <button
              type="button"
              className="btnStart"
              onClick={this.startTimer}
            >
              Start
            </button>

            <button type="button" className="btnStop" onClick={this.stopTimer}>
              Stop
            </button>
            <button
              type="button"
              className="btnReset"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
