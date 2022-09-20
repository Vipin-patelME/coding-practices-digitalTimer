// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    watchTime: '25:00',
    initialTime: 25,
    isStart: true,
    status: 'Paused',
  }

  componentDidMount() {
    this.timerId = setInterval(this.increament, 1000)
  }

  increament = () => {
    this.setState(prevState => ({
      watchTime: parseInt(prevState.initialTime) + 1,
    }))
  }

  onReset = () => {
    this.setState({initialTime: 25, isStart: true, status: 'Paused'})
  }

  onDecreaseTime = () => {
    this.setState(prevState => ({
      initialTime: parseInt(prevState.initialTime) - 1,
    }))
  }

  onIncreaseTime = () => {
    this.setState(prevState => ({
      initialTime: parseInt(prevState.initialTime) + 1,
    }))
  }

  onPause = () => {
    this.setState({isStart: true, status: 'Paused'})
  }

  onStart = () => {
    this.setState({isStart: false, status: 'Running'})
  }

  render() {
    const {watchTime, initialTime, isStart, status} = this.state
    console.log(initialTime)
    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div>
          <div className="watch-item">
            <div className="watch-container">
              <div className="timer-cont">
                <h1>{watchTime}</h1>
                <p>{status}</p>
              </div>
            </div>
            <div>
              <div className="icons-parent">
                <div className="icon-container">
                  {isStart ? (
                    <>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                        alt="play icon"
                        className="icon-size"
                        onClick={this.onStart}
                      />
                      <button type="button" onClick={this.onStart}>
                        Start
                      </button>
                    </>
                  ) : (
                    <>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                        alt="pause icon"
                        className="icon-size"
                        onClick={this.onPause}
                      />
                      <button type="button" onClick={this.onPause}>
                        Pause
                      </button>
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
                  <button type="button" onClick={this.onReset}>
                    Reset
                  </button>
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
