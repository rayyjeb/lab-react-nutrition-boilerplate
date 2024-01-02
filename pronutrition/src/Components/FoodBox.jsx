import React, { useState } from "react";

const FoodBox = (props) => {
  console.log(props);

  let {
    data: { cal, id, img, name },
    index,
  } = props;

  const [input, setInput] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const quantityHandler = () => {
    setQuantity(input);
  };

  return (
    <div className="foodbox-main">
      <div className="foodbox-main-left">
        <img src={img} alt="" />
        <div className="foodbox-main-left-1">
          <h1  className="foodNameHeader">{name}</h1>
          <h2>{cal}</h2>
        </div>
        <div className="foodbox-main-left-2">
          <input
            type="number"
            value={input}
            min={0}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button onClick={quantityHandler} className="add">
            ADD
          </button>
        </div>
      </div>

      <div className="foodbox-main-right">
        <h4>
          {name} x {quantity} = {cal * quantity} Calories
        </h4>
        <button
          className="reset"
          onClick={() => {
            setInput(0);
            setQuantity(0);
          }}
        >
          R E S E T
        </button>
      </div>
    </div>
  );
};

export default FoodBox;
