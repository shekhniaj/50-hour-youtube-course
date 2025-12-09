import { useEffect } from "react"

const BasicEffect = () => {
  useEffect(() => {
    console.log("basic effect")
  })
  return (
    <h1>
      Basic effect
    </h1>
  )
}

export default BasicEffect