import React, { Component } from 'react';

export default class EvenAndOdd extends Component {

  constructor() {

    super()

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  handleChange(event) {
    this.setState({
      userInput: event.target.value
    })
  }


  handleClick() {
    const numsArr = this.state.userInput.split(',')

    const newEvensArr = numsArr.filter(e => parseInt(e) % 2 === 0)

    const newOddsArr = numsArr.filter(e => e % 2 === 1)

    this.setState({
      evenArray: newEvensArr,
      oddArray: newOddsArr
    })
  }



  render() {
    return (
      <div className="puzzleBox evenAndOddPB">

        <input className="inputLine" onChange={(event) => this.handleChange(event)} />

        <button className="confirmationButton" onClick={() => this.handleClick()}>Click Me</button>

        <span className="resultsBox">{JSON.stringify(this.state.evenArray)}</span>

        <span className="resultsBox">{JSON.stringify(this.state.oddArray)}</span>



      </div>
    )
  }
}