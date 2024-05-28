import "./App.css";
//import
import Title from "./Title.jsx";
import Product from "./Product.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox";

// function Des() {
//   return <h1>I am a Description!</h1>;
// }

function App() {
  return (
    <>

    <MsgBox userName="Gabbar" textColor="Red" />
    <MsgBox userName="NSTI Vidyanagar" textColor="blue" />
    <ProductTab />
   </>
  );

}


export default App;
