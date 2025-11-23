import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";

export interface AppLayoutV2Props {
  children: React.ReactNode;
}

export const AppLayoutV2 = ({ children }: AppLayoutV2Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
