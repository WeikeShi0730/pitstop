import React from "react";
import { CurrentUserType } from "../interfaces/index";
import UpdatePassword from "./update-password.component";

const AccountOverview = ({ currentUser }: CurrentUserType) => {
  return (
    <div className="m-10 flex flex-col w-full">
      <div className="w-fit flex justify-start text-slate-700 text-xl py-1 border-b border-slate-700">
        Overview
      </div>
      <div className="my-5 text-3xl flex justify-center">
        Hi, {currentUser?.displayName}!
      </div>
      <div className="my-5">
        <UpdatePassword currentUser={currentUser} />
      </div>
    </div>
  );
};

export default AccountOverview;
