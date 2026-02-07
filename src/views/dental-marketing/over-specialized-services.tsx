import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import Link from "next/link";
const data = [
  {
    image: "/dental/strategy-visual.jpg",
    heading: "High-Conversion Website Design & UI/UX",
    para: `We build stunning, mobile-responsive dental websites that turn visitors into patients. By focusing on intuitive navigation and ultra-fast load times (under 3 seconds), we eliminate user frustration and can increase your patient bookings by up to 29%. Every site is strategically designed with clear "Book Now" actions to maximize your ROI.`,
    icon: "/dental/high-conversion.svg",
  },
  {
    image: "/dental/strategy-visual.jpg",
    heading: "Strategic Branding & Visual Identity",
    para: `Build immediate trust with a professional brand that reflects clinical excellence. Since 75% of patients choose a dentist based on their visual branding, we craft cohesive logos, color palettes, and brand voices that set you apart. Our branding strategies don't just look good—they can increase revenue by up to 23% by building long-term patient credibility. `,
    icon: "/dental/high-conversion.svg",
  },
  {
    image: "/dental/custom-software-automation.jpg",
    heading: "Local SEO & Search Authority",
    para: `Dominate your local market and ensure you are the first choice when patients search for a "dentist near me." With 93% of all web traffic flowing through Google, we use specialized dental SEO and Google Business Profile optimization to rank your practice at the top. We focus on qualified local traffic to ensure more patients walk through your doors.`,
    icon: "/dental/high-conversion.svg",
  },
  {
    image: "/dental/custom-software-automation.jpg",
    heading: "Custom Software & Practice Automation",
    para: `Modernize your practice with tailored technology designed to streamline operations. From online appointment scheduling—which 77% of patients now prefer—to custom patient intake forms and automated reminder systems, we build tools that save your staff time, reduce no-shows, and provide a cutting-edge experience for your patients.`,
    icon: "/dental/high-conversion.svg",
  },
];
export default function OurSpecializedServices() {
  return (
    <section className="bg-[#F3F3F3] py-24">
      <Container>
        {/* Heading */}
        <HeadingTwo className="!text-[#020202] mb-10 text-center">
          Our Specialized Services
        </HeadingTwo>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20 relative">
          {/* vertical divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-[#8fb7c5]" />
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-px w-full bg-[#8fb7c5]" />
          {data.map((item) => (
            <div key={item.heading} className="text-black flex flex-col gap-5">
              <div>
                <Image
                  src={item.image}
                  alt={item.heading}
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-[300px] object-cover mb-8"
                />
              </div>
              <div className="flex flex-row gap-5 items-center">
                <div className="p-px h-[60px] rounded-full w-[60px] bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]">
                  <div className="bg-white rounded-full flex justify-center items-center h-full">
                    <Image
                      src={item.icon}
                      alt={item.heading}
                      width={40}
                      height={40}
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-xl text-black font-primary ">
                  {item.heading}
                </h3>
              </div>
              <p>{item.para}</p>
              <div>
                <Link
                  href="/"
                  className="text-white px-7 rounded-sm py-2 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"
                >
                  Get Service
                </Link>
              </div>
            </div>
          ))}

          {/* horizontal divider */}
          {/* <div className="hidden lg:block col-span-2 h-px bg-[#8fb7c5]" /> */}
        </div>
      </Container>
    </section>
  );
}
