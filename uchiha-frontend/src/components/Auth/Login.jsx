// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useForm } from "react-hook-form";
// import { login } from "../../app/Slices/authSlice.js";
// import { Logo, Input, Button } from "../index.js";
// import { Link, useNavigate } from "react-router-dom";
// import { icons } from "../../assets/icons.jsx";
// import { toast } from "react-toastify";

// function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, status } = useSelector(({ auth }) => auth);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   useEffect(() => {
//     if (status) navigate("/");
//   }, []);

//   const handleLogin = (data) => {
//     const isEmail = !data.username.startsWith("@");

//     if (isEmail) {
//       let isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.username);
//       if (!isValidEmail) {
//         toast.error("Please enter valid email id");
//         return;
//       }
//     }

//     const loginData = isEmail
//       ? { email: data.username, password: data.password }
//       : { username: data.username.substr(1), password: data.password };

//     dispatch(login(loginData));
//   };

//   return (
//     <div className="  h-screen w-full overflow-y-auto dark:bg-[#121212] dark:text-white bg-white text-black    ">
//       <div className="  border-2 border-red-300 dark:border-none  rounded-xl  p-5 mx-auto my-28 flex w-full max-w-sm flex-col px-4  " >
//         <div className="mx-auto inline-block w-16 ">
//           <Logo />
//         </div>
//         <div className="mb-2 mt-2 w-full text-center text-2xl font-semibold uppercase">
//           Login to your Account
//         </div>
//         {/* <h6 className="mx-auto text-2xl my-3">Login to your Account</h6> */}
//         <form
//           onSubmit={handleSubmit(handleLogin)}
//           className="mx-auto mt-4 flex w-full max-w-sm flex-col px-4 "
//         >
//           <Input
//             label="Username or Email address"
//             required
//             placeholder="use @ for username"
//             {...register("username", { required: true })}
//           />
//           {errors.username?.type === "required" && (
//             <span className="text-red-500 mt-1">*username or email is required</span>
//           )}
//           <Input
//             label="Password"
//             labelClassName="mt-5"
//             type="password"
//             required
//             placeholder="Enter the Password"
//             {...register("password", { required: true })}
//           />
//           {errors.password?.type === "required" && (
//             <span className="text-red-500 mt-1">*password is required</span>
//           )}
//           <Button type="submit" disabled={loading} className="mt-5 disabled:cursor-not-allowed bg-red-500 text-white rounded-full hover:bg-red-600 dark:hover:bg-[#ae7aff] dark:bg-[#883eff]  ">
//             {loading ? <span>{icons.loading}</span> : "Sign in"}
//           </Button>
//         </form>
//         <h6 className="mx-auto text-md mt-4">
//           Don't have an Account yet?{" "}
//           <Link to={"/signup"} className="font-semibold text-blue-600 hover:text-blue-400">
//             Sign up now
//           </Link>
//         </h6>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../app/Slices/authSlice.js";
import { Logo, Input, Button } from "../index.js";
import { Link, useNavigate } from "react-router-dom";
import { icons } from "../../assets/icons.jsx";
import { toast } from "react-toastify";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, status } = useSelector(({ auth }) => auth);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (status) navigate("/");
  }, []);

  const handleLogin = (data) => {
    const isEmail = !data.username.startsWith("@");

    if (isEmail) {
      let isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.username);
      if (!isValidEmail) {
        toast.error("Please enter valid email id");
        return;
      }
    }

    const loginData = isEmail
      ? { email: data.username, password: data.password }
      : { username: data.username.substr(1), password: data.password };

    dispatch(login(loginData));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen w-full overflow-y-auto dark:bg-[#121212] dark:text-white bg-white text-black">
      <div className="border-2 border-red-300 dark:border-none rounded-xl p-5 mx-auto my-28 flex w-full max-w-sm flex-col px-4">
        <div className="mx-auto inline-block w-16">
          <Logo />
        </div>
        <div className="mb-2 mt-2 w-full text-center text-2xl font-semibold uppercase">
          Login to your Account
        </div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="mx-auto mt-4 flex w-full max-w-sm flex-col px-4"
        >
          <Input
            label="Username or Email address"
            required
            placeholder="use @ for username"
            {...register("username", { required: true })}
          />
          {errors.username?.type === "required" && (
            <span className="text-red-500 mt-1">*username or email is required</span>
          )}
          <div className="relative">
            <Input
              label="Password"
              labelClassName="mt-5"
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter the Password"
              {...register("password", { required: true })}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-[80%] transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? icons.eye : icons.eyeOff}
            </button>
          </div>
          {errors.password?.type === "required" && (
            <span className="text-red-500 mt-1">*password is required</span>
          )}
          <Button
            type="submit"
            disabled={loading}
            className="mt-5 disabled:cursor-not-allowed bg-red-500 text-white rounded-full hover:bg-red-600 dark:hover:bg-[#ae7aff] dark:bg-[#883eff]"
          >
            {loading ? <span>{icons.loading}</span> : "Sign in"}
          </Button>
        </form>
        <h6 className="mx-auto text-md mt-4">
          Don't have an Account yet?{" "}
          <Link to={"/signup"} className="font-semibold text-blue-600 hover:text-blue-400">
            Sign up now
          </Link>
        </h6>
      </div>
    </div>
  );
}

export default Login;