import Button from "@/components/ui/Button";

const lists = [
  "One accountable partner",
  "Consistent communication",
  "Predictable timelines",
  "Systems designed to scale with your growth",
  "Tailored solutions built around your processes",
];
export default function OurStory() {
  return (
    <section className="relative bg-[url(/dental/bg-why-choose.jpg)] bg-cover py-10 overflow-hidden">
      {/* subtle gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" /> */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="bg-[#252528] overflow-hidden relative rounded-xl p-10 lg:p-12 text-white max-w-xl">
          <div className="absolute top-0 left-0 bg-[#00A1A5] h-14 w-24 rounded-full blur-2xl"></div>
          <h2 className="text-3xl uppercase lg:text-3xl font-semibold font-primary leading-tight mb-10">
            Our Story
          </h2>

          {/* Item 1 */}
          <div className="mb-8">
            <p className="text-sm text-white/75 leading-relaxed mb-4">
              HTSOL Inc. was built on a simple belief: Canadian businesses
              deserve a digital partner that makes growth feel clear and
              achievable. Not confusing or overwhelming.
            </p>
            <p>
              We bring together the skills most companies need to grow online,
              including strategy, design, development, marketing, and AI-driven
              optimization. This helps you move faster with one aligned team. It
              also means fewer handoffs, fewer gaps, and more consistency from
              planning to delivery.
            </p>
            <div className="flex">
              <Button href="/">Get Started</Button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative ">
          {/* <Image
            src="/dental/macbook-air.jpg"
            alt="Agency laptop showcase"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
            priority
          /> */}
        </div>
      </div>
    </section>
  );
}
