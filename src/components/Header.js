import React, { useEffect } from "react";
import gsap from "gsap";
import SplitText from "../utils/Split3.min";

const Header = () => {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <section className="header-container" id="intro" data-scroll-section>
      <ul className="header-menu">
        <li>145</li>
        <li>Jerseyville rd,</li>
        <li>Brantford, ON</li>
      </ul>
      <h1 id="header-text">History awaits</h1>
    </section>
  );
};

export default Header;
