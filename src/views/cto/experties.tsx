import Image from "next/image";

const SKILLS = [
    { src: "/ceo/meta.svg", label: "Back-End Database Development", subLabel: "From: Meta" },
    { src: "/ceo/meta.svg", label: "Python Programming", subLabel: "From: Meta" },
    { src: "/ceo/meta.svg", label: " Django Web Framework", subLabel: "From: Meta" },
    { src: "/ceo/bsc.svg", label: "B.E. Avionics Engineering", subLabel: "From: PAF Karachi Institute of Economics and Technology" },
    { src: "/ceo/hubspot.svg", label: "Chief Technology Officer", subLabel: "From: HTSOL Inc. — Since Dec 2024" },
] as const;

function SkillPill({ skill }: { skill: (typeof SKILLS)[number] }) {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <div className="shrink-0 rounded-[5px] p-px bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]">
                <div className="px-9 py-3 flex gap-3 items-center rounded-[5px] bg-white text-white ">
                    <Image
                        src={skill.src}
                        className="w-[70px] h-[30px]"
                        alt={skill.label}
                        width={30}
                        height={30}
                    />
                </div>
            </div>
            <p className="whitespace-nowrap text-[20px]">{skill.label}</p>
            <p className="whitespace-nowrap text-[16px] text-[#FFFFFF99]">{skill.subLabel}</p>
        </div>
    );
}

const Experties = () => {
    return (
        <div className="relative py-20">
            <div className="bg-black" />
            <div className="max-w-[1570px] mx-auto px-5">
                {/* Marquee */}
                <div className="marquee-wrapper">
                    <div
                        className="marquee-content marquee-content--always-run gap-9 md:gap-18"
                        style={{ animationDuration: "150s" }}
                    >
                        {SKILLS.map((skill, i) => (
                            <SkillPill key={`a-${i}`} skill={skill} />
                        ))}
                        {SKILLS.map((skill, i) => (
                            <SkillPill key={`b-${i}`} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experties;
