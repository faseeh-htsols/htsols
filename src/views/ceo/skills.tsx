import Image from "next/image";

const SKILLS = [
  { src: "/ceo/figma.svg", label: "Figma" },
  { src: "/ceo/wordpress.svg", label: "Wordpress" },
  { src: "/ceo/elementor.svg", label: "Elementor" },
  { src: "/ceo/vscode.svg", label: "VS Code" },
  { src: "/ceo/visual-studio.svg", label: "Visual Studio" },
  { src: "/ceo/photoshop.svg", label: "Photoshop" },
  { src: "/ceo/xd.svg", label: "Adobe XD" },
  { src: "/ceo/adobe-ai.svg", label: "Adobe Ai" },
  { src: "/ceo/shopify.svg", label: "Shopify" },
  { src: "/ceo/webflow.svg", label: "Web Flow" },
  { src: "/ceo/laravel.svg", label: "Laravel" },
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
    <div className="lg:pt-40 pt-20 relative">
      <div className="bg-radial from-[#00A1A5] to-[#075B65] blur-[120px] absolute w-[150px] h-[150px] -top-10 -left-10 pointer-events-none" />
      <div className="max-w-[1770px] mx-auto px-5">
        <div className="marquee-wrapper">
          <div
            className="marquee-content marquee-content--always-run gap-4"
            style={{ animationDuration: "22s" }}>
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

export default Skills;
