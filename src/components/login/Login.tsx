import { useEffect, useState } from "react";
import { ResponsiveSignUpImage } from "../responsiveSignUpImage/ResponsiveSignUpImage";
import { Checklist } from "../checklist/Checklist";
import { Input } from "../input/Input";
import { Button } from "../button/Button";

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

  const handleFakeSend = () => {
    setFakeSend(valid === State_Email.Valid);
  };

  return (
    <div className="bg-white min-sm:border-0 min-w-[375px] min-sm:rounded-[36px] min-sm:p-10  lg:p-8 max-sm:max-w-[375px] ">
      <div className="flex flex-col lg:flex-row-reverse">
        <ResponsiveSignUpImage />
        <div className="flex flex-col lg:w-[448px] lg:justify-center lg:pr-16">
          <h1 className="text-[Roboto] text-[40px] min-sm:text-[56px] text-[#242742] font-semibold">
            Stay updated!
          </h1>
          <p className="text-[Roboto] text-[16px] color-[#242742] font-medium pt-6">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <Checklist />
          <Input
            error={valid === State_Email.No_Valid}
            email={email}
            setEmail={setEmail}
            handleValid={handleValid}
          />
          <Button
            handleFakeSend={handleFakeSend}
            text="Subscribe to monthly newsletter"
          />
        </div>
      </div>
    </div>
  );
};
