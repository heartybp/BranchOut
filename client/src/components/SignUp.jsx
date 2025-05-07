import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MailOutlined,
  DiscordOutlined,
  GoogleOutlined,
  UserOutlined,
  LockOutlined,
  LockFilled,
  QuestionCircleFilled,
  MailFilled,
} from "@ant-design/icons";
import { Leaf, School } from "lucide-react";

const SignUp = () => {
  const navigate = useNavigate();

  const navigateLogIn = () => {
    navigate("/login");
  };

  const navigateHome = () => {
    navigate("/home");
  };

  const navigateOnBoardingQuiz = () => {
    navigate("/onBoardingQuiz");
  };

  return (
    <div className="flex h-screen text-[#F5F5DC]">
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
              <div className="text-[60px] font-bold">Create an Account!</div>
              <div className="text-[25px]">Enter your information below:</div>
            </div>
            <form
              action=""
              className="flex h-4/5 w-full flex-col items-center  text-black"
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

                <div className="w-full relative flex items-center space-x-4">
                  <div className="w-1/2">
                    <div>First Name</div>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      className="w-full p-2 px-3 mr-1 rounded-md mb-4 border border-gray-300 outline-none"
                    />
                  </div>
                  <div className="w-1/2">
                    <div>Last Name</div>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      className="w-full p-2 px-3 rounded-md mb-4 border border-gray-300 outline-none"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div>Email</div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full p-2 px-3 rounded-md mb-4 border border-gray-300 outline-none"
                  />
                </div>

                <div className="w-full">
                  <div>New Password</div>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="w-full p-2 px-3 rounded-md mb-4 border border-gray-300 outline-none"
                  />
                </div>

                <div className="w-full">
                  <div>Confirm Password</div>
                  <input
                    type="password"
                    id="passwordConfirm"
                    placeholder="Confirm Password"
                    className="w-full p-2 px-3 rounded-md mb-4 border border-gray-300 outline-none"
                  />
                </div>

                <div className="w-2/5 flex -center">
                  <button
                    className="w-full my-2 p-2 bg-brandGreen text-white rounded-3xl hover:bg-mediumGreen"
                    onClick={navigateOnBoardingQuiz}
                  >
                    Continue
                  </button>
                </div>

                <p className="cursor-pointer" onClick={navigateLogIn}>
                  Already have an account?
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

export default SignUp;
