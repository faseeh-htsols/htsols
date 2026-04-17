import SharedFAQSection from "../home/FAQSection";

const whiteLabelFaqs = [
  {
    question: "Do you offer fixed pricing or white label retainers?",
    answer:
      "Yes. We can work on a per-project basis, through monthly retainers, or as an ongoing delivery partner depending on how your agency sells and scopes work. We align the model with your workflow instead of forcing one structure on every partner.",
  },
  {
    question: "How does communication work once we start collaborating?",
    answer:
      "We work inside the channels and systems you already use, whether that is email, Slack, ClickUp, or another project management setup. You stay in control of the client relationship while we keep delivery organised, responsive, and easy to track.",
  },
  {
    question: "Can you work under our brand and stay invisible to our clients?",
    answer:
      "Yes. That is the point of the partnership. We deliver under your brand, follow your direction, and do not place our name on work produced for your agency unless you explicitly request it.",
  },
  {
    question: "What services can you deliver as a white label partner?",
    answer:
      "We support website design and development, SEO delivery, paid ads support, reporting, content execution, branding, and custom digital work. The exact mix depends on your agency model and where you need the most execution capacity.",
  },
] as const;

const WhiteLabelFAQSection = () => {
  return (
    <SharedFAQSection
      faqs={[...whiteLabelFaqs]}
      heading={true}
      form={true}
      bgColor="black"
      accordionbgtransparent={true}
      curveLine={false}
      defaultOpenIndex={1}
    />
  );
};

export default WhiteLabelFAQSection;
