import Image from "next/image";
import Link from "next/link";
import { CgMenuMotion } from "react-icons/cg";
import { HiPlusSmall } from "react-icons/hi2";
import Container from "./Container";

const Header = () => {
  return (
    <Container>
      <header className="grid grid-cols-2 md:grid-cols-3 py-5 px-4 md:px-12 items-center sticky top-0 z-10 bg-white">
        <div>
          <Link href="/" className=" ">
            <Image
              src="/inogital_logo_transparent.svg"
              alt="logo"
              width={32}
              height={32}
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-5">
          <Link
            href="/"
            className="text-xl text-secondary-600 whitespace-nowrap"
          >
            Home
          </Link>
          <button className="text-xl text-secondary-600 inline-flex items-center">
            Enterprises <HiPlusSmall />
          </button>
          <button className="text-xl text-secondary-600 whitespace-nowrap inline-flex items-center">
            Edu-Tech <HiPlusSmall />
          </button>
        </div>

        <div className="flex justify-end">
          <button className="p-1 rounded-full bg-slate-200 text-secondary-700 hover:bg-primary-200 hover:text-primary-600">
            <CgMenuMotion
              className="h-8 w-8 cursor-pointer shrink-0 "
              //   onClick={() => setShowSideBar(true)}
            />
          </button>
        </div>
      </header>
    </Container>
  );
};

export default Header;
