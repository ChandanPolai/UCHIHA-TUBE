import { useDispatch } from "react-redux";
import { logout } from "../../app/Slices/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <button
      onClick={logoutHandler}
      className="ml-5 rounded mr-0 md:mx-4 md:w-full sm:max-w-24 px-3 py-2 text-sm md:text-lg dark:bg-[#ae7aff] dark:hover:bg-[#874be8] bg-red-400 hover:bg-red-500  text-center font-bold text-white dark:text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
