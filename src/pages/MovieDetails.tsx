import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { clearMovieDetails, getMovieById } from "../store/moviesSlice";
import Hero from "../components/moviedetails/hero/Hero";
import Companies from "../components/moviedetails/companies/Companies";
import Loader from "../components/loader/Loader";

function MovieDetails() {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const { movieDetails } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(clearMovieDetails()); // Clear previous movie before fetching new one
    if (id) {
      dispatch(getMovieById(Number(id)));
    }

    window.scrollTo(0, 0);
  }, [dispatch, id]);
  console.log(movieDetails);
  return (
    <>
      {!movieDetails && <Loader />}
      {movieDetails && (
        <div>
          <head>
            <title>{movieDetails?.title}</title>
            <link rel="icon" href="/assets/logo.webp" />
          </head>
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
          <Companies
            production_companies={movieDetails?.production_companies}
          />
        </div>
      )}
    </>
  );
}

export default MovieDetails;
