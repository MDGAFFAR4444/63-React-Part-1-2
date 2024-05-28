import "./Product.css";

function Product({title, price, features}) {
    let styles = { backgroundColor: price > 30000 ? "yellow" : ""};
    //const list = features.map((features) => <li>{features}</li>)
   //let isDiscount = price > 30000 ? "Discount of 5%" : "";
        return (
            <div className="Product" style={styles}>
                <h3>{title}</h3>
                <h4>Price : {price}</h4>
                {price > 30000 ? <p>"Discount of 5%"</p> : <a href="/">Get Discount</a>}
            </div>
        );
    
}

export default Product;



