import React, { forwardRef } from "react";

type HeadingTwoProps = {
  className?: string;
  children: React.ReactNode;
  span?: string;
};

const HeadingTwo = forwardRef<HTMLHeadingElement, HeadingTwoProps>(
  ({ className, span, children }, ref) => {
    return (
      <h2
        ref={ref}
        className={`text-4xl lg:text-5xl text-white font-medium font-primary uppercase ${
          className ? className : ""
        }`}
      >
        {children}{" "}
        {span && (
          <span className="relative">
            <span
              className="absolute bottom-3 left-0 w-full h-5 bg-primary"
              style={{
                background:
                  "linear-gradient(90deg, #075B65 0%, #00838A 37.02%, #328A99 81.25%)",
              }}
            />
            <span className="relative">{span}</span>
          </span>
        )}
      </h2>
    );
  },
);

HeadingTwo.displayName = "HeadingTwo";

export default HeadingTwo;
