import './input.css';

//import packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import components/pages

import About from "./pages/common/About"
import Contact from "./pages/common/Contact"
import Hero from "./pages/common/Hero"
import HowItWorks from "./pages/common/HowItWorks"
import Page404 from "./pages/common/Page404"
import PrivacyPolicy from "./pages/common/PrivacyPolicy"
import Terms from "./pages/common/Terms"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='behind-the-scenes' element={<HowItWorks />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='terms' element={<Terms />} />

          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
