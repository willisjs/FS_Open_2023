import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const total = (good + neutral + bad)
  if (good + neutral + bad === 0) {
    return (
      <div>
        <br />
        No feedback given.
      </div>
    )
  }

  return (
<div>
  <h1>Statistics</h1>
  <table>
    <tbody>
      <tr>
        <td>Good:</td>
        <td>{good}</td>
      </tr>
      <tr>
        <td>Neutral:</td>
        <td>{neutral}</td>
      </tr>
      <tr>
        <td>Bad:</td>
        <td>{bad}</td>
      </tr>
      <tr>
        <td>All:</td>
        <td>{total}</td>
      </tr>
      <tr>
        <td>Average:</td>
        <td>{(good-bad)/total}</td>
      </tr>
      <tr>
        <td>Positive:</td>
        <td>{good/total}</td>
      </tr>
    </tbody>
  </table>
</div>

  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {setGood(good + 1); console.log(good);}
  const handleNeutralClick = () => {setNeutral(neutral + 1); console.log(neutral);}
  const handleBadClick = () => {setBad(bad + 1); console.log(bad);}

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App