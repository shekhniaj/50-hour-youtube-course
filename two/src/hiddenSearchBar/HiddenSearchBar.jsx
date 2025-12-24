import { useState } from "react"
import "./style.css"

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState('white')

  const handleClick = (e) => {
    setBackgroundColor("black")

    if(e.target.className === "container"){
      setShowInput(false)
      setBackgroundColor("white")
    }
  }

  return (
    <section className="container" onClick={handleClick} style={{backgroundColor, width: "100vw"}}>
      {showInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <p onClick={() => setShowInput(true)}>Search</p>
      )}
    </section>
  )
}

export default HiddenSearchBar