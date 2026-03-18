interface ListItem {
  title?: string;
  para: string;
}

interface AccordionItemType {
  title: string;
  icon: string;
  images?: { src: string; alt: string }[];
  subHeading?: string;
  para: string;
  subHeading2?: string;
  botPara?: string;
  lists?: ListItem[];
  lists2?: ListItem[];
}

export const SERVICES_SERVICES_OFFERED_ACCORDION: AccordionItemType[] = [
  {
    title: "CGI Services",
    icon: "/services/tab-icon.svg",
    subHeading: "Unlock the Power of High-Quality Visuals for Your Business",
    para: "At HTSOL Inc., we specialize in <b>CGI (Computer-Generated Imagery)</b> that transforms ideas into visually captivating realities. Whether you're in need of realistic 3D visualizations, animated models, or immersive environments, our CGI services are tailored to elevate your brand and make a lasting impact on your audience.",
    subHeading2: "What We Offer:",
    lists: [
      {
        title: `3D Modelling & Animation`,
        para: `Bring your concepts to life with high-quality 3D models and animations that communicate your ideas clearly.`,
      },
      {
        title: `Product Visualization`,
        para: `Showcase your products with hyper-realistic CGI, allowing your customers to explore every detail before purchase.`,
      },
      {
        title: `Architectural Rendering`,
        para: `Create photorealistic images of your architectural projects, helping stakeholders visualize the final result even before construction begins.`,
      },
      {
        title: `Virtual Reality (VR) Experiences`,
        para: `Engage your audience with interactive VR environments that offer unique, hands-on experiences.`,
      },
      {
        title: `Motion Graphics`,
        para: `Enhance your videos and presentations with stunning motion graphics that capture attention and deliver your message effectively.`,
      },
    ],
  },
  {
    title: "Staff Augmentation",
    icon: "/services/tab-icon.svg",
    subHeading: "Get the Right Talent to Fuel Your Success",
    para: "Finding the right team for your project can be challenging, but HTSOL Inc. makes it easy with <b>Staff Augmentation</b> services that provide you with access to skilled professionals when and where you need them. Whether you're looking to expand your team temporarily or require specialized expertise, we offer customized solutions to meet your unique business needs.",
    subHeading2: "Our Staff Augmentation Services Include:",
    lists: [
      {
        title: `Flexible Workforce Solutions`,
        para: `Scale your team up or down based on project needs, timelines, and budget.`,
      },
      {
        title: `Highly Skilled Professionals`,
        para: `Access top talent across various domains, including software development, digital marketing, design, and project management.`,
      },
      {
        title: `Seamless Integration`,
        para: `Our professionals integrate smoothly into your existing teams, working in alignment with your company culture and processes.`,
      },
      {
        title: `Expertise Across Industries`,
        para: `From healthcare to eCommerce, our experts bring valuable industry insights that can drive growth and innovation.`,
      },
    ],
  },
  {
    title: "Digital Transformation",
    icon: "/services/tab-icon.svg",
    subHeading: "Embrace the Future with Innovative Solutions",
    para: "In today’s fast-paced digital world, staying ahead requires more than just keeping up—it requires <b>Digital Transformation.<b/> At HTSOL Inc., we help businesses evolve by adopting digital technologies that streamline operations, enhance customer experiences, and drive growth. Our team of experts will guide you through every step of the transformation journey, ensuring your business is future-ready.",
    subHeading2: "Our Digital Transformation Services Include:",
    lists: [
      {
        title: `Business Process Automation`,
        para: `Streamline your workflows and reduce operational costs by automating manual tasks and processes.`,
      },
      {
        title: `Cloud Solutions`,
        para: `Transition your business to the cloud for improved accessibility, collaboration, and scalability.`,
      },
      {
        title: `Data Analytics`,
        para: `Leverage data to make smarter, more informed decisions that drive performance and enhance customer experiences.`,
      },
      {
        title: `Custom Software Development`,
        para: `Build tailored software solutions that address your unique business needs and improve efficiency.`,
      },
      {
        title: `Mobile App Development`,
        para: `Stay connected with your customers through innovative mobile apps designed to enhance user experience and engagement.`,
      },
    ],
  },
  {
    title: "Digital Marketing Strategy Development",
    icon: "/services/tab-icon.svg",
    para: "A well-crafted plan makes everything else easier. We begin with a thorough audit of your digital presence and competitive landscape. Then, we build a channel-specific strategy designed to drive lead generation, engagement, and conversions.",
    subHeading2: "What to expect:",
    lists: [
      {
        para: `Clear insights into what's working and what needs improvement`,
      },
      {
        para: `Priorities aligned with your business goals and timeline`,
      },
      {
        para: `A strategy focused on long-term growth, not just quick wins`,
      },
    ],
  },
  {
    title: "Search Engine Optimization (SEO)",
    icon: "/services/tab-icon.svg",
    para: "SEO is more than just adding keywords. We combine AI-powered automation with proven SEO techniques to enhance your visibility in organic search results.",
    subHeading2: "Our approach covers:",
    lists: [
      {
        para: `Technical and on-page improvements to ensure search engines can properly index your site`,
      },
      {
        para: `Content updates that put real users first`,
      },
      {
        para: `Local and global strategies to reach the right audience`,
      },
      {
        para: `Ongoing adjustments to adapt to evolving search algorithms`,
      },
    ],
  },
  {
    title: "Social Media Marketing",
    icon: "/services/tab-icon.svg",
    para: "Social Media Marketing should be intentional and consistent. We ensure your presence is clear and effective across platforms like Facebook, Instagram, LinkedIn, and Twitter, with messaging tailored to your brand and audience.",
    subHeading2: "Our approach includes:",
    lists: [
      {
        para: `Audience insights`,
      },
      {
        para: `Competitor benchmarking`,
      },
      {
        para: `Proven methods that deliver measurable growth without gimmicks`,
      },
    ],
  },
  {
    title: "PPC Campaign Management",
    icon: "/services/tab-icon.svg",
    para: "Effective PPC campaigns require strategic budget allocation and continuous optimization. We specialize in building targeted Pay-Per-Click campaigns on Google Ads and Facebook Ads, using testing to refine performance.",
    subHeading2: "Services include:",
    lists: [
      {
        para: `In-depth keyword research to target high-intent searches`,
      },
      {
        para: `Ad structures and targeting aligned with buyer behavior`,
      },
      {
        para: `Ongoing testing, including A/B testing, to optimize performance over time`,
      },
      {
        para: `Continuous refinements to drive qualified leads and conversions`,
      },
    ],
  },
  {
    title: "Web Design & Development",
    icon: "/services/tab-icon.svg",
    para: "Your website should be easy to navigate and trust. At HTSOL Inc., we build mobile-friendly, user-centric websites designed to guide visitors smoothly toward their goals. <br/><br/>Whether you're starting from scratch or revamping an existing site, we focus on:",
    lists: [
      {
        para: `A structure that reinforces your brand identity and business goals`,
      },
      {
        para: `Websites optimized for search engines`,
      },
      {
        para: `Intuitive navigation and clear calls-to-action`,
      },
      {
        para: `A seamless user experience on all devices`,
      },
    ],
  },
  {
    title: "Ecommerce Development & Marketing",
    icon: "/services/tab-icon.svg",
    para: `When it comes to eCommerce, details matter. We specialize in developing custom eCommerce websites and supporting strategies that simplify the shopping experience and help your store perform consistently.
    <br/><br/>
    We develop on platforms like:
  `,
    lists: [
      {
        para: `Shopify, WooCommerce, and Magento`,
      },
    ],
    botPara: `To drive growth, we provide:`,
    lists2: [
      {
        para: `Targeted eCommerce SEO and PPC campaigns tailored to online retail success`,
      },
      {
        para: `Conversion optimization based on real customer behavior`,
      },
    ],
  },
  {
    title: "Content Marketing",
    icon: "/services/tab-icon.svg",
    para: `Great content should engage and inform—not just fill space. Our team creates high-quality, SEO-optimized content that resonates with both your audience and search engines.
    <br/><br/>
    We assist with:
  `,
    lists: [
      {
        para: `Blog posts and articles`,
      },
      {
        para: `Landing pages`,
      },
      {
        para: `Video scripts`,
      },
      {
        para: `Messaging that aligns with your brand voice`,
      },
    ],
  },
  {
    title: "Technical SEO",
    icon: "/services/tab-icon.svg",
    para: `Even the best content can be hindered by technical issues. Our Technical SEO services ensure your website runs smoothly and is fully optimized for search engines.
    <br/><br/>
    We focus on:
  `,
    lists: [
      {
        para: `Fixing crawl errors`,
      },
      {
        para: `Speeding up page load times`,
      },
      {
        para: `Resolving indexing issues to ensure complete search engine visibility`,
      },
      {
        para: `Addressing duplicate content and improving site architecture`,
      },
    ],
  },
  {
    title: "Email Marketing",
    icon: "/services/tab-icon.svg",
    para: `Email marketing is most effective when it feels relevant and personal. We help you connect with your audience, converting interest into lasting relationships.
    <br/><br/>
    Our services include:
  `,
    lists: [
      {
        para: `Building segmented email lists`,
      },
      {
        para: `Crafting compelling, natural-sounding messages`,
      },
      {
        para: `Improving open and click-through rates through testing and refinement`,
      },
    ],
  },
  {
    title: "Online Reputation Management (ORM)",
    icon: "/services/tab-icon.svg",
    para: `Your online reputation is often the first impression people have of your business. With ORM, we help you stay on top of reviews and feedback in a professional and proactive manner.
    <br/><br/>
    We offer:
  `,
    lists: [
      {
        para: `Monitoring reviews on key platforms`,
      },
      {
        para: `Thoughtful and consistent responses`,
      },
      {
        para: `Managing your presence on review sites and social media`,
      },
      {
        para: `Ongoing support to maintain a positive online reputation`,
      },
    ],
  },
  {
    title: "AI-Driven Marketing Solutions",
    icon: "/services/tab-icon.svg",
    para: `AI is a powerful tool when used wisely. At HTSOL Inc., we incorporate AI into our marketing strategies to improve decision-making and efficiency without replacing the human touch.
    <br/><br/>
    We use AI for:
  `,
    lists: [
      {
        para: `Predictive analytics to spot trends and opportunities`,
      },
      {
        para: `Personalized content recommendations`,
      },
      {
        para: `Data-backed insights to optimize time and budget allocation`,
      },
    ],
  },
  {
    title: "Franchise SEO",
    icon: "/services/tab-icon.svg",
    para: `Franchises face unique challenges, especially with multiple locations to manage. Our Franchise SEO service ensures local visibility while maintaining consistency across all franchise pages.
    <br/><br/>
    Services include:
  `,
    lists: [
      {
        para: `AI-driven insights to find local opportunities`,
      },
      {
        para: `Optimizing both corporate sites and individual franchise locations`,
      },
      {
        para: `Boosting visibility in organic search results`,
      },
      {
        para: `Ensuring consistent branding and visibility across all locations`,
      },
    ],
  },
];

