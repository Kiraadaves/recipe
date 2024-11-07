"use client";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-6 lg:px-8 py-4">
      <div className="w-full sm:w-auto flex justify-center sm:justify-start">
        <Image
          alt="logo"
          width={200}
          height={200}
          src="/logo.png"
          className="w-12 h-12 sm:w-16 sm:h-16"
        />
      </div>
    </nav>
  );
};

export default Header;
