import React from "react";

type DoubleCurvesProps = {
  children: React.ReactNode;
  className?: string;
  up?: boolean;
  down?: boolean;
};

const DoubleCurves = ({
  children,
  className,
  up,
  down,
}: DoubleCurvesProps) => {
  let showTop = true;
  let showBottom = true;

  if (up && !down) {
    showTop = true;
    showBottom = false;
  } else if (down && !up) {
    showTop = false;
    showBottom = true;
  }

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
    >
      {showTop && (
        <div
          className="pointer-events-none absolute top-0 left-0 z-2 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] w-full -rotate-3 sm:-rotate-1 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] animate-pulse"
          aria-hidden
        />
      )}

      {showBottom && (
        <div
          className="pointer-events-none absolute bottom-0 left-0 z-2 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] w-full -rotate-3 sm:rotate-1 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] animate-pulse"
          aria-hidden
        />
      )}

      {children}
    </div>
  );
};

export default DoubleCurves;


// *** Old Code ***

// import React from "react";
// import Container from "./container";

// type DoubleCurvesProps = {
//   children: React.ReactNode;
//   className?: string;
//   up?: boolean;
//   down?: boolean;
// };

// const DoubleCurves = ({ children, className, up, down }: DoubleCurvesProps) => {
//   let showTop = true;
//   let showBottom = true;

//   if (up && !down) {
//     showTop = true;
//     showBottom = false;
//   } else if (down && !up) {
//     showTop = false;
//     showBottom = true;
//   }

//   // Clip-path: angled top (left dips down), flat bottom so the bottom curve isn't cut off.
//   // Polygon order: top-left, top-right, bottom-right, bottom-left.
//   return (
//     <div
//       className={`py-20 relative overflow-hidden -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[2%] [clip-path:polygon(0_1%,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_100%,0_100%)] ${className ?? ""}`}>
//       {showTop && (
//         <div
//           className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] animate-pulse"
//           aria-hidden
//         />
//       )}
//       {showBottom && (
//         <div
//           className="pointer-events-none absolute z-2 bottom-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:rotate-1 w-full bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] animate-pulse"
//           aria-hidden
//         />
//       )}
//       <Container>{children}</Container>
//     </div>
//   );
// };

// export default DoubleCurves;