export const SERVICES_WHY = [
  {
    icon: "/services/why-icon-1.svg",
    heading: "Proven Track Record of Success",
    para: "We don’t rely on vague promises. Instead, we focus on tracking real performance metrics like lead quality, conversions, and revenue growth. With HTSOL, you’ll always see measurable progress.",
  },
  {
    icon: "/services/why-icon-2.svg",
    heading: "Custom Strategies Tailored to Your Business",
    para: "Every business is unique. That's why we craft strategies tailored specifically to your industry, goals, and target audience. When you need flexibility, we adapt our approach to meet your changing priorities.",
  },
  {
    icon: "/services/why-icon-3.svg",
    heading: "Human-Driven AI",
    para: "While AI can enhance efficiency, all our decisions are still made by experienced professionals. Our strategies, messaging, and priorities are always human-led to ensure your brand’s voice remains authentic.",
  },
  {
    icon: "/services/why-icon-2.svg",
    heading: "Cross-Industry Expertise",
    para: "We support businesses across various industries, including healthcare and eCommerce. This diverse experience helps us recognize challenges quickly while respecting what makes your business special.",
  },
  {
    icon: "/services/why-icon-3.svg",
    heading: "Competitive Pricing",
    para: "Your budget matters, and we're here to offer flexible pricing options that align with your goals. We ensure you get the best value without overcommitting.",
  },
];

