import React from "react";
import { CurrentUserType } from "../interfaces/index";

const AccountOverview = ({ currentUser }: CurrentUserType) => {
  return (
    <div className="m-10 flex flex-col w-full">
      <div className="w-fit flex justify-start text-slate-700 text-xl py-1 border-b border-slate-700">
        Overview
      </div>
      <div className="text-3xl flex justify-center">
        Hi, {currentUser?.displayName}!
      </div>
    </div>
  );
};

export default AccountOverview;
