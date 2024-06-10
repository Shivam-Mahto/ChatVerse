import React from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import phone from "../assets/phone.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-center w-screen p-4 overflow-hidden gap-2 bg-yellow-200">
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className="text-3xl md:text-4xl font-bold w-[80%] text-center">
          Stay Connected with your friends and family
        </h1>
        <h1 className="font-semibold text-xl flex items-center justify-center gap-2">
          <IoShieldCheckmark color="#32c75f" />
          Secure, private messaging
        </h1>
        <button
          onClick={() => navigate("/login")}
          className="bg-black text-white rounded-full p-4 font-bold "
        >
          Get Started
        </button>
      </div>
      <div className="flex">
        {/* <img className="-z-10 h-[70vh] right-0 bottom-10" src={peep2}></img> */}
        <img
          className="hidden sm:block border-2 border-black rounded-[2rem] h-[70vh] lg:h-[90vh] left-0 bottom-0"
          src={phone}
        ></img>
      </div>
    </div>
  );
};

export default Home;
