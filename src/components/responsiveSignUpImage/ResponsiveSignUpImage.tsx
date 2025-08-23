import illustrationSignUpMobile from "../../assets/illustration-sign-up-mobile.svg";
import illustrationSignUpTablet from "../../assets/illustration-sign-up-tablet.svg";
import illustrationSignUDesktop from "../../assets/illustration-sign-up-desktop.svg";

export const ResponsiveSignUpImage = () => {
  return (
    <div>
      <img
        src={illustrationSignUpMobile}
        alt="illustration-sign-up-mobile"
        className="max-md:block hidden"
      />

      <img
        src={illustrationSignUpTablet}
        alt="illustration-sign-up-tablet"
        className="md:block hidden lg:hidden w-[528px]"
      />

      <img
        src={illustrationSignUDesktop}
        alt="illustration-sign-up-desktop"
        className="lg:block hidden"
      />
    </div>
  );
};
