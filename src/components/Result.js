import React from 'react'

function Result (props) {
  const { loggedInUser, text, votes, totalVotes } = props
  function getPercentage(){
    return votes.length / totalVotes
  }
  function authedUserVoted () {
    return votes.includes(loggedInUser)
  }
  
  return (
    <div className='result-container'>
      <div className='result'>
      
          Would you rather { text }?
          <progress id='bar' max="1" value={getPercentage()}/>
          <div className='vote-count'>
            {votes.length} out of {totalVotes} votes

        </div>
      </div>
{authedUserVoted() && (<div className='vote'>Your Vote</div>)}
    </div>
  )
}

export default Result;