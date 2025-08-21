import "./App.css";
import illustrationSignUpMobile from "./assets/illustration-sign-up-mobile.svg";

//import illustrationSignUpTablet from "./assets/illustration-sign-up-tablet.svg";
//import illustrationSignUDesktop from "./assets/illustration-sign-up-desktop.svg";

function App() {
  return (
    <>
      <div className="flex items-start justify-center min-h-screen">
        <div className="bg-white w-[390px]">
          <img
            src={illustrationSignUpMobile}
            alt="illustration-sign-up-mobile"
          />
          <div className="flex flex-col py-10">
            <h1 className="text-[Roboto] text-[40px] text-[#242742] font-semibold">
              Stay updated!
            </h1>

            <p className="text-[Roboto] text-[16px] color-[#242742] font-medium py-6">
              Join 60,000+ product managers receiving monthly updates on:
            </p>

            <ul>
              <li className=" list-image-icon-list text-[Roboto] text-[16px] text-[#242742] font-medium">
                Product discovery and building what matters
              </li>
              <li className=" list-image-icon-list text-[Roboto] text-[16px] text-[#242742] font-medium">
                Measuring to ensure updates are a success
              </li>
              <li className=" list-image-icon-list text-[Roboto] text-[16px] text-[#242742] font-medium">
                And much more!
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <span className="text-[Roboto] text-[12px] text-[#242742] font-medium">
              Email address
            </span>
            <input
              type="text"
              className="w-full p-4 text-[Roboto] text-[16px] text-[#949494]"
              value={"email@company.com"}
            />
            <button className="w-full bg-[#242742] p-4 mt-6">
              <p className="text-[Roboto] text-[16px] text-white font-medium">
                Subscribe to monthly newsletter
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
