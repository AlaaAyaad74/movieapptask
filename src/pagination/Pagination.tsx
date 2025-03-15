import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect, useState } from "react";
import { fetchMovies, fetchPagesnum } from "../store/moviesSlice";
import Loader from "../components/loader/Loader";

function Pagination() {
  const dispatch = useDispatch<AppDispatch>();
  const { totalPages, loading, error } = useSelector(
    (state: RootState) => state.movies
  );

  const [currentPage, setCurrentPage] = useState<number>(1);

  // Fetch total pages only once (when component mounts)
  useEffect(() => {
    if (totalPages === 0) {
      dispatch(fetchPagesnum());
    }
  }, [dispatch, totalPages]);
  console.log(currentPage);
  // Fetch movies only when currentPage changes
  useEffect(() => {
    dispatch(fetchMovies(currentPage));
    console.log(currentPage);
    console.log("Pagination");
  }, [dispatch, currentPage]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <button
        className="px-4 py-2 bg-amber-300 text-white rounded disabled:opacity-50 cursor-pointer"
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span className="font-semibold text-lg">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="px-4 py-2 bg-amber-300 text-white rounded disabled:opacity-50 cursor-pointer"
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
