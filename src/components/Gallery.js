import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import cn from "classnames";
import useOnScreen from "../hooks/useOnScreen";
import { GalleryData } from "../utils/GalleryData";

const GalleryItem = ({ src, title, updateActiveImage, index }) => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onScreen, index]);

  return (
    <div
      ref={ref}
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
    >
      <div></div>
      <div className={"gallery-item"}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div></div>
    </div>
  );
};

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(1);
  const ref = useRef(null);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap">
      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{GalleryData.length}</span>
          <h2>Drag to view</h2>
        </div>

        <Swiper
          direction={"horizontal"}
          slidesPerView={1.5}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {GalleryData.map((image, index) => (
            <SwiperSlide key={index}>
              <GalleryItem
                key={index}
                index={index}
                {...image}
                updateActiveImage={handleUpdateActiveImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
