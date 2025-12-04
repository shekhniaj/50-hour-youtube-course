import Dynamic from "./components/Dynamic";
import Greeting from "./components/Greeting";
import JsxRuels from "./components/JsxRuels";
import ProductInfo from "./components/ProductInfo";
import UserList from "./components/UserList";

const App = () => {
  return (
    <>
      <JsxRuels />
      <Dynamic />
      <Greeting />
      <UserList />
      <ProductInfo />
    </>
  );
};

export default App;
