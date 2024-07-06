"use client";
import { ChevronsUpDown } from "lucide-react";
import { usePathname } from "next/navigation";

const Infobar = () => {
  const pathname = usePathname();

  const routeName = () => {
    const formatName = pathname.charAt(1).toUpperCase() + pathname.slice(2);
    return formatName;
  };
  return (
    <div className="px-5 py-4 dark:bg-zinc-900 flex items-center justify-between">
      <div className="text-2xl font-semibold">{routeName()}</div>

      <div className="flex items-center justify-center gap-2">
        <p className="font-semibold text-xl">Personal</p>
        <ChevronsUpDown size={18} />
      </div>
    </div>
  );
};

export default Infobar;
