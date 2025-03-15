import Slider from "react-slick";
import sliderData from "../../data/slider";
import styles from "./styles.module.css";
function Slidersection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  return (
    <section className="mb-16">
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt="poster"
              className={`${styles.slider_container} w-full lg:h-[100vh] md:h-[75vh] sm:h-[55vh] h-[45vh] object-cover`}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Slidersection;
