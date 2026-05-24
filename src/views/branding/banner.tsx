import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import Image from "next/image";

const BRANDING_SERVICES_TOP = [
  "Logo Design",
  "Brand Identity Systems",
  "Colour Palette & Typography",
  "Brand Guidelines & Style Guides",
  "Business Card & Stationery Design",
  "Social Media Brand Assets",
];

const BRANDING_SERVICES_BOTTOM = [
  "Brand Voice & Messaging",
  "Iconography & Illustration",
  "Packaging & Print Design",
  "Pitch Deck & Presentation Design",
  "Brand Audit & Refresh",
  "Rebranding Services",
];

const Chip = ({ label }: { label: string }) => (
  <span className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-[#00838A] bg-black/70 px-5 text-sm text-white/90 shadow-[0_0_18px_rgba(0,131,138,0.14)] backdrop-blur-sm">
    <span className="h-1.5 w-1.5 rounded-full bg-[#00A1A5]" aria-hidden />
    {label}
  </span>
);

const BrandingMarqueeRow = ({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) => {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="relative flex overflow-hidden">
      <div
        className={`flex min-w-max gap-3 pr-3 ${
          reverse
            ? "animate-[htsol-branding-marquee-reverse_36s_linear_infinite]"
            : "animate-[htsol-branding-marquee_36s_linear_infinite]"
        }`}
      >
        {repeatedItems.map((item, index) => (
          <Chip key={`${item}-${index}`} label={item} />
        ))}
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-black text-white">
      <div className="absolute top-20 left-0">
        <Image
          src="/left-gradient.webp"
          width={500}
          height={500}
          alt="left gradient"
          className="h-[350px] w-[350px]"
          priority
        />
      </div>
      <div className="absolute top-20 right-0 hidden md:block">
        <Image
          src="/right-gradient.webp"
          width={500}
          height={500}
          alt="right gradient"
          className="h-[350px] w-[350px]"
          priority
        />
      </div>

      <Container>
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-6xl flex-col items-center justify-center px-1 pb-14 pt-28 text-center lg:pb-16 lg:pt-32">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#00838A] bg-black/45 px-4 py-2 text-xs text-white/90 shadow-[0_0_22px_rgba(0,131,138,0.22)] backdrop-blur-sm sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00A1A5]" aria-hidden />
            Branding & Visual Identity Services
          </div>

          <h1 className="max-w-[1200px] font-primary text-[34px] font-semibold uppercase leading-[1.18] tracking-normal text-white sm:text-5xl lg:text-[46px] xl:text-[50px]">
            Your brand is the first thing people judge you on - make sure it
            says the right thing
          </h1>

          <div className="mt-7 max-w-5xl space-y-5 text-xs leading-relaxed text-white/82 sm:text-sm">
            <p>
              Before a potential client reads your website copy, checks your
              reviews, or speaks to anyone in your team, they have already
              formed an opinion about your business. That opinion is built
              entirely on what they see - your logo, your colours, your
              typography, the way your visual presence feels.
            </p>
            <p>
              A weak brand signals a weak business. An inconsistent brand
              signals a disorganised one. A generic, template-built logo signals
              a business that did not invest in its own identity, and people
              wonder why they should invest in it either.
            </p>
            <p>
              HTSOL Inc. creates brand identities that make your business look
              exactly as credible, professional, and worth choosing as it
              actually is, built to work across your website, social media,
              marketing materials, and every other touchpoint.
            </p>
          </div>

          <div className="mt-8">
            <Button href="/contact-us" variant="white">
              Start Your Brand Project
            </Button>
          </div>
        </div>
      </Container>

      <div className="relative z-10 mt-5 space-y-4 pb-8 lg:mt-0 lg:pb-10">
        <BrandingMarqueeRow items={BRANDING_SERVICES_TOP} />
        <BrandingMarqueeRow items={BRANDING_SERVICES_BOTTOM} reverse />
      </div>
    </section>
  );
};

export default Banner;
