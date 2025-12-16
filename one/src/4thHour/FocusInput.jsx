import { useRef } from "react"

const FocusInput = () => {
  const inputElement = useRef(null)
  
  const handleClick = () => {
    inputElement.current.focus()
  }
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={handleClick}>Focus</button>
    </div>
  )
}

export default FocusInput