import { useState } from "react";
import Header from "./Header.jsx";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [ id, setId ] = useState("");
  const [ password, setPassword ] = useState("");
  const goToHome = () => {
    navigate("/landingPage");
  };

  const login = () => {
    if (id === "123" && password === "123") {
      navigate("/products")
    } else {
      alert("incorrect");
    }
  };
  return (
    <>
      <Header />
      <div className="w-full h-screen bg-indigo-950">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 128 128"
          id="tripleleftchevron"
          className="size-10 hover:cursor-pointer"
          onClick={goToHome}
        >
          <path
            stroke="#fffcfc"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="7"
            d="M49 46L31 64 49 82M73 46L55 64 73 82M97 46L79 64 97 82"
            className="colorStroke000000 svgStroke"
          ></path>
        </svg>
        <div>
          <p className="text-center text-2xl font-bold text-white">LOG-IN</p>{" "}
          <br />
        </div>

        {/* input below this line */}

        <div className="w-full flex   items-center flex-col ">
          <p className="font-bold text-white text-lg"> Student Number</p>
          <input
            onChange={(e) => setId(e.target.value)}
            value={id}
            placeholder="00-0000"
            type="text"
            className="px-2 py-2 rounded-2xl bg-yellow-400 hover:bg-yellow-200 text-center text-indigo-950"
          />
          <br />
          <p className="font-bold text-white text-lg">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="px-2 py-2 rounded-2xl bg-yellow-400 hover:bg-yellow-200 text-center"
          />
          <br />
          <button
            onClick={login}
            className="px-6 py-1 rounded-2xl bg-yellow-400 hover:bg-yellow-200 font-bold text-indigo-950"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
