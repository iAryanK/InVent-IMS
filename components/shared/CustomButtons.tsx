"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signIn, useSession } from "next-auth/react";
import { Button } from "../ui/button";

export const UserButton = () => {
  const { data: session } = useSession();

  return (
    <Avatar className={`${session ? "flex" : "hidden"}`}>
      {/* @ts-ignore */}
      <AvatarImage src={session?.user?.image} />
      <AvatarFallback>IMS</AvatarFallback>
    </Avatar>
  );
};

export const SignInButton = ({ text, icon }: { text: string; icon?: any }) => {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/home" })}
      className="font-bold text-xl flex gap-2 py-6"
    >
      {text}
      {icon && icon}
    </Button>
  );
};
