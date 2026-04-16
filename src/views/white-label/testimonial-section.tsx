import Wrapper from "@/components/ui/wrapper";
import Image from "next/image";


const TestimonialSection = () => {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute left-[-1%] top-[2px] z-10 h-[8px] w-[102%] origin-left -rotate-[0.55deg] bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] sm:h-[9px] lg:h-[10px]"
        aria-hidden
      />

      <section className="relative overflow-hidden bg-black py-24 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,131,138,0.14)_0%,rgba(0,131,138,0.06)_24%,rgba(0,0,0,0)_58%)]" />

        <Wrapper>
          <div className="relative mx-auto max-w-[1120px] text-center">
            <h2 className="mx-auto max-w-[1060px] font-primary text-[32px] font-semibold uppercase leading-[1.03] tracking-[-0.045em] text-white sm:text-[42px] lg:text-[50px]">
              Loved By Digital Agencies Across Canada And The US!
            </h2>

            <div className="mt-10 flex justify-center">
              <Image
                src="/services/gold-stars.svg"
                alt="Five star rating"
                width={284}
                height={52}
                className="h-auto w-[220px] sm:w-[260px] lg:w-[284px]"
              />
            </div>

            <div className="mt-10 flex justify-center">
              <Image
                src="/quoteup.svg"
                alt=""
                width={48}
                height={48}
                className="h-[42px] w-[42px] sm:h-[45px] sm:w-[45px] lg:h-[48px] lg:w-[48px]"
              />
            </div>

            <div className="mx-auto mt-10 max-w-[980px] space-y-8 text-center text-[18px] leading-[1.55] text-white/92 sm:text-[21px] lg:text-[18px]">
              <p>
                Working with HtSolutions has been an incredible experience.
                They truly listened to our needs and delivered a stunning design
                that exceeded our expectations. We couldn&apos;t be happier with
                the final product!
              </p>
              <p>
                Working with HtSolutions has been an incredible experience.
                They truly listened to our needs and delivered a stunning design
                that exceeded our expectations.
              </p>
            </div>

            <div className="mt-10">
              <p className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text font-primary text-[28px] font-semibold uppercase leading-none tracking-[-0.03em] text-transparent sm:text-[30px] lg:text-[35px]">
                Alan Baker
              </p>
              <p className="mt-3 font-sans text-[18px] uppercase tracking-[0.08em] text-white sm:text-[20px]">
                CEO
              </p>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default TestimonialSection;
