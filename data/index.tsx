import {
  CircleUser,
  Database,
  DatabaseZap,
  FileSpreadsheet,
  Grid2x2Check,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

const Skeleton = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );
};

export const BentoItems = [
  {
    title: "Your Database in Your Hands",
    description:
      "Connect your Google drive and store all your data in your own drive.",
    header: <Skeleton />,
    className: "col-span-2",
    icon: <DatabaseZap className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Organized Data handling",
    description: "Interact with your data in an organized manner.",
    header: <Skeleton />,
    className: "col-span-1",
    icon: <Grid2x2Check className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Your Data, Your Schema",
    description:
      "IMS creates custom form fields according to the schema defined by you.",
    header: <Skeleton />,
    className: "col-span-1",
    icon: <FileSpreadsheet className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Granular Level Role Based Access",
    description: "Share your data to others with your desired level of access.",
    header: <Skeleton />,
    className: "col-span-2",
    icon: <ShieldCheck className="h-4 w-4 text-neutral-500" />,
  },
];

export const SidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/home",
  },
  {
    title: "Database",
    icon: Database,
    href: "/database",
  },
  {
    title: "Profile",
    icon: CircleUser,
    href: "/profile",
  },
];
