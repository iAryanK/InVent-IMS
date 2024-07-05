import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="text-center max-w-7xl mx-auto py-3 mt-10 border-t">
      <div>
        InVent. IMS - 2024 | By{" "}
        <Link href="https://www.iaryan.tech" className="font-bold">
          Aryan
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
