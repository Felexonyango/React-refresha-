import React from 'react'

const Test = ({task}) => {
  return (
    <div className='task'>

        <h3>{task.text}</h3>
    </div>
  )
}

export default Test