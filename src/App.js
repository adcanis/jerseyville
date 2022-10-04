import { useState, useEffect, useRef } from "react";
import useLocoScroll from "./hooks/useLocoScroll";
import Cursor from "./components/Cursor";
import Featured from "./components/Featured";
import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery";
import "./theme/main.scss";
import Footer from "./components/Footer";

function App() {
  const ref = useRef(null);
  const id = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    if (window.innerWidth <= 480) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, []);

  useLocoScroll(!isLoading);

  const clear = () => {
    window.clearInterval(id.current);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoading && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [isLoading]);

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
      {!isMobile && <Cursor />}
      <div
        className="main-container"
        id="main-container"
        data-scroll-container
        ref={ref}
      >
        <Header />
        <Featured />
        <About />
        <Gallery />
        <Footer />
        <div className="legal">
          <p>
            Brought to you by:
            <span>Seller's Choice Stockdale Realty Ltd</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
