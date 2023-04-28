import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Project />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div className="App">
        <div className="header">
          <Navbar
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
        {renderPage()}
      </div>
      <Footer />
    </>
  );
}
