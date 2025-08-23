import iconSuccess from "../../assets/icon-success.svg";
import { Button } from "../button/Button";

export const Suscribe = ({ setFakeSend }: { setFakeSend: Function }) => {
  return (
    <div className="bg-white flex flex-col rounded-[36px] p-16 w-[504px]">
      <div className=" flex flex-col justify-between">
        <div className="flex flex-col justify-between">
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

        <Button
          handleFakeSend={() => {
            setFakeSend(false);
          }}
          text="Dismiss message"
        />
      </div>
    </div>
  );
};
