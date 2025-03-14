import { useSelector } from "react-redux";
import { RootState } from "../store/store";

import Header from "../components/header/Header";
import { IMovie } from "../interfaces";
import Moviecard from "../components/ui/moviecard/Moviecard";
import Pagination from "../pagination/Pagination";

// import Slidersection from "./components/slider/Slider";
function Home() {
  const { movies } = useSelector((state: RootState) => state.movies);
  return (
    <div>
      <head>
        <title>Movie App</title>
        <link rel="icon" href="/assets/logo.png" />
      </head>
      <Header />

      {/* <Slidersection /> */}
      <ul className="flex flex-wrap gap-6 w-[90%] mx-auto justify-center">
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
    </div>
  );
}

export default Home;
