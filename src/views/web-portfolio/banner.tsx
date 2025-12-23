import Container from "@/components/ui/container";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-black relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-20 left-0">
        <Image
          src={"/left-gradient.png"}
          width={500}
          height={500}
          className="w-[350px] h-[350px]"
          alt="left gradient"
        />
      </div>
      <div className="absolute top-20 right-0">
        <Image
          src={"/right-gradient.png"}
          width={500}
          height={500}
          className="w-[350px] h-[350px]"
          alt="right gradient"
        />
      </div>
      <Container>
        <div className="flex flex-col items-center text-center gap-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-primary font-bold uppercase text-white  tracking-wide">
            Web Development
          </h1>

          <div className="w-full max-w-[1020px]">
            <div className="relative rounded-[28px] border border-white/10 bg-[#050505] p-3">
              <div className="relative h-[220px] sm:h-[320px] md:h-[420px] rounded-[22px] overflow-hidden">
                <Image
                  src="/web-dev.png"
                  alt="Web development preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 1020px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <button
                  type="button"
                  aria-label="Play preview"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/70 bg-black/40 shadow-[0_0_30px_rgba(0,0,0,0.6)]">
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 1.5L16 10L2 18.5V1.5Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
