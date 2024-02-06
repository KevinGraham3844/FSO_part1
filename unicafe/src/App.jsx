import { useState } from 'react'

const Header = ({ title }) => <h1>{title}</h1>
const Button = ({ updateResults, buttonName, currentStats }) => {
  const newResults = {
    good: currentStats.good,
    bad: currentStats.bad,
    neutral: currentStats.neutral,
    total: currentStats.total + 1
  }
  
  switch(buttonName) {
    case 'good':
      newResults.good = newResults.good + 1
      break
    case 'bad': 
      newResults.bad = newResults.bad + 1
      break
    case 'neutral':
      newResults.neutral = newResults.neutral + 1
      break
  }
  return (
    <button onClick={() => updateResults(newResults)}>{buttonName}</button>  
  )
}
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ statistic }) => {
  if(statistic.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='good' value={statistic.good}/>
          <StatisticLine text='neutral' value={statistic.neutral}/>
          <StatisticLine text='bad' value={statistic.bad}/>
          <StatisticLine text='all' value={statistic.total}/>
          <StatisticLine text='average' value={(statistic.good - statistic.bad) / statistic.total}/>
          <StatisticLine text='percentage' value={((statistic.good / statistic.total) * 100) + ' %'}/>
        </tbody>
      </table>
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state

  const [results, updateResults] = useState({
    good: 0, 
    neutral: 0,
    bad: 0,
    total: 0
  })

  return (
    <div>
     <Header title='give feedback'/>
     <Button updateResults={updateResults} buttonName='good' currentStats={results}/>
     <Button updateResults={updateResults} buttonName='bad' currentStats={results}/>
     <Button updateResults={updateResults} buttonName='neutral' currentStats={results}/>
     <Header title='statistics'/>
     <Statistics statistic={results}/>
    </div>
  )
}

export default App