export const SERVICES_FAQS = [
  {
    question:
      "How do I know which digital marketing service my business actually needs?",
    answer:
      "We begin by having a discovery conversation with you and reviewing your current performance. From there, we recommend the channels that best align with your goals, budget, and timeline. We won’t push services you don’t need.",
  },
  {
    question: "How long does it take to see results from SEO in Canada?",
    answer:
      "Generally, businesses start seeing measurable results within 3 to 6 months. However, this can vary depending on factors like local competition, your website's health, and demand in your industry.",
  },
  {
    question: "Can you work with our in-house marketing or development team?",
    answer:
      "Absolutely. We often collaborate with internal teams, acting as an extension of your staff. Whether it's offering strategy, technical support, or specialized expertise, we’re here to help however you need us.",
  },
  {
    question:
      "What’s the difference between hiring staff augmentation and outsourcing a project?",
    answer:
      "With staff augmentation, we integrate our professionals directly into your team, giving you more control while filling in skill gaps. Outsourcing, on the other hand, means we take full ownership of the project, handling everything from start to finish.",
  },
  {
    question:
      "Do small businesses benefit from digital transformation, or is it only for large companies?",
    answer:
      "In fact, small and mid-sized businesses often see the biggest benefits. Automation and better workflows save time, cut costs, and enhance the customer experience right away.",
  },
  {
    question:
      "How can CGI help my business generate more sales?",
    answer:
      "CGI helps your customers visualize products, spaces, or concepts before they commit to a purchase. This boosts confidence, speeds up decision-making, and often leads to higher conversion rates, especially in real estate, manufacturing, and eCommerce.",
  },
  {
    question:
      "Will switching to a new website affect my Google rankings?",
    answer:
      "When done right, a website redesign can actually protect and sometimes improve your rankings. We ensure proper redirects, technical SEO, and structure to keep your traffic intact during the migration.",
  },
  {
    question:
      "How do you measure whether marketing campaigns are actually working?",
    answer:
      "We track the key metrics that matter: qualified leads, cost per acquisition, conversion rates, and revenue trends, not just impressions or clicks. You’ll always get clear, honest reporting.",
  },
  {
    question: "Can you support businesses operating in multiple cities or provinces?",
    answer:
      "Yes, we create tailored strategies for each region while keeping your brand consistent. This is particularly important for franchises and multi-location businesses across Canada.",
  },
  {
    question: "What budget should a business realistically start with?",
    answer:
      "Budgets vary based on goals and competition, but we help you prioritize the most impactful actions first. Many clients start with a focused plan and expand once we have performance data to support that growth.",
  },
];

