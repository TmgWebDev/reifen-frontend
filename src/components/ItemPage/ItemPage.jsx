import React from "react";
import "../ItemPage/ItemPage.css";
import DetailsThumb from "../ItemPage/DetailsThumb";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductRating from "./ProductRating.jsx";
import UserRating from "./UserRating.jsx";
import InputSlider from "./Slider";

function ItemPageWrapper() {
  const [data, setData] = useState({
    products: [
      {
        id: "1",
        sellerName: "Lionel Messi",
        userRating: 2,
        title: "Product Name",
        src: [
          "https://toyotires.eu/img-cache/uploads-image-15385-png-crop-0x450q75.png",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsN3yU-JGaBSuRDtcnRHubHTwfYsOLpuJaicOpN62sEJjOT6bmgLFVG81q8_6yn9UFV7o&usqp=CAU",
        ],
        description: "Description",
        content: "bla bla bla bla ? bla bla ? bla ?",
        productRating: 4,
        price: 69,
        quantity: 42,
      },
    ],
    index: 0,
  });
  const setDataHandler = (value) => setData(value);
  return <ItemPage {...data} setDataHandler={setDataHandler} />;
}
function ItemPage(props) {
  const myRef = useRef();

  const handleTab = (value) => {
    props.setDataHandler({ products: props.products, index: value });
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[value].className = "active";
  };

  useEffect(() => {
    const { index } = props;
    myRef.current.children[index].className = "active";
  });

  const { products, index } = props;
  return (
    <div className="app">
      {products.map((item) => (
        <div className="details" key={item._id}>
          <div className="big-img">
            <img src={item.src[index]} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
            </div>
            <h2 className="price">{item.price}$</h2>
            <ProductRating item={item}></ProductRating>
            <h3>{item.description}</h3>
            <p>{item.content}</p>
            <br />
            <DetailsThumb images={item.src} tab={handleTab} myRef={myRef} />
            <div className="sellerName">Seller:&nbsp;{item.sellerName}</div>
            <UserRating item={item} className="sellerRating">
              Rating:
            </UserRating>
            <InputSlider item={item} />
            <button className="cart">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemPageWrapper;
