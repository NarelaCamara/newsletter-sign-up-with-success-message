import gsap from "gsap";
import { useEffect, useRef } from "react";

export const Button = ({
  handleFakeSend,
  text,
}: {
  handleFakeSend: Function;
  text: string;
}) => {
  const button = useRef(null);

  useEffect(() => {
    gsap.to(button.current, {
      duration: 2.5,
      ease: "elastic.out(1,0.3)",
      y: 20,
      
      yoyo: true, // vuelve a la posición original
    });
  }, []);

  return (
    <button
      ref={button}
      onClick={() => handleFakeSend()}
      className="w-full bg-[#242742] p-4 mt-6 rounded-lg"
    >
      <p className="text-[Roboto] text-[16px] text-white font-medium">{text}</p>
    </button>
  );
};
