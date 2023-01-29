import Link from "next/link";
import { memo } from "react";
import { FaHamburger } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="bg-gray-900/70 text-gray-50 backdrop-blur-lg fixed z-20 w-full top-0 left-0 py-2 drop-shadow-sm">
      <div className="container px-4 my-2 flex flex-wrap justify-between items-center mx-auto">
        <Link
          href="/"
          className="self-center text-xl font-semibold whitespace-nowrap cursor-pointer "
        >
          <FaHamburger className="inline-block mr-2" />
          finstreet - Burger Challange
        </Link>
      </div>
    </nav>
  );
};

export default memo(Header);