export const SERVICE_BUISNESS = [
  {
    heading: "Comprehensive Audits",
    image: "/website/service-icon-2.svg",
    para: "We assess what’s working and identify any roadblocks.",
  },
  {
    heading: "Practical Roadmap",
    image: "/website/service-icon-2.svg",
    para: "A clear, actionable plan—no jargon, just a path forward.",
  },
  {
    heading: "Continuous Improvements",
    image: "/website/service-icon-3.svg",
    para: "We help drive qualified leads, conversions, and long-term growth.",
  },
];

export const SEO_FAQS = [
  {
    question:
      "Why does my website show on Google sometimes but disappear other days?",
    answer:
      "Search rankings fluctuate due to algorithm updates, competitors updating content, or indexing changes. If your site lacks authority or consistent optimisation, it can temporarily rank and then drop. A stable SEO strategy helps maintain consistent visibility instead of short spikes.",
  },
  {
    question: "I get website traffic but no calls or leads. What’s going wrong?",
    answer:
      "Traffic alone does not guarantee conversions. Often the keywords attract the wrong audience or the page does not answer the visitor’s intent clearly. Improving content relevance, layout, and calls-to-action usually fixes this issue.",
  },
  {
    question: "My competitors rank higher even though their website looks worse than mine. Why?",
    answer:
      "Google ranks relevance and trust, not design quality. Older domains, stronger backlinks, and better keyword targeting often outweigh visual appearance. SEO focuses on credibility signals search engines can measure.",
  },
  {
    question:
      "Does changing my website design hurt my Google rankings?",
    answer:
      "It can if URLs, content structure, or internal links change without proper redirects. Many redesigns accidentally remove SEO value built over years. Careful migration planning protects rankings during updates.",
  },
  {
    question:
      "Why is my Google Business Profile visible in one city but not nearby towns?",
    answer:
      "Local rankings depend on proximity, relevance, and local signals like reviews and location pages. Without targeted optimisation for each service area, Google limits visibility outside your immediate location.",
  },
  {
    question:
      "Can negative reviews affect my search ranking?",
    answer:
      "Yes, indirectly. Poor reviews reduce trust and lower engagement rates, which can impact local visibility. Responding professionally and improving review volume often improves both reputation and rankings.",
  },
  {
    question:
      "How long does it take to recover from a ranking drop?",
    answer:
      "Recovery depends on the cause. Technical issues may take weeks after fixes, while authority losses can take months. Consistent optimisation and monitoring help prevent repeated drops.",
  },
  {
    question:
      "Why does my paid advertising work but SEO doesn’t?",
    answer:
      "Paid ads appear instantly because you pay for placement. SEO requires proving relevance and trust over time. Once established, organic traffic continues without ongoing ad spend.",
  },
  {
    question: "Do I need different pages for different Canadian cities I serve?",
    answer:
      "Usually yes. Google prefers location-specific pages that clearly explain services for each area. A single generic page rarely ranks across multiple cities competitively.",
  },
  {
    question: "Can AI tools write all my website content for SEO?",
    answer:
      "AI can help draft content, but search engines still prioritise expertise, accuracy, and usefulness. Human editing, local relevance, and experience-based information are needed for reliable rankings.",
  },
];

