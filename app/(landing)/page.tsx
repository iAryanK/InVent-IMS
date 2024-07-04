"use client";

import { ThemeToggle } from "@/components/global/theme";
import { Layers2 } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();

  if (session) redirect("/home");
  return (
    <>
      {!session && (
        <main className="min-h-screen max-w-7xl mx-auto">
          <div className="flex flex-row items-center justify-between py-2">
            <div className="flex">
              <Layers2 className="mr-2" /> INVENT IMS
            </div>
            <ThemeToggle />
          </div>

          <div className="">Upload files on google drive</div>
          <button
            onClick={() => signIn("google", { callbackUrl: "/home" })}
            className="dark:bg-white dark:text-black"
          >
            Login with google
          </button>
        </main>
      )}
    </>
  );
}
