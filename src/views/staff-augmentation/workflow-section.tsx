import ArrowLinkButton from "@/components/ui/arrow-link-button";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Wrapper from "@/components/ui/wrapper";
import Image from "next/image";

type WorkflowCard = {
  title: string;
  description: string;
  iconSrc: string;
};

const workflowCards: WorkflowCard[] = [
  {
    title: "Works Inside Your Tools",
    description:
      "Your Slack, your Jira, your Asana, your Figma, your GitHub — whatever your team runs on, your HTSOL resource works inside it from day one. No new software to learn. No separate communication channels to manage.",
    iconSrc: "/staff-augmentation/talent-icon-1.svg",
  },
  {
    title: "Your Hours, Your Standups",
    description:
      "Your HTSOL resource works the hours you set, attends the meetings you run, and follows the sprint cycles, review processes, and team rhythms you have already established.",
    iconSrc: "/staff-augmentation/talent-icon-2.svg",
  },
  {
    title: "Direct Communication",
    description:
      "You manage the person directly. No account manager in between. No weekly status call with a middleman. You communicate with your resource the same way you communicate with anyone else on your team.",
    iconSrc: "/staff-augmentation/talent-icon-3.svg",
  },
  {
    title: "Fast to Start. Easy to Scale.",
    description:
      "Most HTSOL resources can start within five business days. If your workload increases, we scale up. If a project wraps, you scale back down — no recruitment process, no notice period, no severance risk.",
    iconSrc: "/staff-augmentation/talent-icon-4.svg",
  },
];

const WhiteLabelWorkflowSection = () => {
  return (
    <section className="bg-black py-20 md:pt-20 md:pb-28">
      <Container>
        <div className="text-center">
          <HeadingTwo className="text-center">
            Talent That Feels Like Your Team — Because It Is
          </HeadingTwo>

          <p className="mx-auto mt-8 w-full md:max-w-[90%] leading-[1.7] text-[#FFFFFFCC]">
            Staff augmentation is not outsourcing. You are adding a skilled professional to your existing team — someone who works inside your operation, follows your lead, and gets things done the way you want them done.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:gap-6 md:mt-16 md:grid-cols-2">
          {workflowCards.map(({ title, description, iconSrc }) => (
            <div
              key={title}
              className="rounded-[18px] border border-[#00A1A5]/55 bg-[linear-gradient(180deg,#0F0F0F_0%,#1F1F1F_100%)] px-4 py-5 shadow-[0_18px_55px_rgba(0,0,0,0.22)] sm:px-[18px] sm:py-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#FFFFFF1A] ">
                  <Image
                    src={iconSrc}
                    alt=""
                    width={18}
                    height={18}
                    className="h-[26px] w-[26px]"
                  />
                </div>
                <h3 className="font-primary text-[20px]  uppercase leading-[1.05] tracking-[-0.03em] text-white sm:text-[18px]">
                  {title}
                </h3>
              </div>

              <p className="mt-5 leading-[1.55] text-[#FFFFFFCC] ">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <ArrowLinkButton
            href="#white-label-form"
            variant="teal"
            className="h-[73px] w-fit px-7 text-[13px] tracking-[0.05em] md:min-w-[220px] sm:text-[19px]"
          >
            tell us what role you need
          </ArrowLinkButton>
        </div>
      </Container>
    </section>
  );
};

export default WhiteLabelWorkflowSection;
