import Container from "@/components/ui/container";
import Image from "next/image";

const showcaseItems = [
  {
    variant: "blur",
    name: "Website Name Here",
    subname: "View Live Website",
    image: "/services/web-one.png",
    href: "#",
  },
  {
    variant: "dual",
    image: "/two_laptops.png",
    labels: [
      {
        name: "Website Name Here",
        subname: "View Live Website",
        href: "#",
      },
      {
        name: "Website Name Here",
        subname: "View Live Website",
        href: "#",
      },
    ],
  },
];

const ShowcaseSection = () => {
  return (
    <section className="bg-black py-16">
      <Container>
        <div className="grid gap-8">
          {showcaseItems.map((item) => (
            <div
              key={item.image}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]"
            >
              <div className="relative aspect-16/10">
                <Image
                  src={item.image}
                  alt={`${item.variant === "dual" ? "Dual laptop" : item.name} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-cover"
                />
                {item.variant === "blur" && (
                  <div className="absolute inset-x-0 bottom-0 h-[20%] bg-black/40 backdrop-blur-md">
                    <div className="flex h-full flex-col justify-center px-6 py-3">
                      <h3 className="text-lg sm:text-xl font-primary font-bold uppercase text-white">
                        {item.name}
                      </h3>
                      <a
                        href={item.href}
                        className="group mt-1 inline-flex items-center gap-2 text-sm sm:text-base font-primary font-semibold uppercase text-primary"
                      >
                        <span className="gradient-text-blue">
                          {item.subname}
                        </span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 group-hover:border-transparent group-hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] group-hover:text-white">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-all duration-150"
                          >
                            <path
                              d="M3 8H13M13 8L9 4M13 8L9 12"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                )}
                {item.variant === "dual" && (
                  <div className="absolute inset-x-0 bottom-0 px-6 py-5">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                      {item.labels.map((label, labelIndex) => (
                        <div
                          key={label.name}
                          className={`space-y-2 ${
                            labelIndex === 1 ? "sm:-translate-y-12" : ""
                          }`}
                        >
                          <h3 className="text-lg sm:text-xl font-primary font-bold uppercase text-white">
                            {label.name}
                          </h3>
                          <a
                            href={label.href}
                            className="group inline-flex items-center gap-2 text-sm sm:text-base font-primary font-semibold uppercase text-primary"
                          >
                            <span className="gradient-text-blue">
                              {label.subname}
                            </span>
                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 group-hover:border-transparent group-hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] group-hover:text-white">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="transition-all duration-150"
                              >
                                <path
                                  d="M3 8H13M13 8L9 4M13 8L9 12"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ShowcaseSection;
