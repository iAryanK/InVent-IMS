import { BentoGrid, BentoGridItem } from "@/components/aceternity/bento-grid";
import { BentoItems } from "@/data";
import React from "react";

type Props = {};

const Features = (props: Props) => {
  return (
    <section className="max-w-7xl mx-auto  px-5">
      <h2 className="text-5xl md:text-7xl lg:text-[100px] font-bold text-center select-none tracking-wide">
        Features
      </h2>

      <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem] mt-10">
        {BentoItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Features;
