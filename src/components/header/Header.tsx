import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { fetchMovies, searchMovie, resetSlider } from "../../store/moviesSlice";

function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    if (value.trim() === "") {
      dispatch(fetchMovies(1));
      dispatch(resetSlider());
    } else {
      dispatch(searchMovie(value));
    }
  }, [dispatch, value]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header
      className="py-4"
      style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px" }}
    >
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <img src="/assets/logo.png" alt="logo" className="w-28 h-20" />
        <div
          className="border-2 border-amber-300 rounded p-2 ps-8 flex relative"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
          }}
        >
          <span
            className={`absolute ${
              isOpen ? "left-2" : "left-3"
            } left-2 top-1/2 -translate-y-1/2 cursor-pointer`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <img src="/svgs/search.svg" alt="search" className="w-4 h-4" />
          </span>
          <input
            value={value}
            onChange={handleChange}
            className={`outline-0 border-0 sm:w-[250px] transition-all   ${
              isOpen ? "w-[8rem]" : "w-0"
            }`}
            placeholder="Type movie Name "
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
