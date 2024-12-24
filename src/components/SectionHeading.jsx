import React from "react";

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <header className="flex flex-col">
      <div className="flex items-center gap-8">
        <hr className="flex-grow h-[2px] bg-white border-0" />
        <h2 className="section-heading">{heading}</h2>
        <hr className="flex-grow h-[2px] bg-white border-0" />
      </div>
      <p className="section-subheading text-center my-4">{subHeading}</p>
    </header>
  );
};

export default SectionHeading;
