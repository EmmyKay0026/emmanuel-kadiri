import React from "react";
import NavBar from "../organism/NavBar";
import CustomCursor from "../atoms/cursor";
// import NavBar from "@/organism/NavBar";
// import NavBar from "../organism/NavBar";
// import Header from "../Organisms/NavNew";
// import Footer from "../organism/Footer";

type Template = {
  header?: React.ReactElement;
  footer?: React.ReactElement;
  children: React.ReactNode;
};
export default function MainTemplates({ header, children }: Template) {
  return (
    <main className="relative">
      {header ? header : <NavBar />}
      {children}
      {/* {footer ? footer : <Footer />} */}
      <CustomCursor />
    </main>
  );
}
