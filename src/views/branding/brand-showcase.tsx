import Container from "@/components/ui/container";
import Image from "next/image";

const BRANDING_TRUST_POINTS = [
  {
    icon: "/brainding/eye.svg",
    title: (
      <>
        First
        <br />
        Impressions Last
      </>
    ),
    description:
      "Less than 0.1 seconds to form a visual opinion — your brand must win it instantly",
  },
  {
    icon: "/brainding/touch.svg",
    title: (
      <>
        Every
        <br />
        Touchpoint Covered
      </>
    ),
    description:
      "Website, print, social, pitch decks — one consistent system across everything",
  },
  {
    icon: "/brainding/sheild.svg",
    title: (
      <>
        Built To
        <br />
        Build Trust
      </>
    ),
    description:
      "Strategy-driven identities that make your business look as credible as it actually is",
  },
];

const BrandShowcase = () => {
  return (
    <section className="bg-black pb-20 pt-10 text-white lg:pb-28 lg:pt-14">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[6px]">
            <Image
              src="/brainding/brandingsimages.png"
              alt="Branding work across social, website, stationery, print, and analytics touchpoints"
              width={1654}
              height={845}
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
          </div>

          <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8 lg:mt-20">
            <div
              className="absolute left-[16.666%] right-[16.666%] top-[56px] hidden h-px bg-[#00A1A5] md:block"
              aria-hidden
            />

            {BRANDING_TRUST_POINTS.map((point) => (
              <article
                key={point.icon}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#00A1A5] bg-[#001312] shadow-[0_0_22px_rgba(0,161,165,0.16)] lg:h-[120px] lg:w-[120px]">
                  <Image
                    src={point.icon}
                    alt=""
                    width={55}
                    height={55}
                    className="h-12 w-12 object-contain lg:h-[55px] lg:w-[55px]"
                  />
                </div>

                <h2 className="mt-9 font-primary text-2xl font-semibold uppercase leading-tight text-white sm:text-3xl lg:text-[34px]">
                  {point.title}
                </h2>

                <p className="mt-5 max-w-[310px] text-base leading-relaxed text-white/55 sm:text-lg lg:text-xl">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BrandShowcase;
