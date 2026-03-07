import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewspaperEntrance from "./pages/Test";

export default function App() {
  return (
    <BrowserRouter>
   
        <Routes>
          <Route path="/" element={<NewspaperEntrance />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

    </BrowserRouter>
  );
}