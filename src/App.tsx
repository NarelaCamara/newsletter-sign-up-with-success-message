import "./App.css";
import illustrationSignUpMobile from "./assets/illustration-sign-up-mobile.svg";
import iconSuccess from "./assets/icon-success.svg";
import iconList from "./assets/icon-list.svg";
import { useState } from "react";

import illustrationSignUpTablet from "./assets/illustration-sign-up-tablet.svg";
//import illustrationSignUDesktop from "./assets/illustration-sign-up-desktop.svg";

function App() {
  enum State_Email {
    No_State = "1",
    No_Valid = "2",
    Valid = "3",
  }
  const [fakeSend, setFakeSend] = useState(false);
  const [valid, setValid] = useState(State_Email.No_State);
  const [email, setEmail] = useState("");

  console.log(fakeSend, valid, email);
  return (
    <div className="">
      <div className="flex items-start justify-center min-h-screen md:bg-[#242742]">
        <div className="md:border-0 bg-white md:rounded-[36px] max-md:w-[327px]  max-md:h-[100vh]">
          {!fakeSend && (
            <div className=" flex flex-col justify-between pb-10 md:p-0.50 md:p-10  ">
              <div className="">
                <img
                  src={illustrationSignUpMobile}
                  alt="illustration-sign-up-mobile"
                  className="max-md:block hidden"
                />

                <img
                  src={illustrationSignUpTablet}
                  alt="illustration-sign-up-tablet"
                  className="md:block hidden w-[528px] "
                />
                <div className="flex flex-col  md:py-6 max-md:w-[327px]">
                  <h1 className="text-[Roboto] text-[40px] text-[#242742] font-semibold">
                    Stay updated!
                  </h1>

                  <p className="text-[Roboto] text-[16px] color-[#242742] font-medium py-6">
                    Join 60,000+ product managers receiving monthly updates on:
                  </p>

                  <ul>
                    <li className="flex flex-row items-start p-0.5">
                      <img
                        src={iconList}
                        alt="icon-list"
                        className="pr-4 leading-[150%]"
                      />
                      <p className="text-[Roboto] text-[16px] text-[#242742] font-medium  ">
                        Product discovery and building what matters
                      </p>
                    </li>
                    <li className="flex flex-row items-start p-0.5">
                      <img
                        src={iconList}
                        alt="icon-list"
                        className="pr-4 leading-[150%]"
                      />
                      <p className="text-[Roboto] text-[16px] text-[#242742] font-medium  ">
                        Measuring to ensure updates are a success
                      </p>
                    </li>
                    <li className="flex flex-row items-start p-0.5">
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
                  <span className="text-[Roboto] text-[12px] text-[#242742] font-medium p-0.5">
                    Email address
                  </span>

                  {valid === State_Email.No_Valid && (
                    <span className="text-[Roboto] text-[12px] text-[#FF6155]  font-medium p-0.5">
                      Valid email required
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  className={`w-full p-4 text-[Roboto] text-[16px]  rounded-lg border border-solid  ${
                    valid !== State_Email.No_Valid
                      ? "text-[#949494] border-[#949494]"
                      : "text-[#FF6155]  bg-[#FFE7E6] border-[#FF6155]"
                  } `}
                  placeholder={"email@company.com"}
                  onChange={(e) => {
                    e.preventDefault();
                    setEmail(e.target.value);
                    const emailRegex =
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

                    const result = emailRegex.test(e.target.value)
                      ? State_Email.Valid
                      : State_Email.No_Valid;
                    console.log("result", result);
                    setValid(result);
                  }}
                />
              </div>
              <button
                onClick={() => {
                  setFakeSend(valid === State_Email.Valid);
                }}
                className="w-full bg-[#242742] p-4 mt-6 rounded-lg"
              >
                <p className="text-[Roboto] text-[16px] text-white font-medium">
                  Subscribe to monthly newsletter
                </p>
              </button>
            </div>
          )}
          {fakeSend && (
            <div className=" flex flex-col justify-between pb-10 md:p-0.50 md:p-10  ">
              <div className="flex flex-col justify-between">
                {" "}
                <img src={iconSuccess} alt="icon-success" className="w-16" />
                <h1 className="text-[Roboto] text-[40px] font-bold py-8">
                  Thanks for subscribing!
                </h1>
                <p className="text-[Roboto] text-[16px] text-[#242742] font-normal">
                  A confirmation email has been sent to{" "}
                  <span className="text-[Roboto] text-[16px] text-[#242742] font-medium">
                    ash@loremcompany.com
                  </span>
                  . Please open it and click the button inside to confirm your
                  subscription
                </p>
              </div>

              <button
                onClick={() => {
                  setValid(State_Email.No_State);
                  setEmail("");
                  setFakeSend(false);
                }}
                className="w-full bg-[#242742] p-4 mt-6 rounded-lg"
              >
                <p className="text-[Roboto] text-[16px] text-white font-medium  ">
                  Dismiss message
                </p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
