import { useState } from 'react'

const Header = ({ title }) => <h1>{title}</h1>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
const DisplayText = ({ text }) => <div>{text}</div>


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [anecdoteArray, updateSelected] = useState(Array(anecdotes.length).fill(0))
  const [currentWinner, changeWinner] = useState(0)

  const voteSelected = () => {
    const copy = [...anecdoteArray]
    copy[selected] += 1
    const winner = copy.indexOf(Math.max(...copy))
    updateSelected(copy)
    changeWinner(winner)
  }

  const changeSelected = () => {
    const newNum = Math.floor(Math.random() * (anecdotes.length))
    setSelected(newNum)
  }

  return (
    <div>
      <Header title='Anecdote of the day'/>
      <DisplayText text={anecdotes[selected]}/>
      <DisplayText text={'has ' + anecdoteArray[selected] + ' votes'}/>
      <Button handleClick={voteSelected} text='vote'/>
      <Button handleClick={changeSelected} text='next anecdote'/>
      <Header title='Anecdote with most votes'/>
      <DisplayText text={anecdotes[currentWinner]}/>
    </div>
  )
}

export default App