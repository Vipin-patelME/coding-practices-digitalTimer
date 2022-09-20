// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {initialTime: 25, isStart: true, status: 'Running'}

  onPause = () => {
    this.setState({isStart: false, status: 'Paused'})
  }

  onStart = () => {
    this.setState({isStart: true, status: 'Running'})
  }

  onReset = () => {
    this.setState({initialTime: 25, isStart: true})
  }

  onDecreaseTime = () => {
    this.setState(prevState => ({initialTime: prevState.initialTime - 1}))
  }

  onIncreaseTime = () => {
    this.setState(prevState => ({initialTime: prevState.initialTime + 1}))
  }

  render() {
    const {initialTime, isStart, status} = this.state
    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div>
          <div className="watch-item">
            <div className="watch-container">
              <div className="timer-cont">
                <h1>{initialTime}</h1>
                <p>{status}</p>
              </div>
            </div>
            <div>
              <div className="icons-parent">
                <div className="icon-container">
                  {isStart ? (
                    <>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                        alt="pause icon"
                        className="icon-size"
                        onClick={this.onPause}
                      />
                      <p>Pause</p>
                    </>
                  ) : (
                    <>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                        alt="start icon"
                        className="icon-size"
                        onClick={this.onStart}
                      />
                      <p>Start</p>
                    </>
                  )}
                </div>
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                    alt="reset icon"
                    className="icon-size"
                    onClick={this.onReset}
                  />
                  <p>Reset</p>
                </div>
              </div>
              <p className="timer-limit">Set timer limit</p>
              <div className="button-cont">
                <button
                  className="minus-btn"
                  type="button"
                  onClick={this.onDecreaseTime}
                >
                  -
                </button>
                <p className="initial-time-heading">{initialTime}</p>
                <button
                  className="plus-btn"
                  type="button"
                  onClick={this.onIncreaseTime}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
