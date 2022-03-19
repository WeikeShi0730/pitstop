import React from "react";

const AccountOverviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto">
      <div className="text-slate-700 bg-slate-100 bg-opacity-30 rounded-lg py-5 px-5 shadow-md hover:shadow-slate-500 transition-all ease-in-out duration-200">
        <div className="flex flex-col items-center">{children}</div>
      </div>
    </div>
  );
};

export default AccountOverviewLayout;
