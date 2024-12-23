import React from "react";
import product from "./product";

const Price = () => {
    return <p className="price">Prix : <span>{product.price}</span> TND</p>;
};

export default Price;