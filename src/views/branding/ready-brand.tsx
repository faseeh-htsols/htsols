import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";

type ReadyBrandData = {
  title: string;
  para: string;
  btnText: string;
  btnLink: string;
};

const ReadyBrand = ({ data }: { data: ReadyBrandData }) => {
  return (
    <section className="bg-black py-20 lg:py-28">
      <Container>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[10px] border border-white/35 bg-[linear-gradient(90deg,#328A99_0%,#00838A_50%,#075B65_100%)] px-5 py-12 md:px-10 md:py-16">
          <div className="pointer-events-none absolute right-0 top-0 h-[480px] w-[280px] bg-[url('/top-effect.webp')] bg-contain bg-no-repeat" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-[180px] w-[180px] bg-[url('/bottom-effect.webp')] bg-contain bg-no-repeat" />

          <div className="relative mx-auto max-w-[860px] text-center">
            <h3 className="font-primary text-[26px] font-semibold uppercase leading-tight text-white md:text-[36px] lg:text-[42px]">
              {data.title}
            </h3>

            <p className="mx-auto mt-6 max-w-[780px] text-sm leading-relaxed text-white md:text-base">
              {data.para}
            </p>

            <div className="mt-8 flex justify-center">
              <Button variant="white" href={data.btnLink}>
                {data.btnText}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReadyBrand;
