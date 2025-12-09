import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(prev => prev + 1)
  }
  
  return (
    <div>
      <h2>Counter</h2>
      <h2>{count}</h2>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default Counter