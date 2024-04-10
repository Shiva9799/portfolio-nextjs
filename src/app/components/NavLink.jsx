import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-violet-50 sm:text-xl rounded md:p-0 transition-all duration-300 hover:text-amber-500 transform hover:scale-105"
    >
      {title}
    </Link>
  );
};

export default NavLink;
