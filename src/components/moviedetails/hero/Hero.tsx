import { Link } from "react-router-dom";
import { IHeroprops } from "../../../interfaces";

function Hero({
  poster,
  title,
  dateReleased,
  vote,
  overview,
  genre,
  adult,
  langs,
  homepage,
}: IHeroprops) {
  return (
    <section className="h-auto lg:h-[75vh] bg-amber-400 w-full text-white">
      <div className="w-[90%] mx-auto py-[7.5vh] flex gap-12 flex-wrap lg:flex-nowrap justify-center">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt={title}
          className="w-[300px] h-[60vh] object-cover rounded-3xl"
          data-aos="fade-right"
        />
        <div className="ms-4 flex flex-col justify-around lg:h-auto h-[400px] text-center lg:text-left ">
          <h1
            className="lg:text-8xl sm:text-6xl text-4xl font-bold"
            data-aos="fade-left"
          >
            {title}
          </h1>
          <p
            className=" leading-[20px] truncate-4-lines"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            {overview}
          </p>
          <div className=" flex gap-4 sm:gap-8 flex-wrap lg:justify-start justify-center">
            <p data-aos="fade-up" data-aos-delay="400">
              {genre?.map((g) => g.name).join(", ")}
            </p>
            <p data-aos="fade-up" data-aos-delay="500">
              {adult ? "+18" : "+12"}
            </p>
            <p data-aos="fade-up" data-aos-delay="600" className="flex gap-2">
              <span>
                <img
                  src="/svgs/languages.svg"
                  alt="global languages"
                  className="w-6 h-6"
                />
              </span>
              {langs?.map((lan) => lan.english_name).join(", ")}
              {langs?.length === 0 && "English"}
            </p>
          </div>
          <div
            className="flex gap-8 lg:justify-start justify-center"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <time className="text-xl font-bold">
              {dateReleased?.slice(0, 4)}
            </time>
            <p className="text-xl font-bold">{vote?.toFixed(1)}/10</p>
          </div>
          <div
            className="flex gap-4 sm:gap-8 lg:justify-start justify-center"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            {homepage && (
              <Link to={homepage} target="_blank">
                <button className="bg-black text-lg sm:text-xl text-white py-2 px-6 rounded-xl font-medium cursor-pointer">
                  Watch Now
                </button>
              </Link>
            )}
            <Link
              to="/"
              className="bg-white text-black  text-lg sm:text-xl  py-2 px-6 rounded-xl font-medium"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
