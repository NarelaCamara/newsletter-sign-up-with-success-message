import "./App.css";
import illustrationSignUpMobile from "./assets/illustration-sign-up-mobile.svg";
import iconSuccess from "./assets/icon-success.svg";
import iconList from "./assets/icon-list.svg";
import { useState } from "react";

//import illustrationSignUpTablet from "./assets/illustration-sign-up-tablet.svg";
//import illustrationSignUDesktop from "./assets/illustration-sign-up-desktop.svg";

function App() {
  enum State_Email {
    No_State,
    No_Valid,
    Valid,
  }
  const [valid, setValid] = useState(State_Email.No_State);
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="flex items-start justify-center min-h-screen">
        {valid !== State_Email.Valid && (
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

              {valid === State_Email.No_Valid && (
                <span className="text-[Roboto] text-[12px] text-[#FF6155]  font-medium p-1">
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
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={() => {
                const emailRegex =
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

                const result =
                  email === ""
                    ? State_Email.No_State
                    : emailRegex.test(email)
                    ? State_Email.Valid
                    : State_Email.No_Valid;
                setValid(result);
              }}
              className="w-full bg-[#242742] p-4 mt-6 rounded-lg"
            >
              <p className="text-[Roboto] text-[16px] text-white font-medium">
                Subscribe to monthly newsletter
              </p>
            </button>
          </div>
        )}
        {valid === State_Email.Valid && (
          <div className="flex flex-col justify-between py-10 w-[327px]  h-[100vh]">
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
    </>
  );
}

export default App;
