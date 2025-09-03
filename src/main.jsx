// filepath: c:\Users\mucru\Desktop\portifolio\portifolio\src\main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Services from "./pages/Services/services";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <>
      <Home/>
      <About/>
      <Services/>
    </>
  );
} else {
  console.error("Elemento #root não encontrado no DOM.");
}