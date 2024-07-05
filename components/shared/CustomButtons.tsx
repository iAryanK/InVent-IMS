"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signIn, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { text } from "stream/consumers";

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

export const SignInButton = ({
  text,
  icon,
  className,
}: {
  text: string;
  icon?: any;
  className?: string;
}) => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Button
        onClick={() => signIn("google", { callbackUrl: "/home" })}
        className={`flex gap-2 ${className}`}
      >
        {text}
        {icon && icon}
      </Button>
    );
  }

  return (
    <Link
      href={"/home"}
      className="bg-orange-600 p-2 rounded-lg tracking-wide font-semibold"
    >
      Dashboard
    </Link>
  );
};

export const InstallAppButton = ({
  text,
  icon,
  className,
}: {
  text: string;
  icon?: any;
  className?: string;
}) => {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/home" })}
      className={`flex gap-2 ${className}`}
    >
      {text}
      {icon && icon}
    </Button>
  );
};
