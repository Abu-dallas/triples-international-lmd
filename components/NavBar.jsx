import Image from "next/image";
import { usePathname } from "next/navigation";

function NavBar({ isScroll, setisOpen }) {
  const pathname = usePathname();
  const home = "/";
  return (
    <nav
      className={`${
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
        <Image
          onClick={() => setisOpen(true)}
          src="/menu.png"
          alt="caliphate aviation logo"
          width={2000}
          height={2000}
          className="w-8 h-8"
        />
      </div>
    </nav>
  );
}

export default NavBar;
