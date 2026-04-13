import Image from "next/image";

const SKILLS = [
  { src: "/ceo/laravel.svg", label: "MERN Stack" },
  { src: "/ceo/wordpress.svg", label: "Next.js" },
  { src: "/ceo/visual-studio.svg", label: "React" },
  { src: "/ceo/vscode.svg", label: "Node.js" },
  { src: "/ceo/visual-studio.svg", label: "MongoDB" },
  { src: "/ceo/elementor.svg", label: "Python" },
  { src: "/ceo/xd.svg", label: "Django" },
  { src: "/ceo/shopify.svg", label: "Custom CRM Development" },
  { src: "/ceo/adobe-ai.svg", label: "AI-Optimised SEO" },
  { src: "/ceo/webflow.svg", label: "Dental Practice Software" },
  { src: "/ceo/figma.svg", label: "System Architecture" },
  { src: "/ceo/shopify.svg", label: "REST API Development" },
  { src: "/ceo/photoshop.svg", label: "CMS Development" },
  { src: "/ceo/laravel.svg", label: "Web Performance Optimisation" },
] as const;

function SkillPill({ skill }: { skill: (typeof SKILLS)[number] }) {
  return (
    <div className="shrink-0 px-9 py-3 flex gap-3 items-center border-[#075B65] border-2 rounded-full text-white">
      <Image
        src={skill.src}
        className="w-[30px] h-[30px]"
        alt={skill.label}
        width={30}
        height={30}
      />
      <p className="whitespace-nowrap">{skill.label}</p>
    </div>
  );
}

const Skills = () => {
  return (
    <div className="relative py-20">
      <div className="bg-radial from-[#00A1A5] to-[#075B65] blur-[120px] absolute w-[150px] h-[150px] -top-10 -left-10 pointer-events-none" />
      {/* <div className="max-w-[1770px] mx-auto px-5"> */}
      <div className="flex flex-col gap-4">
        {/* First marquee */}
        <div className="marquee-wrapper">
          <div
            className="marquee-content marquee-content--always-run gap-4"
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

        {/* Second marquee - reverse direction */}
        <div className="marquee-wrapper">
          <div
            className="marquee-content marquee-content--always-run marquee-content--reverse gap-4"
            style={{ animationDuration: "150s" }}
          >
            {SKILLS.map((skill, i) => (
              <SkillPill key={`c-${i}`} skill={skill} />
            ))}
            {SKILLS.map((skill, i) => (
              <SkillPill key={`d-${i}`} skill={skill} />
            ))}
          </div>
        </div>

      </div>
      {/* </div> */}
    </div>
  );
};

export default Skills;
