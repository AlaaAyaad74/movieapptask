import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Header from "../components/header/Header";
import { IMovie } from "../interfaces";
import Moviecard from "../components/ui/moviecard/Moviecard";
import Pagination from "../pagination/Pagination";

import Slidersection from "../components/slider/Slider";
import Footer from "../components/footer/footer";
function Home() {
  const { movies, showSlider } = useSelector(
    (state: RootState) => state.movies
  );
  return (
    <div>
      <head>
        <title>Movie App</title>
        <link rel="icon" href="/assets/logo.webp" />
      </head>
      <Header />

      {showSlider && <Slidersection />}
      <ul className="flex flex-wrap gap-6 w-[96%] sm:w-[90%] mx-auto justify-center mt-8">
        {movies.map((movie: IMovie) => (
          <li key={movie.id}>
            <Moviecard
              image={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date}
              vote={movie.vote_average}
              id={movie.id}
            />
          </li>
        ))}
      </ul>
      <Pagination />
      <Footer />
    </div>
  );
}

export default Home;
