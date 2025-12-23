import CircularText from "@/components/ui/CircularText";
import Container from "@/components/ui/container";
import Image from "next/image";

const projects = [
  {
    name: "Website Name Here",
    subname: "View Live Website",
    image: "/services/web-one.png",
    href: "#",
  },
  {
    name: "Website Name Here",
    subname: "View Live Website",
    image: "/services/web-two.png",
    href: "#",
  },
];

const PortfolioSection = () => {
  return (
    <section className="relative py-16">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.image}
              className={`relative ${index === 0 ? "lg:mt-24" : ""}`}
            >
              <div className="mb-5 flex flex-col gap-3">
                <div className="space-y-1">
                  <h2 className="text-3xl sm:text-4xl uppercase font-primary font-bold text-white">
                    {project.name}
                  </h2>
                  <a
                    href={project.href}
                    className="group inline-flex items-center gap-2 text-xl sm:text-xl font-primary font-semibold uppercase text-primary"
                  >
                    <span className="gradient-text-blue">
                      {project.subname}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 group-hover:border-transparent group-hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] group-hover:text-white">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
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

              <div className="relative">
                <div className="relative rounded-[28px]  p-6 shadow-[0_45px_120px_rgba(0,0,0,0.85)]">
                  <div
                    className={`relative aspect-4/3 ${
                      index === 0 ? "-rotate-3" : "-rotate-3"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.name} preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative h-38 w-38 md:h-42 md:w-42">
            <CircularText text="Ht Solutions Marketing Agency" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
