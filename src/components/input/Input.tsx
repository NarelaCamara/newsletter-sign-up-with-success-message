export const Input = ({
  error,
  email,
  setEmail,
  handleValid,
}: {
  error: boolean;
  email: string;
  setEmail: Function;
  handleValid: Function;
}) => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <span className="text-[Roboto] text-[12px] text-[#242742] font-medium p-0.5">
          Email address
        </span>

        {error && (
          <span className="text-[Roboto] text-[12px] text-[#FF6155]  font-medium p-0.5">
            Valid email required
          </span>
        )}
      </div>
      <input
        type="text"
        value={email}
        className={`w-full p-4 text-[Roboto] text-[16px]  rounded-lg border border-solid  ${
          error
            ? "text-[#FF6155]  bg-[#FFE7E6] border-[#FF6155]"
            : "text-[#949494] border-[#949494]"
        } `}
        placeholder={"email@company.com"}
        onChange={(e) => {
          e.preventDefault();
          setEmail(e.target.value);
          handleValid(e.target.value);
        }}
      />
    </>
  );
};
