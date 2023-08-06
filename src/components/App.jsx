import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
    positivePercentage: this.props.positivePercentage,

    // good: 0,
    // neutral: 0,
    // bad: 0,
    // total: 0,
    // positivePercentage: 0,
  };

  countTotalFeedback = () => {
    this.setState({
      total: this.good + this.bad + this.neutral,
    });
  };

  countPositiveFeedbackPercentage = () => {};

  handleGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));

    // this.setState(prevState => ({
    //   neutral: prevState.neutral + 1,
    // }));
  };

  // handleNeutralFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };

  handleBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          onGood={this.handleGoodFeedback}
          onBad={this.handleBadFeedback}
        />
        {/* <FeedbackOptions options={this.handleGoodFeedback} onLeaveFeedback={this.handleBadFeedback} /> */}

        <h3>Statistics</h3>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positivePercentage}
        ></Statistics>
        {/* <Statistics good={0} neutral={0} bad={0} total={0} positivePercentage={0}></Statistics> */}
        {/* <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.state.total}</p>
          <p>Positive feedback: %</p>
        </div> */}
      </div>
    );
  }
}

// static defaultProps = {
// value:
// }

//   export const App = () => {
//    render() {} return (<div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101'
//         }}
//       >
//         React homework template
//       </div>

//
//     );
//   };

// }

// class Feedback extends Component {
//   render() {
//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         <h2>Please leave feedback</h2>
//         <div>
//           <button type="button">Good</button>
//           <button type="button">Neutral</button>
//           <button type="button">Bad</button>
//         </div>
//         <h3>Statistics</h3>
//         <div>
//           <p>Good: </p>
//           <p>Neutral: </p>
//           <p>Bad: </p>
//           <p>Total: </p>
//           <p>Positive feedback: %</p>
//         </div>
//       </div>
//     );
//   }
// }
