import { useEffect, useState } from "react"
import axios from "axios"
import "./style.css"

const Meals = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood").then(res => {
      // console.log(res.data.meals)
      setItems(res.data.meals)
    }).catch(err => console.log(err))
  }, [])

  const itemList = items.map(({strMeal, strMealThumb, idMeal}) => {
    return <div className="card" key={idMeal}>
      <img src={strMealThumb} alt={strMeal} />
      <div className="content">
        <p>{strMeal}</p>
        <p>#{idMeal}</p>
      </div>
    </div>
  })

  return (
    <section className="items-container">{itemList}</section>
  )
}

export default Meals