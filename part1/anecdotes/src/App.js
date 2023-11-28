import React, {useState} from 'react';

const Title = ({text}) => <h1>{text}</h1>;

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;

const Anecdote = ({anecdote, votes}) => {
  return (
    <>
      <p>{anecdote}</p>
      <p>Has {votes} votes</p>
    </>
  );
}

function App({anecdotes}) {
  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleClick = () =>{
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  }

  const handleVote = () =>{
    const copy = {...votes};
    copy[selected] === undefined ? copy[selected] = 1 : copy[selected] += 1;
    
    setVotes(copy);
  }

  const getMaxVotes = () => {
    return Math.max(...Object.values(votes));
  }

  const getMostVoted = () => { 
    const max = getMaxVotes();
    const index = Object.keys(votes).find(key => votes[key] === max);
    return anecdotes[index];
  }

  return (
    <div className="App">
      <Title text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={handleVote} text="Vote" />
      <Button handleClick={handleClick} text="Next anecdote" />
      <Title text="Anecdote with most votes" />
      { (getMaxVotes() === 0) ?  
      <p>No votes yet</p> :
      <Anecdote anecdote={getMostVoted()} votes={getMaxVotes()} />
    }
    </div>
  );
}

export default App;
