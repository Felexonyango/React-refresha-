import React from 'react'

const Count = ({text,count}) => {
    console.log(`Rendering text${text}`)
  return (
    <div>
        {text}-{count}
    </div>
  )
}

export default React.memo(Count)