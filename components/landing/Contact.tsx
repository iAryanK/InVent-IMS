import React from "react";
import { ContactDrawer } from "../shared/ContactDrawer";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto mt-20 px-5">
      <h2 className="text-5xl md:text-7xl lg:text-[100px] font-bold text-center select-none tracking-wide">
        Contact
      </h2>

      <p className="text-center">Contact the developer in case you need to.</p>

      <div className="flex items-center justify-center mt-10">
        <ContactDrawer />
      </div>
    </section>
  );
};

export default Contact;
