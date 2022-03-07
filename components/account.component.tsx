import AccountMenu from "./account-menu.component";

const Account = () => {
  return (
    <div className="text-slate-700 min-h-content w-full">
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-1 w-full h-full flex items-start justify-center">
          <AccountMenu />
        </div>
        <div className="col-span-1 md:col-span-3"></div>
      </div>
    </div>
  );
};

export default Account;
