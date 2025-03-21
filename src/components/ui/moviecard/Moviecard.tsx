import { Link } from "react-router-dom";

function Moviecard({
  image,
  title,
  release_date,
  vote,
  id,
}: {
  image: string;
  title: string;
  release_date: string;
  vote: number;
  id: number;
}) {
  return (
    <Link to={`/movie/${id}`} data-aos="zoom-in-out">
      <article
        className="w-[180px] h-[340px] sm:w-[300px] sm:h-[520px] rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt="poster image"
          className="w-full sm:h-[86%] h-[77%] object-cover"
          loading="lazy"
        />
        <div className="py-2 px-4">
          <h1 className="text-lg font-medium truncate w-[150px] sm:w-68">
            {title}
          </h1>
          <div className="flex justify-between ">
            <time>{release_date.slice(0, 4)}</time>
            <p>{vote.toFixed(1)}/10</p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default Moviecard;
