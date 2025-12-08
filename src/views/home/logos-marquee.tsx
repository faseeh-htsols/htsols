const marqueeClients = Array(8).fill("HTSOL INC.");
const LogosMarquee = () => {
  return (
    <div className="overflow-hidden bg-black/50 py-6 border-t border-white/10">
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {/* First set */}
          {marqueeClients.map((client, index) => (
            <div
              key={`set1-${index}`}
              className="inline-flex items-center gap-3 px-8"
            >
              <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="8" cy="8" r="2" fill="currentColor" />
                </svg>
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
              className="inline-flex items-center gap-3 px-8"
            >
              <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="8" cy="8" r="2" fill="currentColor" />
                </svg>
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
