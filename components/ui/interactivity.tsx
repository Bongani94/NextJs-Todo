"use client"
import React, { useState } from 'react'

const Interactivity = () => {

    const [count, setCount] = useState(0);

  return (
    <div>
        <button onClick={() => setCount(count + 1)}><b>count</b>: {count}</button>
      
    </div>
  )
}

export default Interactivity;
