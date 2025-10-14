import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-2 bg-red-200">sidebar</div>
      <div className="col-span-10 bg-blue-200">
        the rest of the app
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
