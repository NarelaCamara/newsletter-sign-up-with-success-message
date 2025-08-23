import { useEffect, useState } from "react";
import { ResponsiveSignUpImage } from "../responsiveSignUpImage/ResponsiveSignUpImage";
import { Checklist } from "../checklist/Checklist";
import { Input } from "../input/Input";

enum State_Email {
  No_State = "1",
  No_Valid = "2",
  Valid = "3",
}

export const Login = ({
  setFakeSend,
  fakeSend,
}: {
  setFakeSend: Function;
  fakeSend: boolean;
}) => {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(State_Email.No_State);

  useEffect(() => {
    setValid(State_Email.No_State);
    setEmail("");
  }, [fakeSend]);

  const handleValid = (value: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const result = emailRegex.test(value)
      ? State_Email.Valid
      : State_Email.No_Valid;
    console.log("result", result);

    setValid(result);
  };

  return (
    <div className="bg-white md:border-0  md:rounded-[36px] max-md:w-[327px] max-md:h-[100vh] md:p-10">
      <div className="pb-10 flex flex-col lg:flex-row-reverse">
        <ResponsiveSignUpImage />

        <div className="flex flex-col  md:py-6 max-md:w-[327px]">
          <h1 className="text-[Roboto] text-[40px] text-[#242742] font-semibold">
            Stay updated!
          </h1>
          <p className="text-[Roboto] text-[16px] color-[#242742] font-medium py-6">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <Checklist />
          <Input
            error={valid === State_Email.No_Valid}
            email={email}
            setEmail={setEmail}
            handleValid={handleValid}
          />
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
      </div>
    </div>
  );
};
