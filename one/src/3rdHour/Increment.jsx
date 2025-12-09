import { useState } from "react"

const Increment = () => {
  const [count, setCount] = useState(10)

  const handleClick = () => { 
    setCount(prev => prev + 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>increment +</button>
    </div>
  )
}

export default Increment