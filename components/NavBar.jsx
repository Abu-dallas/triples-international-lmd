import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar({ isScroll, setisOpen }) {
  const pathname = usePathname();
  const home = "/";
  return (
    <nav
      className={` lg:px-8 ${
        isScroll
          ? "sticky top-0 bg-black w-full z-10 p-6"
          : pathname === home
          ? "sticky top-0 w-full z-10 p-4"
          : "sticky top-0 w-full z-10 p-4 bg-black"
      }
      }`}
    >
      <div className="flex items-center justify-between">
        <Image
          src="/globe.svg"
          alt="caliphate aviation logo"
          width={2000}
          height={2000}
          className="w-10 h-10"
        />
        <div className="flex items-center justify-center gap-6 max-sm:hidden">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={` ${
                pathname === link.href
                  ? "bg-indigo-100 text-shadow-indigo-400 px-1.5 py-0.5 text-lg rounded font-semibold"
                  : "text-lg text-indigo-500 font-semibold"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <Image
          onClick={() => setisOpen(true)}
          src="/menu.png"
          alt="caliphate aviation logo"
          width={2000}
          height={2000}
          className="w-8 h-8 sm:hidden"
        />
      </div>
    </nav>
  );
}

export default NavBar;

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Contacts",
    href: "/contacts",
  },
];
