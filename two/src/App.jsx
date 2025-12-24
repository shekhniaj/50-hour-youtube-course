import Accordion from "./accordion/Accordion"
import Counter from "./counter/Counter"
import Form from "./form/Form"
import HiddenSearchBar from "./hiddenSearchBar/HiddenSearchBar"
import Meals from "./meals/Meals"
import Testimonial from "./testimonial/Testimonial"
import Todo from "./todo/Todo"
import ToggleBg from "./togglebg/ToggleBg"
import { accordionData } from "./utils/content"

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Meals /> */}
      {/* <ToggleBg /> */}
      {/* <HiddenSearchBar /> */}
      {/* <Testimonial /> */}
      {/* <div className="accordion">
        {accordionData.map(({title, content}, idx) => (
          <Accordion title={title} content={content} key={idx} />
        ))}
      </div> */}

      <Form />
    </div>
  )
}

export default App