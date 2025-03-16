import { IProCompany } from "../../../interfaces";

function Companies({
  production_companies,
}: {
  production_companies: IProCompany[] | undefined;
}) {
  return (
    <section className="w-[92%] mx-auto my-8 overflow-x-hidden">
      <h1
        className="text-5xl font-bold mb-16"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        Production Companies:
      </h1>
      <div className="flex items-center flex-wrap w-fit mx-auto justify-center gap-x-8 gap-y-16">
        {production_companies?.map((pro, index) => (
          <div
            key={index}
            className="w-[90%] sm:w-[400px]"
            data-aos="zoom-in-out"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${pro.logo_path}`}
              alt="logo of company"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Companies;
