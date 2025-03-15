import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center w-[90%] ">
        {/* Logo & Name */}
        <div className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="logo" className="w-28 h-20" />
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/alaa.ayad.904"
            className="hover:text-gray-400"
          >
            <i className="fab fa-facebook w-6 h-6"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/alaa_ayaad_74/"
            className="hover:text-gray-400"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} MovieApp. All rights reserved.
        <br />
        Developed By{" "}
        <Link
          className="text-white font-bold underline"
          to="https://www.linkedin.com/in/alaaayyaad001/"
        >
          Alaa Ayaad
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
