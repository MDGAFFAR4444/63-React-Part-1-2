import Product from "./Product.jsx";
//import Title from "./Title.jsx";

function ProductTab() {
  let options = [<li>"hi-tech"</li>, <li>"durable"</li>, <li>"fast"</li>];
  //let options2 = { a: "hi-tech", b: "durable", c: "fast"};
    return (
        <>
      <Product title="phone" price="30,000"/>
      <Product title="laptop" price="40,000" />
      <Product title="pen" price={1} />
    

    </>
    );
}

export default ProductTab;