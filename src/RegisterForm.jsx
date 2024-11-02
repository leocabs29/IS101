import qculogo from "./assets/qculogo.png";
import coopLogo from "./assets/coopLogo.png";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();

  const goToHome = () =>{
      navigate('/register')
  }

  return (
    <>
      <div>
        <nav className="bg-white flex justify-between p-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill=""
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="indigo"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1-2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>
          </div>
          <div className="flex w-1/3 justify-around lg:w-40 lg:justify-evenly">
            <img src={qculogo} className="size-10" />
            <img src={coopLogo} className="size-10" />
          </div>
        </nav>
        {/* Login section */}
        <div className="bg-indigo-950 w-full h-screen">
          <div className="p-2">
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
          </div>

          {/* Inputs */}
          <div className="flex justify-center text-center">
            <div className="text-white font-bold p-4">
              <p>Username</p>
              <input type="text" className="bg-yellow-400 rounded-lg py-1 px-2 hover:bg-yellow-200" />
              <p className="pt-2">Email</p>
              <input type="text" className="bg-yellow-400 rounded-lg py-1 px-2 hover:bg-yellow-200" />
              <p className="pt-2">Contact Number</p>
              <input type="text" className="bg-yellow-400 rounded-lg py-1 px-2 hover:bg-yellow-200" />
              <p className="pt-2">Password</p>
              <input type="password" className="bg-yellow-400 rounded-lg py-1 px-2 hover:bg-yellow-200" />
              <br /> <br />
              <button className="bg-yellow-400 rounded-lg px-3 py-1 text-indigo-950 hover:bg-yellow-200">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
