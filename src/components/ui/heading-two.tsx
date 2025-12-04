import React from "react";

const HeadingTwo = ({
  className,
  span,
  children,
}: {
  className?: string;
  children: string;
  span?: string;
}) => {
  return (
    <h2
      className={`text-5xl font-bold font-primary uppercase ${
        className ? className : ""
      }`}
    >
      {children} {span && <span className="text-primary">{span}</span>}
    </h2>
  );
};

export default HeadingTwo;
