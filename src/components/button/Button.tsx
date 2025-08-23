export const Button = ({
  handleFakeSend,
  text,
}: {
  handleFakeSend: Function;
  text: string;
}) => {
  return (
    <button
      onClick={() => handleFakeSend()}
      className="w-full bg-[#242742] p-4 mt-6 rounded-lg"
    >
      <p className="text-[Roboto] text-[16px] text-white font-medium">{text}</p>
    </button>
  );
};
