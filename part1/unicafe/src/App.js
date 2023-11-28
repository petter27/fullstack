import React, { useState } from 'react';

const Button = ({text, onClick}) => <button onClick={onClick} >{ text }</button>;

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>;

const Statistics = ({good,neutral, bad}) => {
  return(
       (good + neutral + bad) !== 0 ?
          <div>
          <h1>Statistics</h1>
          <table>
            <tbody>
              <StatisticLine text="Good" value={good} />
              <StatisticLine text="Neutral" value={neutral} />
              <StatisticLine text="Bad" value={bad} />
              <StatisticLine text="Average" value={ (good - bad) / (good + neutral + bad) } />
              <StatisticLine text="Positive" value={ (good / (good + bad + neutral))*100 + '%'} />
            </tbody>
          </table>
        </div>
        :
        <p>No feedback given</p> 
  );
}

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div className="App">
      <h1>Give feedback</h1>
      <Button text="Good" onClick={()=>{ setGood( good + 1 )}} />
      <Button text="Neutral" onClick={()=>{ setNeutral( neutral + 1) }} />
      <Button text="Bad" onClick={()=>{ setBad( bad + 1 ) }} />
     <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
