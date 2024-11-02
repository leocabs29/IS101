import { useState } from "react";
import coopLogo from "./assets/coopLogo.png";
import qculogo from "./assets/qculogo.png";
import BsitLanyard from "./assets/BSITLanyard.jpg";

import { useNavigate } from "react-router-dom";
import Card from './Card.jsx'
function Products() {
    const list = ["School supplies","School uniforms","P.E Uniform","NSTP","Uniform",
        "PIA", "Shirt",
        "Lanyard",
        "Drinks"]
  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="currentColor"
      className="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    </svg>
  );

  const [listVisible, setListVisible] = useState(false);

  const toggleList = () => {
    setListVisible(!listVisible);
  };

  return (
    <>
    <div className="bg-indigo-950 w-full h-screen">
    <nav className="bg-indigo-950  flex items-center p-2 justify-between">
        <div className="w-max flex p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=""
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="size-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1-2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
            />
          </svg>
        </div>
        {/* Search bar below this line */}
        <div className="relative w-40">
          <input
            type="text"
            className="bg-blue-100 rounded-2xl p-2 pl-10 w-40"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {searchIcon}
          </div>
        </div>

        {/* logos below this line */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="white"
          className="bi bi-list "
          viewBox="0 0 16 16"
          onClick={toggleList}
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </nav>
      {/* List below this line */}
      <div className="bg-indigo-950  w-full h-max">
        <div className="w-full flex justify-end"></div>
        <ul className={`bg-indigo-900 ${listVisible ? "block" : "hidden"} p-1`}>
          {list.map((li)=> <li className="p-2 text-white font-bold  hover:bg-gray-500  ">{li}</li>)}
        </ul>
        <div className="text-center text-2xl font-bold text-white">
            <p className="mb-6">School Supplies</p>
        </div>
        <div className=" w-full flex flex-wrap justify-evenly ">
        <Card name={"Envelope"} img={BsitLanyard} price={`P${15}`}/>
        <Card name={"Pencil"} img={BsitLanyard} price={`P${10}`}/>
        <Card name={"I.D case"} img={BsitLanyard} price={`P${25}`}/>
        <Card name={"Sharpener"} img={BsitLanyard} price={`P${8}`}/>
        </div>
        <div className=" flex flex-col items-center h-24 justify-around">
            <button className="bg-yellow-400 w-max px-2 py-1 rounded-xl text-indigo-950 font-bold ">My orders</button>
            <button className="bg-yellow-400 w-max px-2 py-1 rounded-xl text-indigo-950 font-bold ">Proceed to Payment</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Products;
