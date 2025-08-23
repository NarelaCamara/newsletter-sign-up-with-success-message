import iconList from "../../assets/icon-list.svg";

import { useEffect, useState } from "react";
import { ResponsiveSignUpImage } from "../responsiveSignUpImage/ResponsiveSignUpImage";

enum State_Email {
  No_State = "1",
  No_Valid = "2",
  Valid = "3",
}

export const Login = ({
  setFakeSend,
  fakeSend,
}: {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  setFakeSend: Function;
  fakeSend: boolean;
}) => {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(State_Email.No_State);

  useEffect(() => {
    setValid(State_Email.No_State);
    setEmail("");
  }, [fakeSend]);

  return (
    <div className="bg-white md:border-0  md:rounded-[36px] max-md:w-[327px]  max-md:h-[100vh] md:p-10">
      <div className="flex flex-col lg:flex-row-reverse justify-between pb-10">
        <ResponsiveSignUpImage />

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
          value={email}
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
  );
};
