import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  ac = () => {
    const {speed} = this.state
    this.setState({speed: speed + 10})
  }

  br = () => {
    const {speed} = this.state
    this.setState({speed: speed - 10})
  }

  render() {
    const {speed} = this.state
    return (
      <div>
        <h1>Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
        />
        <h1>Speed is {speed}mph</>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button type="button" onClick={this.ac}>
            Accelerate
          </button>
          <button type="button" onClick={this.br}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
