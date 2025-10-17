import React from "react";
import GridContainer from "../components/defaults/GridContainer";
import SideBar from "../components/nav/Sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen">
      <GridContainer cols={12}>
      <SideBar/>
        <div className="col-span-10 bg-blue-200">
          the rest of the app
          {children}
        </div>
      </GridContainer>
    </main>
  );
};

export default RootLayout;
