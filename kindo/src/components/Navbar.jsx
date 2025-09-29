import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-brand-dark fixed w-full z-30">
      <Link to="/" className="text-2xl font-bold text-brand-accent">
        Kindo
      </Link>
      <div className="hidden md:flex space-x-6">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `hover:text-brand-accent transition ${
                isActive ? "text-brand-accent" : "text-gray-300"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <button className="md:hidden text-gray-300">
        <Menu />
      </button>
    </nav>
  );
}
