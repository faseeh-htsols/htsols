import Image from "next/image";

const marqueeClients = Array(8).fill("HTSOL INC.");
const LogosMarquee = () => {
  return (
    <div className="overflow-hidden bg-[#0E0E10] py-6">
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {marqueeClients.map((client, index) => (
            <div
              key={`set1-${index}`}
              className="inline-flex items-center gap-3 px-8">
              <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
                <Image
                  src={"/htsol-ball.svg"}
                  width={50}
                  height={50}
                  className="w-8 h-8"
                  alt="Htsols logo"
                />
              </div>
              <span className="text-white text-sm font-medium tracking-wider whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {marqueeClients.map((client, index) => (
            <div
              key={`set2-${index}`}
              className="inline-flex items-center gap-3 px-8">
              <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
                <Image
                  src={"/htsol-ball.svg"}
                  width={50}
                  height={50}
                  className="w-8 h-8"
                  alt="Htsols logo"
                />
              </div>
              <span className="text-white text-sm font-medium tracking-wider whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogosMarquee;
