import { useState } from 'react'

const Button = (props) => {

    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
      <div>
          <h1>Give Feedback</h1>
          <Button text = "good" handleClick={() => setGood(good + 1)}/>
          <Button text = "neutral" handleClick={() => setNeutral(neutral + 1)}/>
          <Button text = "bad" handleClick={() => setBad(bad + 1)}/>
          <h1>Statistics</h1>
          <p>good: {good}</p>
          <p>good: {neutral}</p>
          <p>good: {bad}</p>
      </div>
  )
}

export default App