import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MailOutlined,
  DiscordOutlined,
  GoogleOutlined,
  UserOutlined,
  LockOutlined,
  CheckOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { Leaf, School } from "lucide-react";

const Login = () => {
  const [auth, setAuth] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setAuth(!auth);
  };

  const [forgotPassword, setForgotPassword] = useState(false);
  const handleClick2 = (e) => {
    e.preventDefault();
    setForgotPassword(!forgotPassword);
  };

  const navigate = useNavigate();

  const navigateSignUp = () => {
    navigate("/");
  };

  const navigateHome = () => {
    navigate("/home");
  };

  const navigateLoading = () => {
    navigate("/loading");
  };

  return (
    <div className="flex h-screen text-[#F5F5DC]">
      {auth && (
        <div className="fixed flex w-full h-screen z-[99] bg-black bg-opacity-50 items-center justify-center">
          <div className="relative flex flex-col w-1/3 h-1/4 rounded-xl bg-white text-black">
            <div
              className="absolute w-full p-4 font-bold text-right"
              onClick={handleClick}
            >
              X
            </div>
            <div className="flex flex-col w-full h-full items-center justify-center">
              <div className="text-2xl px-2 font-bold text-center">
                A 2FA code has been sent to your email!
              </div>

              <div className="w-2/3 items-center justify-center">
                <div className="">Enter your code here:</div>
                <div className="flex items-center justify-center">
                  <input
                    type="code"
                    id="code"
                    placeholder="Your code"
                    className="w-full h-full p-2 px-3 mr-1 rounded-md border border-gray-300 outline-none"
                  />
                  <button
                    className="flex p-2 h-full bg-brandGreen text-white rounded-3xl hover:bg-mediumGreen items-center justify-center"
                    onClick={navigateLoading}
                  >
                    <CheckOutlined className="text-white text-2xl"></CheckOutlined>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {forgotPassword && (
        <div className="fixed flex w-full h-screen z-[99] bg-black bg-opacity-50 items-center justify-center">
          <div className="relative flex flex-col w-1/3 h-1/4 rounded-xl bg-white text-black">
            <div
              className="absolute w-full p-4 font-bold text-right"
              onClick={handleClick2}
            >
              X
            </div>
            <div className="flex flex-col w-full h-full items-center justify-center">
              <div className="text-2xl font-bold px-2 text-center">
                We sent an email to help you recover your password!
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative w-3/5 pr-4 h-full bg-brandGreen">
        <img className="w-full h-2/3" src="/src/assets/login-cover.jpg" />
        <div className="flex w-full h-1/3 px-10">
          <img className="w-1/2 h-full" src="/src/assets//branchOUT-Logo.png" />
          <div className="w-1/2 mt-auto text-right mb-4">
            <div className="text-[60px] font-bold">branchOUT</div>
            <div className="text-[28px]">grow your network</div>
          </div>
        </div>
      </div>

      <div className="w-2/5 bg-white h-screen">
        <div className="h-full">
          <div className="flex h-full pt-20 flex-col w-full ">
            <div className="flex flex-col bg-brandGreen w-full h-1/5 items-center justify-center">
              <div className="text-[60px] font-bold">Welcome Back!</div>
              <div className="text-[25px]">
                Enter your login information below:
              </div>
            </div>
            <form
              action=""
              className="flex h-4/5 pt-10 w-full flex-col items-center  text-black"
            >
              <div className=" flex flex-col w-4/5 h-full items-center justify-center text-left">
                <div className="w-full">
                  <div className="">Username</div>
                  <input
                    type="text"
                    id="username"
                    placeholder="Your Username"
                    className="w-full p-2 px-3 mr-1 rounded-md mb-4 border border-gray-300 outline-none"
                  />
                </div>

                <div className="w-full">
                  <div>Password</div>
                  <input
                    type="password"
                    id="password"
                    placeholder="Your password"
                    className="w-full p-2 px-3 rounded-md mb-4 border border-gray-300 outline-none"
                  />
                  <p
                    className="cursor-pointer text-right"
                    onClick={handleClick2}
                  >
                    Forgot your password?
                  </p>
                </div>

                <div className="w-2/5 flex -center">
                  <button
                    className="w-full my-2 p-2 bg-brandGreen text-white rounded-3xl hover:bg-mediumGreen"
                    onClick={handleClick}
                  >
                    Continue
                  </button>
                </div>
                <p className="cursor-pointer" onClick={navigateSignUp}>
                  Don't have an account?
                </p>
              </div>

              <div className="flex flex-row items-center mt-auto mb-4 justify-center text-gray-500">
                <QuestionCircleFilled />
                <p className="pl-2">Need help or support</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
