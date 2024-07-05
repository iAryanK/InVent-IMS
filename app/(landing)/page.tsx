import { ContainerScroll } from "@/components/aceternity/container-scroll-animation";
import { InstallAppButton } from "@/components/shared/CustomButtons";
import Features from "@/components/landing/Features";
import StepGuide from "@/components/landing/StepGuide";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import Contact from "@/components/landing/Contact";

export default function Home() {
  return (
    <>
      <main className="min-h-screen max-w-7xl mx-auto">
        <p className="text-sm text-center mt-28 tracking-wide">
          One stop to manage your inventory
        </p>
        <div className="bg-gradient-to-t  from-amber-500 to-amber-100 dark:from-primary dark:to-secondary-foreground text-transparent bg-clip-text mt-6">
          <h1 className="text-7xl md:text-9xl lg:text-[200px] font-bold text-center select-none">
            InVent. IMS
          </h1>
        </div>

        <div className="flex justify-center mt-5">
          <InstallAppButton
            text="Install InVent. IMS App"
            icon={<ArrowDownToLine strokeWidth={3} />}
            className="font-bold text-xl"
          />
        </div>

        <ContainerScroll>
          <Image
            src={`https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1920&q=75`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
            quality={100}
          />
        </ContainerScroll>

        <Features />
        <StepGuide />
        <Contact />
      </main>
    </>
  );
}
