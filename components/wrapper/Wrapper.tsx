import React from "react";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
