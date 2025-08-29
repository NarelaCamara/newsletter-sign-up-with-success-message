import { useEffect, useRef } from "react";
import iconList from "../../assets/icon-list.svg";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export const Checklist = () => {
  const checkList = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    gsap.set(checkList.current, { opacity: 1 });

    if (checkList.current) {
      gsap.registerPlugin(SplitText);

      // Crea un selector scoped al contenedor
      const q = gsap.utils.selector(checkList.current);

      // Selecciona todos los <p> dentro de los <li>
      const paragraphs = q("li p");

      const split = SplitText.create(paragraphs, { type: "words,chars" });
      //now animate each character into place from 20px below, fading in:
      gsap.from(split.chars, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.01,
      });
    }
  }, []);

  return (
    <ul ref={checkList} className="py-6">
      <li className="flex flex-row items-start p-0.5">
        <img src={iconList} alt="icon-list" className="pr-4 leading-[150%]" />
        <p className="text-[Roboto] text-[16px] text-[#242742] font-medium  ">
          Product discovery and building what matters
        </p>
      </li>
      <li className="flex flex-row items-start p-0.5">
        <img src={iconList} alt="icon-list" className="pr-4 leading-[150%]" />
        <p className="text-[Roboto] text-[16px] text-[#242742] font-medium  ">
          Measuring to ensure updates are a success
        </p>
      </li>
      <li className="flex flex-row items-start p-0.5">
        <img src={iconList} alt="icon-list" className="pr-4 leading-[150%]" />
        <p className="text-[Roboto] text-[16px] text-[#242742] font-medium  ">
          And much more!
        </p>
      </li>
    </ul>
  );
};
