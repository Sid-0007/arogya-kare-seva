
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-swasthya-light/30">
      <Navbar />
      <main className="flex-grow animate-fade-in">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
