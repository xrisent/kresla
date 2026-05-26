export const CustomButton = ({ children }) => {
  return (
    <button className="!px-[38px] !py-[26px] rounded-[8px] shadow-[0_2px_2px_0_rgba\(0\,116\,212\,0\.06\)\,_0_5px_6px_0_rgba\(0\,116\,212\,0\.15\)\,_0_13px_15px_0_rgba\(0\,116\,212\,0\.24\)] bg-btn-bg text-white">
      {children}
    </button>
  );
};