export const WEB_DEV_FAQS = [
  {
    question:
      "How much does it cost to hire a Web Development Company in Canada?",
    answer:
      "Costs vary based on pages, features, content work, and integrations. A good quote should break down scope clearly so you know what you are paying for and what you are not.",
  },
  {
    question:
      "How long does a typical website build take from kickoff to launch?",
    answer:
      "Timelines usually depend on approvals and how quickly content is ready. A clear project plan with milestones helps you avoid slowdowns and last-minute surprises.",
  },
  {
    question:
      "Will I own my domain, hosting, and website when the project is finished?",
    answer:
      "You should. Make sure your business controls the domain registrar account and has admin access to hosting, CMS, and key logins so you are never locked out later.",
  },
  {
    question:
      "Can a redesign hurt my rankings even if the new site looks better?",
    answer:
      "Yes, it can if URLs, content, internal links, or tracking change without a plan. A proper migration approach protects key pages, redirects, and measurement so you can recover faster.",
  },
  {
    question:
      "Why is my current site slow even though it is not \"big\"?",
    answer:
      "Common causes are heavy images, too many scripts, poorly built themes or plugins, and weak hosting. A performance audit can identify the biggest bottleneck instead of guessing.",
  },
  {
    question:
      "Do I need to write all the website copy myself before we start?",
    answer:
      "Not always. Many businesses start with existing pages, notes, and competitor examples, then refine messaging during the project so the final copy sounds clear and credible.",
  },
  {
    question: "What ongoing costs should I expect after launch?",
    answer:
      "Most sites still need hosting, renewals, updates, and occasional fixes. A simple maintenance plan can prevent security issues and unexpected downtime when something breaks.",
  },
  {
    question:
      "Should I choose Shopify, WooCommerce, or a bespoke e-commerce build?",
    answer:
      "It depends on how you manage products, payments, shipping, and reporting. The right choice is the one your team can run reliably without constant developer help.",
  },
  {
    question:
      "Will a new website automatically bring in more leads?",
    answer:
      "A new site helps, but results usually come from matching the site to intent, improving offer clarity, and tracking what visitors do. Without measurement, it is hard to know what is working.",
  },
  {
    question:
      "For ads, should I send people to my homepage or a dedicated landing page?",
    answer:
      "For many campaigns, a focused landing page converts better because it removes distractions and matches the ad. In trust-heavy services, you may still want easy access to proof pages from that landing page.",
  },
];

