import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import cn from "classnames";
import SplitText from "../utils/Split3.min";
import useOnScreen from "../hooks/useOnScreen";
import Divider from "./Divider";

const About = () => {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
      });
    }
  }, [reveal]);

  return (
    <section
      className={cn("about-section", { "is-reveal": reveal })}
      data-scroll-section
    >
      <Divider title="about" />
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        Welcome to 142 Jerseyville Road, where classic country and effortless
        elegance cross paths. The twenty-three-acre estate offers plenty of room
        for you and your family to grow. The bright kitchen and dining room are
        perfect for entertaining, along with the grand family room set around
        the brick fireplace. Four good-sized bedrooms, and a master with a
        four-piece ensuite, complete with glass shower and soaker tub. Outside
        the charm continues with a double-deck patio, in ground swimming pool
        and four car garage. This ninetieth century farmhouse is ready for a new
        life with the help of your personal touch.
      </p>
    </section>
  );
};

export default About;
