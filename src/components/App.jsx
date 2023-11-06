import {Component} from "react";
import { Section } from "./Section/Section"
import { SectionWrap } from "./App.styled";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {
    const value = (e.target.textContent).toLowerCase();
    
    this.setState(prevState =>{
      return{
        [value]: prevState[value] + 1,
      }
    })
  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
      return good + neutral + bad
  };

  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };


  render(){
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <SectionWrap>
      <Section title="Please leave feedback" onLeaveFeedback={this.onLeaveFeedback}></Section>
      <Section title="Statistics" stats={this.state} total={total} positiveFeedback={positiveFeedback}></Section>
      </SectionWrap>
    );
  };
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
