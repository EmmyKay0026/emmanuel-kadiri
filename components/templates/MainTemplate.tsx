import React from "react";
import NavBar from "../organism/NavBar";
import CustomCursor from "../atoms/cursor";
import LastCTA from "../organism/LastCTA";
// import NavBar from "@/organism/NavBar";
// import NavBar from "../organism/NavBar";
// import Header from "../Organisms/NavNew";
// import Footer from "../organism/Footer";

type Template = {
  header?: React.ReactElement;
  footer?: React.ReactElement;
  children: React.ReactNode;
};
export default function MainTemplates({ header, children, footer }: Template) {
  return (
    <main className="relative bg-accent dark:bg-secondary">
      {header ? header : <NavBar />}
      {children}
      {footer ? footer : <LastCTA />}
      <CustomCursor />
    </main>
  );
}
