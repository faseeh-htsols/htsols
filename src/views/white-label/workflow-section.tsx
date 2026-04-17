import ArrowLinkButton from "@/components/ui/arrow-link-button";
import Wrapper from "@/components/ui/wrapper";
import Image from "next/image";

type WorkflowCard = {
  title: string;
  description: string;
  iconSrc: string;
};

const workflowCards: WorkflowCard[] = [
  {
    title: "Branded Deliverables",
    description:
      "Every website, report, presentation, and deliverable we produce carries your agency's branding - not ours. Your logo, your colour scheme, your document templates. The work looks like it came from your team because, as far as your client is concerned, it did.",
    iconSrc: "/services/Frame1.svg",
  },
  {
    title: "Your Project Management Tools",
    description:
      "We do not ask you to adopt new software or change how you run projects. We slot into your existing workflow - updating your project management system, communicating through your preferred channels, and respecting your internal processes and sign-off structure.",
    iconSrc: "/services/Frame2.svg",
  },
  {
    title: "Clear Communication With Your Account Lead",
    description:
      "You have a dedicated point of contact at HTSOL throughout every project. No chasing multiple people. No delays in getting updates. You always know exactly where the project stands, what is coming next, and if anything needs your input.",
    iconSrc: "/services/Frame3.svg",
  },
  {
    title: "Milestone-Based Delivery",
    description:
      "Projects are broken into clear stages with agreed deliverables at each point. You review and approve before anything moves forward. Nothing gets sent to your client - even indirectly - without passing through you first.",
    iconSrc: "/services/Frame4.svg",
  },
];

const WhiteLabelWorkflowSection = () => {
  return (
    <section className="bg-black py-20 sm:py-24 lg:py-28">
      <Wrapper>
        <div className="mx-auto max-w-[1340px]">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_550px] lg:gap-16">
            <div className="max-w-[660px]">
              <h2 className="font-primary text-[30px] font-semibold uppercase leading-[1.04] tracking-[-0.04em] text-white sm:text-[36px] lg:text-[42px]">
                <span className="block">
                  A White Label Partner Who Works The Way You Work
                </span>
              </h2>

              <p className="mt-7 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text font-sans text-[15px] font-semibold uppercase leading-[1.3] tracking-[0.04em] text-transparent sm:text-[18px]">
                <span className="block">Your Workflow. Your Brand Standards.</span>
                <span className="mt-1 block">Our Execution.</span>
              </p>

              <p className="mt-7 max-w-[620px] text-[16px] leading-[1.55] text-white/76 sm:text-[17px]">
                We integrate into your existing agency workflow - not the other
                way around. Whether you use Slack, Asana, ClickUp, or email, we
                work within your systems, follow your naming conventions, and
                deliver to your brand guidelines.
              </p>
            </div>

            <div className="mt-2 w-full max-w-[550px] ml-auto lg:mt-0 lg:w-[550px]">
              <Image
                src="/services/work-duo-pic.png"
                alt="White label workflow preview"
                width={550}
                height={554}
                className="block h-auto w-full rounded-[18.06px] object-cover"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-[10px] lg:mt-16 lg:grid-cols-2">
            {workflowCards.map(({ title, description, iconSrc }) => (
              <div
                key={title}
                className="rounded-[18px] border border-[#00A1A5]/55 bg-[linear-gradient(180deg,rgba(40,40,40,0.92)_0%,rgba(27,27,27,0.96)_100%)] px-4 py-5 shadow-[0_18px_55px_rgba(0,0,0,0.22)] sm:px-[18px] sm:py-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#202020] ring-1 ring-[#00A1A5]/30">
                    <Image
                      src={iconSrc}
                      alt=""
                      width={18}
                      height={18}
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                  <h3 className="font-primary text-[20px]  uppercase leading-[1.05] tracking-[-0.03em] text-white sm:text-[18px]">
                    {title}
                  </h3>
                </div>

                <p className="mt-5 text-[15px] leading-[1.55] text-white/72 sm:text-[16px]">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center lg:mt-12">
            <ArrowLinkButton
              href="#white-label-form"
              variant="teal"
              className="h-[73px] w-full px-7 text-[13px] tracking-[0.05em] sm:w-auto sm:min-w-[520px] sm:text-[19px]"
            >
              Discuss How We Can Integrate With Your Team
            </ArrowLinkButton>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default WhiteLabelWorkflowSection;
