import iconSuccess from "../../assets/icon-success.svg";

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const Suscribe = ({ setFakeSend }: { setFakeSend: Function }) => {
  return (
    <div className="bg-white flex flex-col justify-between pb-10 md:p-0.50 md:p-10">
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
            setFakeSend(false);
          }}
          className="w-full bg-[#242742] p-4 mt-6 rounded-lg"
        >
          <p className="text-[Roboto] text-[16px] text-white font-medium  ">
            Dismiss message
          </p>
        </button>
      </div>
    </div>
  );
};
