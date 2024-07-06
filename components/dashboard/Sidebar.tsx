"use client";
import {
  ChevronFirst,
  ChevronLast,
  CircleUser,
  Database,
  LayoutDashboard,
  MoreVertical,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { createContext, useContext, useState } from "react";
import ThemeToggle from "../global/theme-toggle";
import { usePathname } from "next/navigation";
import { SidebarItems } from "@/data";
import Link from "next/link";
import { UserButton } from "../shared/CustomButtons";

type SidebarContextType = {
  expanded: boolean;
};

const SidebarContext = createContext<SidebarContextType>({ expanded: true });

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white dark:bg-zinc-900  shadow-sm tracking-wide">
          <div className="p-4 pb-2 pt-10 flex justify-between items-center h-10">
            <Image
              src={"/logo.png"}
              className={`overflow-hidden transition-all ${
                expanded ? "flex" : "hidden "
              }`}
              height={48}
              width={48}
              alt="logo"
              quality={100}
            />
            <button
              aria-expanded={expanded}
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? (
                <ChevronFirst className="dark:invert" />
              ) : (
                <ChevronLast className="dark:invert" />
              )}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <div className="flex-1 px-3 pt-10">
              {SidebarItems.map((item, i) => (
                <SidebarItem
                  key={i}
                  icon={<item.icon size={20} />}
                  text={item.title}
                  href={item.href}
                />
              ))}
            </div>
          </SidebarContext.Provider>

          <div className="flex flex-col p-3 gap-2 items-center">
            <div
              className={`flex items-start justify-start ${
                expanded && "hidden"
              }`}
            >
              <ThemeToggle />
            </div>

            <div className="flex">
              <UserButton />
              <div
                className={`flex justify-between items-center overflow-hidden transition-all ${
                  expanded ? "w-52 ml-3" : "w-0"
                } `}
              >
                <div className="leading-4">
                  <h4 className="font-semibold">{session?.user?.name}</h4>
                  <span className="font-medium text-xs text-gray-600 tracking-wide">
                    {session?.user?.email}
                  </span>
                </div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({
  icon,
  text,
  alert,
  href,
}: {
  icon: any;
  text: string;
  alert?: any;
  href?: string;
}) {
  const { expanded } = useContext(SidebarContext);
  const pathname = usePathname();

  const OneItem = () => {
    return (
      <li
        className={`relative flex items-center py-2 justify-center my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          pathname === href
            ? "bg-gradient-to-tr from-amber-200 to-amber-100 text-amber-800"
            : "hover:bg-zinc-700"
        }`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          ></div>
        )}

        {!expanded && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-amber-100 text-amber-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
          >
            {text}
          </div>
        )}
      </li>
    );
  };

  if (href) {
    return (
      <Link href={href}>
        <OneItem />
      </Link>
    );
  }

  return <OneItem />;
}
