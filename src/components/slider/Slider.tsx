import Slider from "react-slick";
import sliderData from "../../data/slider";

function Slidersection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <section className="mb-8">
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt="poster"
              className="w-full h-[100vh] object-cover"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Slidersection;
