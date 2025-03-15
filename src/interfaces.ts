interface IGenre {
  id: number;
  name: string;
}
interface ISpokenLang {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MoviesState {
  movies: IMovie[];
  movieDetails: IMovie | null;
  totalPages: number;
  loading: boolean;
  showSlider:boolean;
  error: string | null;
}
export interface IHeroprops {
  poster: string | undefined;
  title: string | undefined;
  dateReleased: string | undefined;
  vote: number | undefined;
  overview: string | undefined;
  genre: IGenre[] | undefined;
  adult: boolean | undefined;
  langs: ISpokenLang[] | undefined;
  homepage: string | undefined;
}

export interface IProCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genres: IGenre[];
  status: string;
  spoken_languages: ISpokenLang[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  homepage: string;
  production_companies: IProCompany[] | undefined;
}
