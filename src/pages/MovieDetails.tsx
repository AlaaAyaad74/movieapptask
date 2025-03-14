import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { getMovieById } from "../store/moviesSlice";
import Hero from "../components/moviedetails/hero/Hero";
import Companies from "../components/moviedetails/companies/Companies";

function MovieDetails() {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const { movieDetails } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getMovieById(Number(id))); // Fetch movies if Redux is empty
  }, [dispatch, id]);
  console.log(movieDetails);
  return (
    <div>
      <Hero
        poster={movieDetails?.poster_path}
        title={movieDetails?.title}
        dateReleased={movieDetails?.release_date}
        vote={movieDetails?.vote_average}
        overview={movieDetails?.overview}
        genre={movieDetails?.genres}
        adult={movieDetails?.adult}
        langs={movieDetails?.spoken_languages}
        homepage={movieDetails?.homepage}
      />
      <Companies production_companies={movieDetails?.production_companies} />
    </div>
  );
}

export default MovieDetails;
