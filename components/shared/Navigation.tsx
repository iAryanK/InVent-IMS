import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeToggle from "../global/theme-toggle";
import { SignInButton, UserButton } from "./CustomButtons";

const Navigation = () => {
  return (
    <div className="max-w-7xl mx-auto py-2 flex items-center justify-between relative px-2 xl:px-10">
      <aside className="flex items-center justify-center gap-1">
        <Image
          src={"/logo.png"}
          width={78}
          height={78}
          alt="ims logo"
          quality={100}
        />
        <span className="text-4xl font-bold hidden md:flex"> InVent. IMS</span>
      </aside>

      <nav className="hidden lg:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] tracking-wider">
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Features</Link>
          <Link href={"#"}>Guide</Link>
          <Link href={"#"}>Contact</Link>
        </ul>
      </nav>

      <aside className="flex items-center gap-2">
        <SignInButton text="SignIn" className="font-semibold text-lg" />
        <UserButton />
        <ThemeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
