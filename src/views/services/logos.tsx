const logos = [
  {
    src: "/services/harumi-logo.svg",
    alt: "Harumi Logo",
  },
  {
    src: "/services/victori-logo.svg",
    alt: "Victori Logo",
  },
  {
    src: "/services/gendiwa-logo.svg",
    alt: "Gendiwa Logo",
  },
  {
    src: "/services/lokaoma-logo.svg",
    alt: "Lokaoma Logo",
  },
  {
    src: "/services/ehan-logo.svg",
    alt: "Ehan Logo",
  },
  {
    src: "/services/onestup.svg",
    alt: "One Stup Logo",
  },
];

const Logos = () => {
  return (
    <div className="bg-black border-t border-b border-white">
      <div className="max-w-[1470px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-[70%] h-[100px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos;
