import { useEffect, useRef } from "react";
import iconSuccess from "../../assets/icon-success.svg";
import { Button } from "../button/Button";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export const Suscribe = ({ setFakeSend }: { setFakeSend: Function }) => {
  const container = useRef(null);

  const icon = useRef(null);

  useEffect(() => {
    gsap.to(icon.current, {
      duration: 2.5,
      ease: "elastic.out(1,0.3)",
      y: 20,

      yoyo: true, // vuelve a la posición original
    });
  }, []);

  const title = useRef(null);
  const paragraphs = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText);

    gsap.set(title.current, { opacity: 1 });
    gsap.set(paragraphs.current, { opacity: 1 });

    gsap.registerPlugin(SplitText);

    const split = SplitText.create(title.current, { type: "words,chars" });
    const paragraphs_split = SplitText.create(paragraphs.current, {
      type: "chars",
    });
    //now animate each character into place from 20px below, fading in:
    gsap.from(split.chars, {
      y: 20,
      autoAlpha: 0,
      stagger: 0.01,
      yoyo: true, // vuelve a la posición original
    });

    gsap.from(paragraphs_split.chars, {
      y: 20,
      autoAlpha: 0,
      stagger: 0.01,
      yoyo: true, // vuelve a la posición original
    });
  }, []);

  return (
    <div
      ref={container}
      className="bg-white flex flex-col rounded-[36px] p-16 w-[504px]"
    >
      <div className=" flex flex-col justify-between">
        <div className="flex flex-col justify-between">
          <img
            src={iconSuccess}
            alt="icon-success"
            className="w-16"
            ref={icon}
          />
          <h1 ref={title} className="text-[Roboto] text-[40px] font-bold py-8">
            Thanks for subscribing!
          </h1>
          <p
            ref={paragraphs}
            className="text-[Roboto] text-[16px] text-[#242742] font-normal"
          >
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
