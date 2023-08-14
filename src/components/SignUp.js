import React, { useState } from "react";
import axios from 'axios'

export default function SignUp({ setModal }) {
  const [mailSign, showMailSign] = useState(true);
  const [signUp ,showSignUpPage] = useState(true)
  const [login ,showLoginPage] = useState(true)
  const [email, setEmail] = useState('')

  const handleInputChange = (event) => {
    setEmail(event.target.value)
    console.log(email);
  }

  const handleSubmit = () => {
    axios.post('/register',{email})
  }

  function onclose() {
    setModal(false);
  }

  const backIcon = () => {
    showMailSign(true);
    showSignUpPage(true)
    showLoginPage(true)
  };

  const showSignuUp = () => {
    showMailSign(false);
    showSignUpPage(false)
  };

  const handleLogin = () => {
    showLoginPage(false)
    showMailSign(false)
  }

  return (
    <div className="z-40 h-screen w-screen absolute top-0 flex justify-center items-center backdrop-brightness-50">
      <div className={`${mailSign ? `bg-white rounded-sm p-4` : `hidden`}`}>
        <div className="flex justify-end p-2 pt-3">
          <i onClick={onclose} class="fa-solid fa-x fa-xl cursor-pointer"></i>
        </div>
        <div className="flex justify-center items-center flex-col text-center">
          <img
            src="https://statics.olx.in/external/base/img/loginEntryPointPost.webp"
            className="w-20"
            alt="Banner"
          />
          <p className="text-cyan-900 font-semibold my-5">
            Help us become one of the safest places <br /> to buy and sell
          </p>
        </div>
        <div className="flex flex-col gap-3 my-5">
          <div className="relative flex-1 flex">
            <input
             onClick={showSignuUp} 
              type="text"
              placeholder="Continue with Email address"
              className="cursor-pointer flex-1 w-96 pl-10 py-3 border-2 border-cyan-950 rounded-md placeholder-cyan-900 font-semibold hover:border-4"
            />
            <div className="absolute top-3 left-3">
              <i class="fa-regular fa-envelope fa-lg"></i>
            </div>
          </div>
          <div className="relative flex flex-1">
            <input
              disabled
              type="text"
              placeholder="Continue with Google"
              className="cursor-pointer flex-1 pl-10 py-3 border-2 border-cyan-950 rounded-md placeholder-cyan-900 font-semibold hover:border-4"
            />
            <div className="absolute top-3 left-3">
              <i class="fa-brands fa-google fa-lg"></i>
            </div>
          </div>
        </div>
        <div>
          <p className="uppercase text-center font-semibold text-sm">or</p>
        </div>
        <div className="my-3">
          <h6 onClick={handleLogin} className="underline font-semibold text-center cursor-pointer">
            Login with Email
          </h6>
        </div>
        <div className="mt-20 text-center text-xs text-gray-500">
          <div>
            <p>All your personal details are safe with us.</p>
          </div>
          <div className="mt-4">
            <p>
              if you continue, you are accepting
              <span className="text-blue-500 cursor-pointer">
                OLX Terms and <br />
                Conditions and Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className={`${signUp ? `hidden` : `bg-white rounded-sm p-4`}`}>
        <div className="flex justify-between mt-3">
          <i
            onClick={backIcon}
            class="fa-solid fa-arrow-left fa-lg cursor-pointer"
          ></i>
          <i onClick={onclose} class="fa-solid fa-x fa-xl cursor-pointer"></i>
        </div>
        <div className="flex justify-center items-center flex-col text-center">
          <img
            src="https://www.olxgroup.com/wp-content/uploads/2023/01/OLX_Logo1.svg"
            className="w-24"
            alt="Banner"
          />
          <p className="text-cyan-900 font-bold text-xl my-5">
            Enter your Email address
          </p>
        </div>
        <div className="flex flex-col flex-1">
          <input
          value={email}
          onChange={handleInputChange}
            type="text"
            placeholder="Enter your Email address"
            className="border border-gray-600 rounded-md w-96 pl-2 py-2"
          />
        </div>
        <div className="flex flex-1 mt-16">
          <button className="bg-cyan-950 text-white py-2 font-bold rounded-sm flex-1" onClick={handleSubmit}>
            Next
          </button>
        </div>
        <div className="text-center text-gray-500 text-xs mt-2 mb-52">
          <p>
            Your contact number is never shared with external parties <br /> not
            do we use it to spam you in any way.
          </p>
        </div>
      </div>

      <div className={`${login ? `hidden` : `bg-white rounded-sm p-4`}`}>
        <div className="flex justify-between mt-3">
          <i
            onClick={backIcon}
            class="fa-solid fa-arrow-left fa-lg cursor-pointer"
          ></i>
          <i onClick={onclose} class="fa-solid fa-x fa-xl cursor-pointer"></i>
        </div>
        <div className="flex justify-center items-center flex-col text-center">
          <img
            src="https://www.olxgroup.com/wp-content/uploads/2023/01/OLX_Logo1.svg"
            className="w-24"
            alt="Banner"
          />
          <p className="text-cyan-900 font-bold text-xl my-5">
            Enter your Email address
          </p>
        </div>
        <div className="flex flex-col flex-1">
          <input
            type="text"
            placeholder="Email"
            className="border border-gray-600 rounded-md w-96 pl-2 py-2"
          />
        </div>
        <div className="mt-16 text-sm text-center">
          <p>if your are a new user please select any other login <br />option from previous page.</p>
        </div>
        <div className="flex flex-1 mt-16 ">
          <button className="bg-cyan-950 text-white py-2 font-bold rounded-sm flex-1">
            Next
          </button>
        </div>
        <div className="text-center text-gray-500 text-xs mt-2 mb-32">
          <p>
            Your Email is never shared with external parties not
            do we<br /> use it to spam you in any way.
          </p>
        </div>
      </div>
    </div>
  );
}
