import { useState } from "react";
import LeftArrow from './assets/left.png'
import rightArrow from './assets/right.png'
function Card({ name, img, price }) {
  
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <div className="w-max px-4 rounded-lg text-center flex flex-col items-center border-4 m-2 border-yellow-400">
        <p className="text-white font-bold text-lg m-2">{name}</p>
        <div>
          <img src={img} className="size-28  lg:size-56 rounded-xl" />
        </div>
        <p className="text-white font-bold text-lg">{price}</p>
        <div className="flex  w-20 justify-around items-center ">
          <img src={LeftArrow} className="size-5 hover:cursor-pointer" onClick={decrement}/>
          <p className="text-yellow-400 font-bold text-2xl">{quantity}</p>
          <img src={rightArrow} className="size-5 hover:cursor-pointer" onClick={increment}/>
        </div>
      </div>
    </>
  );
}

export default Card;
