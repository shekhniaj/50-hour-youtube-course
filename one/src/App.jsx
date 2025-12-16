import Greetings from "./2ndHour/Greetings";
import Person from "./2ndHour/Person";
import Product from "./2ndHour/Product";
import StateTest from "./2ndHour/StateTest";
import UserStatus from "./2ndHour/UserStatus";
import Weather from "./2ndHour/Weather";
import BasicEffect from "./3rdHour/BasicEffect";
import CopyInput from "./3rdHour/CopyInput";
import Counter from "./3rdHour/Counter";
import Increment from "./3rdHour/Increment";
import InputHandle from "./3rdHour/InputHandle";
import Profile from "./3rdHour/Profile";
import ShoppingList from "./3rdHour/ShoppingList";
import TodoList from "./3rdHour/TodoList";
import CounterComp from "./4thHour/CounterComp";
import CounterEffect from "./4thHour/CounterEffect";
import FetchDataEffect from "./4thHour/FetchDataEffect";
import FocusInput from "./4thHour/FocusInput";
import Reducer from "./4thHour/Reducer";
import Timer from "./4thHour/Timer";
import UpdateUser from "./4thHour/UpdateUser";
import UserProfile from "./4thHour/UserProfile";
import Dynamic from "./components/Dynamic";
import Greeting from "./components/Greeting";
import JsxRuels from "./components/JsxRuels";
import ProductInfo from "./components/ProductInfo";
import UserList from "./components/UserList";
import UserContext from "./context/UserContext";

const App = () => {
  return (
    <>
      {/* <JsxRuels />
      <Dynamic />
      <Greeting />
      <UserList />
      <ProductInfo />

      <Person name={"Babar"} age={28} />
      <Product name={"Watch"} price={"$280"} />
      <Weather temperature={14} />
      <UserStatus loggedIn={true} isAdmin={true} />
      <Greetings timeOfDay={"morning"} /> */}

      {/* <StateTest />
      <Increment />
      <InputHandle /> */}

      {/* 3rd hour assignments */}
      {/* <Counter />
      <TodoList />
      <Profile />
      <ShoppingList /> */}
      {/* <CopyInput />
      <BasicEffect />
      <CounterEffect />
      <FetchDataEffect /> */}

      {/* <UserContext>
        <UserProfile />
        <UpdateUser />
      </UserContext> */}

      {/* <Reducer /> */}
      <CounterComp />
      <FocusInput />
      <Timer />
    </>
  );
};

export default App;
