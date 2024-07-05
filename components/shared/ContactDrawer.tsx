"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { Textarea } from "../ui/textarea";

export function ContactDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild className="max-sm:w-full">
        <Button>Contact Now</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center text-white tracking-wide">
            Contact
          </DrawerTitle>
          <DrawerDescription className="text-center tracking-wide">
            Hey! I&apos;m glad that you&apos;re here. Feel free to send me a
            quick note about anything.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4 md:w-1/2 md:mx-auto" />
        <DrawerFooter className="pt-2 md:w-1/2 md:mx-auto">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialvalues = {
    email: "",
    note: "",
  };

  const [data, setData] = useState(initialvalues);

  const handleSubmit = () => {};

  return (
    <form className={cn("grid items-start gap-4 tracking-wide", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email" className="text-white">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="xyz@gmail.com"
          value={data.email}
          onChange={(e: any) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="note" className="text-white">
          Your message
        </Label>
        <Textarea
          id="note"
          name="note"
          placeholder="Write here..."
          value={data.note}
          onChange={(e: any) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
        />
      </div>
      <Button type="submit" onClick={handleSubmit}>
        {isSubmitting ? (
          <div className="flex gap-2 items-center justify-center">
            <LoaderCircle size={18} className="animate-spin-custom" />
            <p>Sending</p>
          </div>
        ) : (
          <p>Send Note</p>
        )}
      </Button>
    </form>
  );
}
