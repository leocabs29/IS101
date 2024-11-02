import Header from "./Header.jsx";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/landingPage");
  };

  const goToRegisterForm = () => {
    navigate("/registerForm");
  }
  return (
    <>
      <Header />
      <div className="bg-indigo-950 w-full h-screen">
        <div>
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
          </svg>{" "}
          <br />
        </div>
        <div className="text-4xl text-white font-bold text-center ">
          <p>Register</p>
        </div>{" "}
        <br />
        {/* buttons below this line */}
        <div className="h-40 flex flex-col items-center text-indigo-950 font-bold">
            <button className="bg-yellow-400 w-40 px-2 py-1 rounded-2xl hover:bg-yellow-200" onClick={goToRegisterForm}>Staff</button> <br />
            <button className="bg-yellow-400 w-40 px-2 py-1 rounded-2xl hover:bg-yellow-200"onClick={goToRegisterForm} >Student</button>
        </div>
      </div>
    </>
  );
}

export default Register;
