const Featured = () => {
  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout">
        <h6>Front Entrance</h6>
        <img
          src={process.env.PUBLIC_URL + "./images/jerseyville-front.jpg"}
          alt=""
          data-scroll
        />
      </div>
      <div className="featured-column-layout">
        <h6>Foyer</h6>
        <img
          src={
            process.env.PUBLIC_URL + "./images/jerseyville-frontentrance.jpg"
          }
          alt=""
          data-scroll
        />
      </div>
    </section>
  );
};

export default Featured;
