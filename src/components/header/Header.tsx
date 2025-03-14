import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { fetchMovies, searchMovie } from "../../store/moviesSlice";

function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    if (value === "") {
      dispatch(fetchMovies(1));
    } else {
      dispatch(searchMovie(value));
    }
  }, [dispatch, value]);
  return (
    <header
      className="py-4 mb-8"
      style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px" }}
    >
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <img src="/assets/logo.png" alt="logo" className="w-28 h-20" />
        <div>
          <input
            value={value}
            onChange={handleChange}
            className="w-[12rem] h-10 border-1 rounded px-2"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
