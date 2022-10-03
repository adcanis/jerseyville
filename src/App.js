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
  const [timer, setTimer] = useState(3);

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
      <Cursor />
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
      </div>
    </>
  );
}

export default App;