export const DELIVERING_SOLUTIONS = [
  {
    name: "OPTIMIZE",
    para: "Marketing Processes",
    image: "/about-us/optimize.json",
  },
  {
    name: "GENERATE",
    para: "Targeted Results ",
    image: "/about-us/generate.json",
  },
  {
    name: "GROW",
    para: "Your Brand Online",
    image: "/about-us/grow.json",
  },
];
export const TEAM = [
  {
    name: "Alex Johnson",
    image: "/about-us/alex.webp",
    designation: "CEO & Founder",
  },
  {
    name: "Emma Wilson",
    image: "/about-us/emma.webp",
    designation: "CTO & Co-Founder",
  },
  {
    name: "John Smith",
    image: "/about-us/john.webp",
    designation: "Lead Developer",
  },
  {
    name: "Marco Rossi",
    image: "/about-us/marco.webp",
    designation: "Senior Developer",
  },
];
export const CEO_ACHIEVEMENTS = [
  {
    number: " 150%",
    name: "Lead Growth",
    para: "Engineered high-performance apps that turn traffic into customers.",
  },
  {
    number: "40%",
    name: "Faster Launch",
    para: "Rapid MVP development to get your SaaS to market ahead of schedule.",
  },
  {
    number: "7+",
    name: "Years Scalability",
    para: "Proven full-stack expertise in building products that grow with you.",
  },
];
export const WHY_HIRE_ME_CEO = [
  {
    // icon: "/ceo/full-stack-architecture.json",
    icon: "/services/why-icon-1.svg",
    heading: "Scalable Full-Stack Architecture",
    para: "I lead the development of robust ecosystems using Next.js and Node.js, ensuring your platform is engineered to handle massive growth while maintaining peak performance.",
  },
  {
    // icon: "/ceo/strategic-custom-solutions.json",
    icon: "/services/why-icon-2.svg",
    heading: "Strategic Custom Solutions",
    para: "By combining TypeScript and Express.js, I translate complex business requirements into secure, high-speed software solutions that drive measurable ROI.",
  },
  {
    // icon: "/ceo/cutting-edge.json",
    icon: "/services/why-icon-3.svg",
    heading: "Cutting-Edge User Experiences",
    para: "I leverage Three.js and React to build immersive, future-proof interfaces that set your brand apart and keep you ahead of the digital competition.",
  },
];

