import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideBar({ isOpen, setisOpen }) {
  const pathname = usePathname();
  return (
    <div>
      <div
        className={`${
          isOpen &&
          "w-full h-screen md:hidden fixed top-0 z-20 backdrop-blur-[2px] transition-all delay-300"
        }`}
      >
        <div
          className={` transition-all delay-300 text-slate-200 ${
            isOpen
              ? "w-[80%] h-screen fixed z-20 top-0 right-0 bg-black md:hidden"
              : "w-full h-screen fixed z-20 top-0 right-0 translate-x-full bg-slate-950 md:hidden"
          }`}
        >
          <p className="py-6 pt-8 px-3">
            <button
              onClick={() => setisOpen(false)}
              type="button"
              className="text-slate-200 flex items-center gap-1 font-semibold text-lg pb-8  rounded"
            >
              <ChevronLeft className="text-slate-200" />
              Close
            </button>
          </p>
          <p className="text-center text-2xl font-bold text-indigo-500 pb-12 border-b-2">
            Tripple 'S' International LTD
          </p>
          <div className="py-4 flex flex-col gap-3">
            {navLinks.map((navLink, index) => (
              <Link
                onClick={() => pathname === navLink.href && setisOpen(false)}
                key={index}
                href={navLink.href}
                className={`"text-slate-200 text-lg font-semibold p-2 px-6 rounded" ${
                  navLink.href === pathname && "bg-indigo-400 rounded"
                }`}
              >
                {navLink.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const navLinks = [
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

export default SideBar;
