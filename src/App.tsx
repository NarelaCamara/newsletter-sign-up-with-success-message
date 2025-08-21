import "./App.css";
import illustrationSignUpMobile from "./assets/illustration-sign-up-mobile.svg";

import iconList from "./assets/icon-list.svg";
import { useState } from "react";

//import illustrationSignUpTablet from "./assets/illustration-sign-up-tablet.svg";
//import illustrationSignUDesktop from "./assets/illustration-sign-up-desktop.svg";

function App() {
  const [valid, setValid] = useState(false);

  return (
    <>
      <div className="flex items-start justify-center min-h-screen">
        <div className="bg-white w-[390px]">
          <img
            src={illustrationSignUpMobile}
            alt="illustration-sign-up-mobile"
          />
          <div className="flex flex-col py-10 w-[327px]">
            <h1 className="text-[Roboto] text-[40px] text-[#242742] font-semibold">
              Stay updated!
            </h1>

            <p className="text-[Roboto] text-[16px] color-[#242742] font-medium py-6">
              Join 60,000+ product managers receiving monthly updates on:
            </p>

            <ul>
              <li className="flex flex-row items-start p-2">
                <img
                  src={iconList}
                  alt="icon-list"
                  className="pr-4 leading-[150%]"
                />
                <p className="text-[Roboto] text-[16px] text-[#242742] font-medium  ">
                  Product discovery and building what matters
                </p>
              </li>
              <li className="flex flex-row items-start p-2">
                <img
                  src={iconList}
                  alt="icon-list"
                  className="pr-4 leading-[150%]"
                />
                <p className="text-[Roboto] text-[16px] text-[#242742] font-medium  ">
                  Measuring to ensure updates are a success
                </p>
              </li>
              <li className="flex flex-row items-start p-2">
                <img
                  src={iconList}
                  alt="icon-list"
                  className="pr-4 leading-[150%]"
                />
                <p className="text-[Roboto] text-[16px] text-[#242742] font-medium  ">
                  And much more!
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-row justify-between">
            <span className="text-[Roboto] text-[12px] text-[#242742] font-medium p-1">
              Email address
            </span>

            {!valid && (
              <span className="text-[Roboto] text-[12px] text-[#FF6155]  font-medium p-1">
                Valid email required
              </span>
            )}
          </div>
          <input
            type="text"
            className={`w-full p-4 text-[Roboto] text-[16px]  rounded-lg border border-solid  ${
              valid
                ? "text-[#949494] border-[#949494]"
                : "text-[#FF6155]  bg-[#FFE7E6] border-[#FF6155]"
            } `}
            placeholder={"email@company.com"}
          />
          <button
            onClick={() => setValid(!valid)}
            className="w-full bg-[#242742] p-4 mt-6 rounded-lg"
          >
            <p className="text-[Roboto] text-[16px] text-white font-medium">
              Subscribe to monthly newsletter
            </p>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
