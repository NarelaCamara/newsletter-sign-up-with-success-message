import iconList from "../../assets/icon-list.svg";

export const Checklist = () => {
  return (
    <ul className="py-6">
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