export const INDUSTRIES_I_SERVE_CEO = [
  {
    name: "Education",
    image: "/ceo/education.svg",
  },
  {
    name: "Healthcare",
    image: "/ceo/healthcare.svg",
  },
  {
    name: "E-commerce",
    image: "/ceo/ecommerence.svg",
  },
  {
    name: "Travel",
    image: "/ceo/travel.svg",
  },
  {
    name: "Construction",
    image: "/ceo/construction.svg",
  },
  {
    name: "Fitness",
    image: "/ceo/fitness.svg",
  },
  {
    name: "Food",
    image: "/ceo/food.svg",
  },
  {
    name: "Insurance",
    image: "/ceo/insurance.svg",
  },
  {
    name: "Automotive",
    image: "/ceo/automotive.svg",
  },
  {
    name: "Real Estate",
    image: "/ceo/realstate.svg",
  },
];
export const HOW_WE_HELP_HOME = [
  {
    name: "Healthcare practices and clinics",
    image: "/ceo/education.svg",
  },
  {
    name: "Professional services ",
    image: "/ceo/healthcare.svg",
  },
  {
    name: "E-commerce and retail",
    image: "/ceo/ecommerence.svg",
  },
  {
    name: "Construction and trades",
    image: "/ceo/travel.svg",
  },
  {
    name: "SaaS and technology startups ",
    image: "/ceo/construction.svg",
  },
  {
    name: "Local service providers",
    image: "/ceo/fitness.svg",
  },
  {
    name: "Legal marketing  (law firms and lawyers)",
    image: "/ceo/food.svg",
  },
  {
    name: "Marketing Agencies",
    image: "/ceo/automotive.svg",
  },
  {
    name: "Software Companies  ",
    image: "/ceo/insurance.svg",
  },
  {
    name: "Dental Practices and Dentists",
    image: "/ceo/realstate.svg",
  },
];
export const CLIENT_SAY_ABOUT_CEO = [
  {
    para: "Working with Muhammad Faseeh Ullah has helped us a lot. Their AI solutions helped us automate the online customer support, which helped us focus on the other core business responsibilities.",
    image: "/ceo/abraham.webp",
    name: "Abraham",
    designation: "CEO | Tech Innovators",
  },
  {
    para: "Working with Muhammad Faseeh Ullah has helped us a lot. Their AI solutions helped us automate the online customer support, which helped us focus on the other core business responsibilities.",
    image: "/ceo/abraham.webp",
    name: "Abraham",
    designation: "CEO | Tech Innovators",
  },
  {
    para: "Working with Muhammad Faseeh Ullah has helped us a lot. Their AI solutions helped us automate the online customer support, which helped us focus on the other core business responsibilities.",
    image: "/ceo/abraham.webp",
    name: "Abraham",
    designation: "CEO | Tech Innovators",
  },
  {
    para: "Working with Muhammad Faseeh Ullah has helped us a lot. Their AI solutions helped us automate the online customer support, which helped us focus on the other core business responsibilities.",
    image: "/ceo/abraham.webp",
    name: "Abraham",
    designation: "CEO | Tech Innovators",
  },
  {
    para: "Working with Muhammad Faseeh Ullah has helped us a lot. Their AI solutions helped us automate the online customer support, which helped us focus on the other core business responsibilities.",
    image: "/ceo/abraham.webp",
    name: "Abraham",
    designation: "CEO | Tech Innovators",
  },
  {
    para: "Working with Muhammad Faseeh Ullah has helped us a lot. Their AI solutions helped us automate the online customer support, which helped us focus on the other core business responsibilities.",
    image: "/ceo/abraham.webp",
    name: "Abraham",
    designation: "CEO | Tech Innovators",
  },
  {
    para: "Working with Muhammad Faseeh Ullah has helped us a lot. Their AI solutions helped us automate the online customer support, which helped us focus on the other core business responsibilities.",
    image: "/ceo/abraham.webp",
    name: "Abraham",
    designation: "CEO | Tech Innovators",
  },
  {
    para: "Working with Muhammad Faseeh Ullah has helped us a lot. Their AI solutions helped us automate the online customer support, which helped us focus on the other core business responsibilities.",
    image: "/ceo/abraham.webp",
    name: "Abraham",
    designation: "CEO | Tech Innovators",
  },
  {
    para: "Working with Muhammad Faseeh Ullah has helped us a lot. Their AI solutions helped us automate the online customer support, which helped us focus on the other core business responsibilities.",
    image: "/ceo/abraham.webp",
    name: "Abraham",
    designation: "CEO | Tech Innovators",
  },
];
export const BOLG_CURATE_CEO = [
  {
    image: "/ceo/blog-one.webp",
    slug: "/blog",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    image: "/ceo/blog-two.webp",
    slug: "/blog",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    image: "/ceo/blog-three.webp",
    slug: "/blog",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];
export const NAV_ITEMS = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Services",
    link: "/services",
    drop: true,
    subItems: [
      {
        name: "Website Development",
        link: "/services/website-development",
      },
      {
        name: "SEO services",
        link: "/services/seo-services",
      },
      {
        name: "CGI services",
        link: "/services/cgi",
      },
      {
        name: "Staff Augmentation",
        link: "/services/staff-augmentation",
      },
      {
        name: "Digital Transformation",
        link: "/services/digital-transformation",
      },
      {
        name: "Digital Marketing",
        link: "/services/digital-marketing",
      },
    ],
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    name: "About CEO",
    link: "/ceo",
  },
  {
    name: "About CTO",
    link: "/cto",
  },
];
export const WEBSITE_NEEDS_BUISNESS = [
  {
    image: "/website/1.json",
    para: "Marketing websites that generate leads",
  },
  {
    image: "/website/2.json",
    para: "Service business websites built around bookings and inquiries",
  },
  {
    image: "/website/3.json",
    para: "Corporate websites with strong structure and content",
  },
  {
    image: "/website/1.json",
    para: "E-commerce sites designed for conversion and retention",
  },
  {
    image: "/website/2.json",
    para: "Landing pages for paid campaigns",
  },
  {
    image: "/website/3.json",
    para: "Web apps and portals when your workflow needs more than a standard site",
  },
];
export const WEBSITE_PLANNING = [
  {
    name: "planning",
    imageSingle: "/website/planning1.webp",
    image: "/website/planning2.webp",
    para: "Looking for design experts who can bring your vision to life?",
    heading: "Meet our expert",
    href: "/",
  },
  {
    name: "design",
    imageSingle: "/website/planning1.webp",
    image: "/website/planning2.webp",
    para: "Looking for design experts who can bring your vision to life?",
    heading: "Meet our expert",
    href: "/",
  },
  {
    name: "development",
    imageSingle: "/website/planning1.webp",
    image: "/website/planning2.webp",
    para: "Looking for design experts who can bring your vision to life?",
    heading: "Meet our expert",
    href: "/",
  },
  {
    name: "testing",
    imageSingle: "/website/planning1.webp",
    image: "/website/planning2.webp",
    para: "Looking for design experts who can bring your vision to life?",
    heading: "Meet our ",
    href: "/",
  },
];
export const WHATS_INCLUDED_WEBDEV = [
  {
    image: "/website/bespoke-design.svg",
    para: "Bespoke design (no templates)",
  },
  {
    image: "/website/bespoke-design.svg",
    para: "Bespoke design (no templates)",
  },
  {
    image: "/website/bespoke-design.svg",
    para: "Bespoke design (no templates)",
  },
  {
    image: "/website/bespoke-design.svg",
    para: "Bespoke design (no templates)",
  },
  {
    image: "/website/bespoke-design.svg",
    para: "Bespoke design (no templates)",
  },
  {
    image: "/website/bespoke-design.svg",
    para: "Bespoke design (no templates)",
  },
];
export const WEB_DEV_BENEFITS = [
  {
    name: "Enhanced user <br/> experience",
    para: "A well-structured website helps people find what they need quickly. That improves engagement and increases the chance they contact you.",
    image: "/about-us/optimize.json",
  },
  {
    name: "Strong visual<br/> credibility",
    para: "Design affects trust. Consistent branding, clean layout, and quality visuals help visitors feel confident in your business.",
    image: "/about-us/generate.json",
  },
  {
    name: "Evergreen content<br/> that supports SEO",
    para: "We help you organize content so it stays relevant, supports search visibility, and answers customer questions clearly.",
    image: "/about-us/grow.json",
  },
  {
    name: "Better conversion <br/> rates",
    para: "A good site is not just attractive. It guides users to action through strong pages, clear CTAs, and fewer distractions.",
    image: "/about-us/optimize.json",
  },
  {
    name: "SEO-ready <br/> foundations",
    para: "Fast load times, mobile-first layouts, clean code, and on-page structure support better rankings and stronger results from marketing. This improves visibility because search engines and real users can move through your site with less friction.",
    image: "/about-us/generate.json",
  },
  {
    name: "Custom <br/> functionality",
    para: "We can build and integrate features like booking systems, quote forms, configurators, calculators, gated content, and customer portals.",
    image: "/about-us/grow.json",
  },
];
export const WEB_DEV_SERVICES_WE_OFFER = [
  {
    icon: "",
    // icon: "/ceo/full-stack-architecture.json",
    heading: "Custom website design and development",
    para: "Sites built around your brand, your audience, and your marketing goals. ",
  },
  {
    icon: "",
    // icon: "/ceo/strategic-custom-solutions.json",
    heading: "Website redesigns and rebuilds",
    para: "If your site is slow, outdated, or hard to manage, we rebuild with better structure and performance while protecting SEO value.",
  },
  {
    // icon: "/ceo/cutting-edge.json",
    icon: "",
    heading: "CMS implementation and training",
    para: "We set up an easy-to-manage CMS so your team can update pages, add content, and publish with confidence. ",
  },
  {
    // icon: "/ceo/full-stack-architecture.json",
    icon: "",
    heading: "E-commerce development",
    para: "Secure, conversion-focused e-commerce builds on platforms that match your needs, including Shopify and WooCommerce. ",
  },
  {
    // icon: "/ceo/strategic-custom-solutions.json",
    icon: "",
    heading: "Ongoing maintenance and support",
    para: "Updates, fixes, performance monitoring, backups, and continuous improvements so your website stays stable and secure. ",
  },
  {
    // icon: "/ceo/cutting-edge.json",
    icon: "",
    heading: "Third-party integrations",
    para: "Payment, booking, CRM, email marketing, analytics, maps, chat, inventory tools, and more.",
  },
  {
    // icon: "/ceo/full-stack-architecture.json",
    icon: "",
    heading: "Optional bilingual support",
    para: "If your site is slow, outdated, or hard to manage, we rebuild with better structure and performance while protecting SEO value.",
  },
];
