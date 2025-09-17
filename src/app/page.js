"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Product from "./components/Product";
import ContactUs from "./components/ContactUs";

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");
  const [searchTerm, setSearchTerm] = useState(""); // search state parent

  return (
    <div className="flex flex-col min-h-screen">
      <Header setActiveSection={setActiveSection} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="flex-grow">
        {activeSection === "home" && <Home />}
        {activeSection === "shop" && <Shop searchTerm={searchTerm} />}
        {activeSection === "product" && <Product />}
        {activeSection === "contact" && <ContactUs />}
      </main>

      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}
