import coopLogo from "./assets/coopLogo.png";
import NavBar from "./Header";
import { useNavigate } from "react-router-dom";
function landingPage() {
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/register"); // Change the path to match your route for Login
  };

  const goToLogin = ()=> {
    navigate("/login");
  }
  return (
    <>
      <nav className="bg-indigo-950 sm:w-full sm:h-20 flex p-2">
        <div className="w-44 flex justify-around items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
            />
          </svg>

          <h1
            className="text-white text-bold text-sm hover:cursor-pointer p-2 rounded-lg hover:bg-indigo-900"
            onClick={goToRegister}
          >
            Register
          </h1>
          <h1 className="text-white text-bold text-sm p-2 rounded-lg hover:bg-indigo-900" onClick={goToLogin}>Login</h1>
        </div>
      </nav>
      <div className="w-full ">
        <img src={coopLogo} className="bg-center bg-cover w-full" />
      </div>
      <div>
        <h1 className="bg-white text-center text-4xl font-bold">WElCOME</h1>
      </div>
    </>
  );
}

export default landingPage;
