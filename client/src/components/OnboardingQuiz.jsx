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

// this is a function that creates our Onboarding Quiz
const OnboardingQuiz = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/home");
  };

  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
              <div className="text-[60px] font-bold">User Onboarding</div>
              <div className="text-[25px]">Let us know about you!</div>
            </div>
            <form
              action=""
              className="flex h-4/5 pt-10 w-full flex-col items-center  text-black"
            >
              <div className=" flex flex-col w-4/5 h-full items-center justify-center text-left">
                <div className="w-full">
                  <div className="">Are you a Mentee or Mentor?</div>
                  <select
                    className="w-full p-2 px-3 rounded-md mb-4 border border-gray-300 outline-none"
                    id="userType"
                    value={selectedValue}
                    onChange={handleChange}
                  >
                    <option value="">Select option</option>
                    <option value="Mentor">Mentor</option>
                    <option value="Mentee">Mentee</option>
                  </select>
                </div>

                <div className="w-full">
                  <div>Major (if applicable)</div>
                  <input
                    type="major"
                    id="major"
                    placeholder="Your major"
                    className="w-full p-2 px-3 rounded-md mb-4 border border-gray-300 outline-none"
                  />
                </div>

                <div className="w-full">
                  <div>School or University (graduate from or attending)</div>
                  <input
                    type="school"
                    id="school"
                    placeholder="Your school"
                    className="w-full p-2 px-3 rounded-md mb-4 border border-gray-300 outline-none"
                  />
                </div>

                <div className="w-full">
                  <div>What do you seek the most from BranchOut</div>
                  <input
                    type="BranchOut"
                    id="Branchout"
                    placeholder="Your answer"
                    className="w-full p-2 px-3 rounded-md mb-4 border border-gray-300 outline-none"
                  />
                </div>

                <div className="w-full">
                  <div>Job or Profession</div>
                  <input
                    type="job"
                    id="job"
                    placeholder="Your answer"
                    className="w-full p-2 px-3 rounded-md mb-4 border border-gray-300 outline-none"
                  />
                </div>

                <div className="w-2/5 flex -center">
                  <button
                    className="w-full my-2 p-2 bg-brandGreen text-white rounded-3xl hover:bg-mediumGreen"
                    onClick={navigateHome}
                  >
                    Continue
                  </button>
                </div>
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

export default OnboardingQuiz;
