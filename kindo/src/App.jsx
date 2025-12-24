import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SplashScreen from "@components/SplashScreen";
import Layout from "@components/Layout";
import Home from "@pages/Home";
import About from "@pages/About";
import Resume from "@pages/Resume";
import Projects from "@pages/Projects";
import Contact from "@pages/Contact";
import NotFound from "@pages/NotFound";
import ScrollToTop from "@components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative">
          {/* Simple implementation - this works! */}
          {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
          
          {splashDone && (
            <>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="resume" element={<Resume />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
              
              {/* Scroll to Top Component - Available on all pages */}
              <ScrollToTop />
            </>
          )}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}