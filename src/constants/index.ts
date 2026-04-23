import { ServiceData } from "@/views/staff-augmentation/services-section";

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
  btnText: string;
  btnUrl: string;
}

export const SERVICES_SERVICES_OFFERED_ACCORDION: AccordionItemType[] = [
  {
    title: "CGI Services",
    icon: "/services/tab-icon.svg",
    subHeading: "Unlock the Power of High-Quality Visuals for Your Business",
    para: "At HTSOL Inc., we specialize in <b>CGI (Computer-Generated Imagery)</b> that transforms ideas into visually captivating realities. Whether you're in need of realistic 3D visualizations, animated models, or immersive environments, our CGI services are tailored to elevate your brand and make a lasting impact on your audience.",
    subHeading2: "What We Offer:",
    btnText: "View Portfolio",
    btnUrl: "/services/cgi",
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
    btnText: "View Portfolio",
    btnUrl: "/services/staff-augmentation",
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
    btnText: "View Portfolio",
    btnUrl: "/services/digital-transformation",
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
    btnText: "View Portfolio",
    btnUrl: "/services/digital-marketing",
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
    btnText: "View Portfolio",
    btnUrl: "/services/seo-services",
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
    title: "Web Design & Development",
    icon: "/services/tab-icon.svg",
    para: "Your website should be easy to navigate and trust. At HTSOL Inc., we build mobile-friendly, user-centric websites designed to guide visitors smoothly toward their goals. <br/><br/>Whether you're starting from scratch or revamping an existing site, we focus on:",
    btnText: "View Portfolio",
    btnUrl: "/services/website-development",
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
  // {
  //   title: "Social Media Marketing",
  //   icon: "/services/tab-icon.svg",
  //   para: "Social Media Marketing should be intentional and consistent. We ensure your presence is clear and effective across platforms like Facebook, Instagram, LinkedIn, and Twitter, with messaging tailored to your brand and audience.",
  //   subHeading2: "Our approach includes:",
  //   lists: [
  //     {
  //       para: `Audience insights`,
  //     },
  //     {
  //       para: `Competitor benchmarking`,
  //     },
  //     {
  //       para: `Proven methods that deliver measurable growth without gimmicks`,
  //     },
  //   ],
  // },
  // {
  //   title: "PPC Campaign Management",
  //   icon: "/services/tab-icon.svg",
  //   para: "Effective PPC campaigns require strategic budget allocation and continuous optimization. We specialize in building targeted Pay-Per-Click campaigns on Google Ads and Facebook Ads, using testing to refine performance.",
  //   subHeading2: "Services include:",
  //   lists: [
  //     {
  //       para: `In-depth keyword research to target high-intent searches`,
  //     },
  //     {
  //       para: `Ad structures and targeting aligned with buyer behavior`,
  //     },
  //     {
  //       para: `Ongoing testing, including A/B testing, to optimize performance over time`,
  //     },
  //     {
  //       para: `Continuous refinements to drive qualified leads and conversions`,
  //     },
  //   ],
  // },
  // {
  //   title: "Ecommerce Development & Marketing",
  //   icon: "/services/tab-icon.svg",
  //   para: `When it comes to eCommerce, details matter. We specialize in developing custom eCommerce websites and supporting strategies that simplify the shopping experience and help your store perform consistently.
  //   <br/><br/>
  //   We develop on platforms like:
  // `,
  //   lists: [
  //     {
  //       para: `Shopify, WooCommerce, and Magento`,
  //     },
  //   ],
  //   botPara: `To drive growth, we provide:`,
  //   lists2: [
  //     {
  //       para: `Targeted eCommerce SEO and PPC campaigns tailored to online retail success`,
  //     },
  //     {
  //       para: `Conversion optimization based on real customer behavior`,
  //     },
  //   ],
  // },
  // {
  //   title: "Content Marketing",
  //   icon: "/services/tab-icon.svg",
  //   para: `Great content should engage and inform—not just fill space. Our team creates high-quality, SEO-optimized content that resonates with both your audience and search engines.
  //   <br/><br/>
  //   We assist with:
  // `,
  //   lists: [
  //     {
  //       para: `Blog posts and articles`,
  //     },
  //     {
  //       para: `Landing pages`,
  //     },
  //     {
  //       para: `Video scripts`,
  //     },
  //     {
  //       para: `Messaging that aligns with your brand voice`,
  //     },
  //   ],
  // },
  // {
  //   title: "Technical SEO",
  //   icon: "/services/tab-icon.svg",
  //   para: `Even the best content can be hindered by technical issues. Our Technical SEO services ensure your website runs smoothly and is fully optimized for search engines.
  //   <br/><br/>
  //   We focus on:
  // `,
  //   lists: [
  //     {
  //       para: `Fixing crawl errors`,
  //     },
  //     {
  //       para: `Speeding up page load times`,
  //     },
  //     {
  //       para: `Resolving indexing issues to ensure complete search engine visibility`,
  //     },
  //     {
  //       para: `Addressing duplicate content and improving site architecture`,
  //     },
  //   ],
  // },
  // {
  //   title: "Email Marketing",
  //   icon: "/services/tab-icon.svg",
  //   para: `Email marketing is most effective when it feels relevant and personal. We help you connect with your audience, converting interest into lasting relationships.
  //   <br/><br/>
  //   Our services include:
  // `,
  //   lists: [
  //     {
  //       para: `Building segmented email lists`,
  //     },
  //     {
  //       para: `Crafting compelling, natural-sounding messages`,
  //     },
  //     {
  //       para: `Improving open and click-through rates through testing and refinement`,
  //     },
  //   ],
  // },
  // {
  //   title: "Online Reputation Management (ORM)",
  //   icon: "/services/tab-icon.svg",
  //   para: `Your online reputation is often the first impression people have of your business. With ORM, we help you stay on top of reviews and feedback in a professional and proactive manner.
  //   <br/><br/>
  //   We offer:
  // `,
  //   lists: [
  //     {
  //       para: `Monitoring reviews on key platforms`,
  //     },
  //     {
  //       para: `Thoughtful and consistent responses`,
  //     },
  //     {
  //       para: `Managing your presence on review sites and social media`,
  //     },
  //     {
  //       para: `Ongoing support to maintain a positive online reputation`,
  //     },
  //   ],
  // },
  // {
  //   title: "AI-Driven Marketing Solutions",
  //   icon: "/services/tab-icon.svg",
  //   para: `AI is a powerful tool when used wisely. At HTSOL Inc., we incorporate AI into our marketing strategies to improve decision-making and efficiency without replacing the human touch.
  //   <br/><br/>
  //   We use AI for:
  // `,
  //   lists: [
  //     {
  //       para: `Predictive analytics to spot trends and opportunities`,
  //     },
  //     {
  //       para: `Personalized content recommendations`,
  //     },
  //     {
  //       para: `Data-backed insights to optimize time and budget allocation`,
  //     },
  //   ],
  // },
  // {
  //   title: "Franchise SEO",
  //   icon: "/services/tab-icon.svg",
  //   para: `Franchises face unique challenges, especially with multiple locations to manage. Our Franchise SEO service ensures local visibility while maintaining consistency across all franchise pages.
  //   <br/><br/>
  //   Services include:
  // `,
  //   lists: [
  //     {
  //       para: `AI-driven insights to find local opportunities`,
  //     },
  //     {
  //       para: `Optimizing both corporate sites and individual franchise locations`,
  //     },
  //     {
  //       para: `Boosting visibility in organic search results`,
  //     },
  //     {
  //       para: `Ensuring consistent branding and visibility across all locations`,
  //     },
  //   ],
  // },
];

export const DIGITAL_MARKETING_SERVICES_OFFERED_ACCORDION: AccordionItemType[] =
  [
    {
      title: "Search Engine Optimization (SEO)",
      icon: "/services/tab-icon.svg",
      para: `Search engine optimization forms the foundation of long-term online visibility. When your website appears in relevant search results, it becomes easier for potential customers to find and trust your business.
    <br/><br/>
    Our <b>SEO specialists</b> focus on improving your website’s presence on search engines such as Google so your business can attract users who are actively searching for your services.
    <br/><br/>
    Our SEO services include:
    `,
      lists: [
        {
          para: `Keyword research and search intent analysis`,
        },
        {
          para: `On-page SEO optimization`,
        },
        {
          para: `Technical SEO improvements`,
        },
        {
          para: `Website performance optimization`,
        },
        {
          para: `Link building and domain authority development`,
        },
        {
          para: `Local SEO strategies for regional businesses`,
        },
      ],
      botPara: `By improving website structure, content relevance, and technical performance, our team helps your business strengthen search visibility and generate consistent organic traffic over time.`,
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      icon: "/services/tab-icon.svg",
      para: `Pay-per-click advertising allows businesses to reach targeted audiences quickly through platforms such as <b>Google Ads</b> and <b>Microsoft Ads.</b>
    <br/><br/>
    When campaigns are planned correctly, PPC can help businesses generate qualified leads while maintaining control over advertising budgets.
    <br/><br/>
    Our PPC specialists focus on campaigns designed to reduce wasted ad spend while improving campaign performance.
    <br/><br/>
    Our PPC services include:
    `,
      lists: [
        {
          para: `Campaign strategy development`,
        },
        {
          para: `Keyword targeting and audience segmentation`,
        },
        {
          para: `Landing page optimization`,
        },
        {
          para: `Conversion tracking setup`,
        },
        {
          para: `Continuous campaign monitoring and optimization`,
        },
      ],
      botPara: `Through ongoing performance analysis and careful targeting, our team helps businesses generate high-quality leads through paid advertising.`,
    },
    {
      title: "Social Media Marketing",
      icon: "/services/tab-icon.svg",
      para: `Social media plays an important role in how businesses build relationships with their audiences. It allows companies to communicate directly with customers while strengthening brand recognition.
    <br/><br/>
    Our <b>social media marketing</b> team helps businesses connect with their audience through thoughtful content and consistent engagement.
    <br/><br/>
    Our services include:
    `,
      lists: [
        {
          para: `Social media strategy development`,
        },
        {
          para: `Content planning and creation`,
        },
        {
          para: `Paid social media advertising campaigns`,
        },
        {
          title: `Community engagement and brand monitoring`,
          para: ``,
        },
        {
          para: `Performance analytics and reporting`,
        },
      ],
      botPara: `With the right strategy in place, social media can strengthen brand awareness and support long-term customer loyalty.`,
    },
    {
      title: "Social Media Management",
      icon: "/services/tab-icon.svg",
      para: `Effective social media management requires more than occasional posts. It requires strategic planning, creative content and consistent engagement.
    <br/><br/>
    At HTSOL, we develop comprehensive social media management strategies designed to grow your audience and strengthen your brand identity.
    <br/><br/>
    Our social media management services include:
    `,
      lists: [
        {
          para: `Social media strategy and planning`,
        },
        {
          para: `Content creation and creative design`,
        },
        {
          para: `Community management and audience engagement`,
        },
        {
          para: `Influencer marketing support`,
        },
        {
          para: `Paid social media campaign management`,
        },
        {
          para: `Social media analytics and performance reporting`,
        },
      ],
      botPara: `By combining strategic planning with engaging content, we help businesses build strong relationships with their audiences while increasing visibility across social platforms.`,
    },
    {
      title: "Digital Marketing Strategy",
      icon: "/services/tab-icon.svg",
      para: `Successful digital marketing begins with a clear strategy. Without a well-defined plan, marketing campaigns often lack direction and measurable outcomes.
    <br/><br/>
    HTSOL develops comprehensive digital marketing strategies based on research, analytics and industry insights. We analyze your brand positioning, competitive landscape and target audience to determine the most effective marketing channels.
    <br/><br/>
    Our strategy development includes:
    `,
      lists: [
        {
          para: `Brand and market analysis`,
        },
        {
          para: `Competitive landscape evaluation`,
        },
        {
          para: `Customer journey mapping`,
        },
        {
          para: `Channel strategy development`,
        },
        {
          para: `Media planning and budget allocation`,
        },
        {
          para: `Campaign performance frameworks`,
        },
      ],
      botPara: `This strategic foundation ensures that every marketing initiative supports your long-term business objectives.`,
    },
    {
      title: "Affiliate Marketing",
      icon: "/services/tab-icon.svg",
      para: `Affiliate marketing allows businesses to expand their reach and increase sales through trusted partners and publishers.
    <br/><br/>
    HTSOL manages affiliate marketing programs that connect your brand with relevant websites, review platforms and content creators who promote your products or services.
    <br/><br/>
    Our affiliate marketing services include:
    `,
      lists: [
        {
          para: `Affiliate program strategy and setup`,
        },
        {
          para: `Partner recruitment and relationship management`,
        },
        {
          para: `Affiliate network coordination`,
        },
        {
          para: `Commission structure planning`,
        },
        {
          para: `Campaign monitoring and fraud prevention`,
        },
        {
          para: `Performance tracking and optimization`,
        },
      ],
      botPara: `Affiliate marketing operates on a performance-based model, allowing businesses to pay only when sales or conversions occur.`,
    },
    {
      title: "Content Marketing",
      icon: "/services/tab-icon.svg",
      para: `Content marketing helps businesses educate their audience while building trust and improving search engine visibility.
    <br/><br/>
    Well-written content answers real questions and helps potential customers understand how your services can support their needs.
    <br/><br/>
    Our <b>content marketing</b> services include:`,
      lists: [
        {
          para: `Blog writing and article development`,
        },
        {
          para: `Website content creation`,
        },
        {
          para: `SEO content optimization`,
        },
        {
          para: `Industry research and thought leadership content`,
        },
        {
          para: `Local area pages for local seo`,
        },
      ],
      botPara: `When content is created strategically, it positions your business as a knowledgeable and trustworthy resource within your industry.`,
    },
    {
      title: "Email Marketing",
      icon: "/services/tab-icon.svg",
      para: `Email marketing remains one of the most effective ways to maintain communication with customers and nurture potential leads.
    <br/><br/>
    A thoughtful email strategy helps businesses share useful information, strengthen customer relationships, and encourage repeat engagement.
    <br/><br/>
    Our <b>email marketing services</b> include:`,
      lists: [
        {
          para: `Email marketing strategy and campaign planning`,
        },
        {
          para: `Newsletter design and content creation`,
        },
        {
          para: `Audience segmentation and marketing automation`,
        },
        {
          para: `Campaign performance analysis and reporting`,
        },
      ],
      botPara: `With consistent messaging and careful audience targeting, email campaigns can support long-term customer retention.`,
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      icon: "/services/tab-icon.svg",
      para: `Driving traffic to your website is only one part of digital marketing. Turning visitors into leads and customers is equally important.
    <br/><br/>
    <b>Conversion rate optimization (CRO)</b> focuses on improving the elements of your website that influence user decisions.
    <br/><br/>
    Our CRO services include:
    `,
      lists: [
        {
          para: `Landing page optimization`,
        },
        {
          para: `A/B testing and performance analysis`,
        },
        {
          para: `User behaviour tracking and insights`,
        },
        {
          para: `Funnel optimization`,
        },
      ],
      botPara: `Even small improvements to conversion rates can significantly improve the overall performance of your marketing strategy.`,
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
    question: "How can CGI help my business generate more sales?",
    answer:
      "CGI helps your customers visualize products, spaces, or concepts before they commit to a purchase. This boosts confidence, speeds up decision-making, and often leads to higher conversion rates, especially in real estate, manufacturing, and eCommerce.",
  },
  {
    question: "Will switching to a new website affect my Google rankings?",
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
    question:
      "Can you support businesses operating in multiple cities or provinces?",
    answer:
      "Yes, we create tailored strategies for each region while keeping your brand consistent. This is particularly important for franchises and multi-location businesses across Canada.",
  },
  {
    question: "What budget should a business realistically start with?",
    answer:
      "Budgets vary based on goals and competition, but we help you prioritize the most impactful actions first. Many clients start with a focused plan and expand once we have performance data to support that growth.",
  },
];

export const DIGITAL_MARKETING_FAQS = [
  {
    question: "Why am I getting website traffic but no enquiries or calls?",
    answer:
      "This usually means the issue is not traffic volume, it is conversion friction. Review your offer clarity, contact form length, page speed, and call-to-action placement, and make sure the traffic matches the service you want to sell.",
  },
  {
    question:
      "How long should I wait before deciding a digital marketing campaign is not working?",
    answer:
      "Do not judge too early, especially when tracking and targeting are still being refined. Wait until you have enough data, then assess lead quality, conversion rate, and cost per lead, not only clicks.",
  },
  {
    question:
      "Should I fix my website first or start ads first if I need leads quickly?",
    answer:
      "If your website is difficult to use, ads may send paid traffic to a page that does not convert well. A practical option is to run ads to one strong landing page while improving the rest of the site in stages.",
  },
  {
    question:
      "Why are my Google Ads getting clicks, but the leads are poor quality?",
    answer:
      "Poor lead quality often comes from broad targeting, weak keyword intent, or unclear ad messaging. Tighten keyword targeting, add negative keywords, and clearly state pricing, service area, and audience on the landing page.",
  },
  {
    question:
      "How do I know if my agency is actually helping revenue, not just generating reports?",
    answer:
      "Ask for reporting tied to business outcomes, such as qualified leads, booked calls, sales opportunities, and revenue impact. If the reports only show impressions and clicks, the performance picture may be incomplete.",
  },
  {
    question:
      "I serve multiple Canadian cities, should I use one page or separate pages for each area?",
    answer:
      "If each city has different demand, services, or local relevance, separate pages often perform better. Each page should provide useful local information, not duplicated copy with only the city name changed.",
  },
  {
    question:
      "Can I switch digital marketing agencies without losing my ad data or accounts?",
    answer:
      "Yes, if your accounts are set up under your business ownership. Keep admin access to Google Ads, Analytics, Search Console, Meta, and your website before making the switch.",
  },
  {
    question:
      "I have a limited budget, should I split it across SEO, PPC, and social media right away?",
    answer:
      "Usually, no. Smaller budgets often perform better when focused on one or two channels first, then expanded after you identify which channels bring qualified leads.",
  },
  {
    question:
      "Why did my local ad leads suddenly drop after changes to my business profile or account?",
    answer:
      "Lead volume can drop after profile verification issues, mismatched business details, or account compliance changes. Check your Google Business Profile and ad account settings to confirm everything is accurate and active.",
  },
  {
    question: "Do I need separate English and French landing pages for Canada?",
    answer:
      "Not always, but bilingual pages can improve trust and conversions in some markets. Start with your highest priority regions, then expand based on traffic and lead data.",
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
    question:
      "I get website traffic but no calls or leads. What’s going wrong?",
    answer:
      "Traffic alone does not guarantee conversions. Often the keywords attract the wrong audience or the page does not answer the visitor’s intent clearly. Improving content relevance, layout, and calls-to-action usually fixes this issue.",
  },
  {
    question:
      "My competitors rank higher even though their website looks worse than mine. Why?",
    answer:
      "Google ranks relevance and trust, not design quality. Older domains, stronger backlinks, and better keyword targeting often outweigh visual appearance. SEO focuses on credibility signals search engines can measure.",
  },
  {
    question: "Does changing my website design hurt my Google rankings?",
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
    question: "Can negative reviews affect my search ranking?",
    answer:
      "Yes, indirectly. Poor reviews reduce trust and lower engagement rates, which can impact local visibility. Responding professionally and improving review volume often improves both reputation and rankings.",
  },
  {
    question: "How long does it take to recover from a ranking drop?",
    answer:
      "Recovery depends on the cause. Technical issues may take weeks after fixes, while authority losses can take months. Consistent optimisation and monitoring help prevent repeated drops.",
  },
  {
    question: "Why does my paid advertising work but SEO doesn’t?",
    answer:
      "Paid ads appear instantly because you pay for placement. SEO requires proving relevance and trust over time. Once established, organic traffic continues without ongoing ad spend.",
  },
  {
    question:
      "Do I need different pages for different Canadian cities I serve?",
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
    question: 'Why is my current site slow even though it is not "big"?',
    answer:
      "Common causes are heavy images, too many scripts, poorly built themes or plugins, and weak hosting. A performance audit can identify the biggest bottleneck instead of guessing.",
  },
  {
    question: "Do I need to write all the website copy myself before we start?",
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
    question: "Will a new website automatically bring in more leads?",
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
    number: "8+",
    name: "YEARS OF EXPERIENCE",
    para: "From full-stack development to digital strategy — building and growing digital products since 2016.",
  },
  {
    number: "100+",
    name: "PROJECTS DELIVERED",
    para: "Websites, SaaS platforms, custom CRMs, and marketing campaigns across healthcare, e-commerce, and professional services.",
  },
  {
    number: "5+",
    name: "COUNTRIES SERVED",
    para: "Canada, USA, UK, UAE, and beyond — building digital solutions for clients who expect results, not excuses.",
  },
];

export const WHY_HIRE_ME_CEO = {
  title: "Why hire me",
  para: `Most agencies separate strategy from execution. Most developers don&apos;t understand marketing. Most marketers can&apos;t build what they recommend. I&apos;ve spent 8 years sitting at the
  intersection of all three — and that&apos;s exactly what my clients hire me for.`,
  btnText: "Let’s discuss your project",
  btnLink: "/contact-us",
  cards: [
    {
      // icon: "/ceo/full-stack-architecture.json",
      icon: "/ceo/why-icon-1-2.svg",
      hoverIcon: "/ceo/why-icon-1.svg",
      heading: "HEALTHCARE & DENTAL GROWTH",
      para: " I specialize in helping dental clinics, medical practices, and mental health providers build digital systems that attract the right patients and convert them — not just look good online. From high-converting websites to custom booking systems and local SEO, I know what actually moves the needle in healthcare.",
    },
    {
      // icon: "/ceo/strategic-custom-solutions.json",
      icon: "/ceo/why-icon-2.svg",
      hoverIcon: "/ceo/why-icon-2-2.svg",
      heading: "AGENCY WHITE LABEL PARTNER",
      para: "Marketing agencies bring me in when they need delivery capacity they can trust. I work as a silent execution partner — building websites, platforms, and marketing systems under your brand, on your timelines, with full NDA protection. Your clients get enterprise-quality work. Your agency gets the credit.",
    },
    {
      // icon: "/ceo/cutting-edge.json",
      icon: "/ceo/why-icon-3.svg",
      hoverIcon: "/ceo/why-icon-3-2.svg",
      heading: "STRATEGY BACKED BY TECHNICAL DEPTH",
      para: "I've built full-stack MERN applications, custom CRMs, SaaS platforms, and AI-integrated systems from scratch. That technical foundation means I don't just recommend what to build — I understand how to build it, what it costs, and how long it actually takes. When I give you a strategy, I can execute it.",
    },
  ],
};

export const WHAT_I_DO_CEO = {
  title: "Services That Move the Needle",
  para: "I don't sell packages. I solve problems. Here's where I spend my time and what I bring to the table.",
  cards: [
    {
      // icon: "/ceo/full-stack-architecture.json",
      icon: "/ceo/what-do-icon-1.svg",
      heading: "Digital Growth Strategy",
      para: "Most businesses have activity without direction — content going out, ads running, a website sitting there — but no cohesive plan tying it all together. I build the strategy first: where you are, where you need to go, which channels deserve your budget, and in what order. Everything else follows from that.",
    },
    {
      // icon: "/ceo/strategic-custom-solutions.json",
      icon: "/ceo/what-do-icon-2.svg",
      heading: "Healthcare & Dental Marketing",
      para: "I've built digital systems specifically for dental clinics, medical practices, and mental health providers. Attracting the right patients online is a different discipline from general marketing — it requires trust signals, local visibility, booking friction reduction, and content that speaks to someone in a vulnerable moment. I understand that nuance.",
    },
    {
      // icon: "/ceo/cutting-edge.json",
      icon: "/ceo/what-do-icon-3.svg",
      heading: "AI Adoption & Automation",
      para: "AI isn't a feature — it's a shift in how your business operates. I help businesses identify where AI can replace manual work, reduce costs, and scale output without adding headcount. From AI-powered customer support to automated marketing workflows to custom-built AI tools, I map what's actually useful for your specific operation — not what's trending on LinkedIn.",
    },
    {
      // icon: "/ceo/full-stack-architecture.json",
      icon: "/ceo/what-do-icon-4.svg",
      heading: "Conversion-Optimised Web Design & Development",
      para: "A website that looks good but doesn't convert is an expensive brochure. I design and build websites with one primary objective: turning the right visitors into enquiries, bookings, or sales. Every layout decision, every headline, every CTA placement is informed by how people actually make decisions online — not by what looks impressive in a portfolio.",
    },
    {
      // icon: "/ceo/strategic-custom-solutions.json",
      icon: "/ceo/what-do-icon-5.svg",
      heading: "Custom CRM & Software Development",
      para: "Off-the-shelf tools work until they don't. When your business outgrows generic software — or when your workflow simply doesn't fit any existing product — I build custom. CRMs, patient management systems, internal dashboards, SaaS platforms. Built to your exact process, owned entirely by you, and designed to scale as your business grows.",
    },
    {
      // icon: "/ceo/cutting-edge.json",
      icon: "/ceo/what-do-icon-6.svg",
      heading: "Agency White Label Partnership",
      para: "I work with marketing agencies as a silent execution partner. You bring the client relationships. I deliver the websites, platforms, and marketing systems — under your brand, on your timelines, with full NDA protection. No competing for your clients. No corner-cutting. Just consistent, quality delivery that makes your agency look excellent.",
    },
  ],
};

export const CEO_EXPERTIES = {
  skills: [
    {
      src: "/ceo/google.svg",
      label: " Google Analytics Certified",
      subLabel: "From: Google",
    },
    {
      src: "/ceo/meta.svg",
      label: "Meta Blueprint Certified",
      subLabel: "From: Meta",
    },
    {
      src: "/ceo/hubspot.svg",
      label: "HubSpot Inbound Marketing",
      subLabel: "From: HubSpot Academy",
    },
    {
      src: "/ceo/semrush.svg",
      label: "SEO Toolkit Certified",
      subLabel: "From: Semrush Academy",
    },
    {
      src: "/ceo/bsc.svg",
      label: "B.Sc. Software Engineering",
      subLabel: "From: COMSATS University",
    },
    {
      src: "/ceo/google.svg",
      label: " Google Analytics Certified",
      subLabel: "From: Google",
    },
    {
      src: "/ceo/meta.svg",
      label: "Meta Blueprint Certified",
      subLabel: "From: Meta",
    },
    {
      src: "/ceo/hubspot.svg",
      label: "HubSpot Inbound Marketing",
      subLabel: "From: HubSpot Academy",
    },
    {
      src: "/ceo/semrush.svg",
      label: "SEO Toolkit Certified",
      subLabel: "From: Semrush Academy",
    },
    {
      src: "/ceo/bsc.svg",
      label: "B.Sc. Software Engineering",
      subLabel: "From: COMSATS University",
    },
    {
      src: "/ceo/google.svg",
      label: " Google Analytics Certified",
      subLabel: "From: Google",
    },
    {
      src: "/ceo/meta.svg",
      label: "Meta Blueprint Certified",
      subLabel: "From: Meta",
    },
    {
      src: "/ceo/hubspot.svg",
      label: "HubSpot Inbound Marketing",
      subLabel: "From: HubSpot Academy",
    },
    {
      src: "/ceo/semrush.svg",
      label: "SEO Toolkit Certified",
      subLabel: "From: Semrush Academy",
    },
    {
      src: "/ceo/bsc.svg",
      label: "B.Sc. Software Engineering",
      subLabel: "From: COMSATS University",
    },
  ],
};

export const INDUSTRIES_I_SERVE_CEO = {
  title: "Industries I Serve",
  skills: CEO_EXPERTIES,
  industries: [
    {
      name: "Healthcare",
      image: "/ceo/healthcare.svg",
    },
    {
      name: "Dental",
      image: "/ceo/dental.svg",
    },
    {
      name: "Mental Health",
      image: "/ceo/mental.svg",
    },
    {
      name: "E-Commerce",
      image: "/ceo/ecommerence.svg",
    },
    {
      name: "SaaS & Technology",
      image: "/ceo/saas.svg",
    },
    {
      name: "Professional Services",
      image: "/ceo/professional.svg",
    },
    {
      name: "Fitness & Wellness",
      image: "/ceo/fitness-2.svg",
    },
    {
      name: "reinforces white label positioning",
      image: "/ceo/reinforces.svg",
    },
    {
      name: "Education",
      image: "/ceo/education.svg",
    },
    {
      name: "Real Estate",
      image: "/ceo/realstate.svg",
    },
  ],
};

export const CTO_EXPERTIES = {
  skills: [
    {
      src: "/ceo/meta.svg",
      label: "Back-End Database Development",
      subLabel: "From: Meta",
    },
    {
      src: "/ceo/meta.svg",
      label: "Python Programming",
      subLabel: "From: Meta",
    },
    {
      src: "/ceo/meta.svg",
      label: " Django Web Framework",
      subLabel: "From: Meta",
    },
    {
      src: "/ceo/bsc.svg",
      label: "B.E. Avionics Engineering",
      subLabel: "From: PAF Karachi Institute of Economics and Technology",
    },
    {
      src: "/ceo/google.svg",
      label: "Chief Technology Officer",
      subLabel: "From: HTSOL Inc. — Since Dec 2024",
    },
  ],
};

export const INDUSTRIES_I_SERVE_CTO = {
  title: "INDUSTRIES I BUILD FOR",
  skills: CTO_EXPERTIES,
  industries: [
    {
      name: "Dental Practices — primary focus, deepest expertise",
      image: "/ceo/dental.svg",
    },
    {
      name: "Orthodontic Clinics — same digital needs as dental, strong overla",
      image: "/ceo/education.svg",
    },
    {
      name: "Medical Clinics — healthcare-adjacent, patient data compliance applies",
      image: "/ceo/professional.svg",
    },
    {
      name: "Mental Health Practices — growing niche, booking and privacy requirements",
      image: "/ceo/mental.svg",
    },
    {
      name: "Physiotherapy Clinics — appointment-driven, local SEO-heavy",
      image: "/ceo/fitness-2.svg",
    },
    {
      name: "Dental Marketing Agencies — white label technical partner for dental agencies",
      image: "/ceo/reinforces.svg",
    },
    {
      name: "Healthcare Software Providers — system integration and custom development",
      image: "/ceo/healthcare.svg",
    },
    {
      name: "Private Clinics — broader healthcare, same technical requirements",
      image: "/ceo/realstate.svg",
    },
    {
      name: "E-Commerce Brands — MERN stack and Shopify development capability",
      image: "/ceo/ecommerence.svg",
    },
    {
      name: "SaaS Startups — full-stack application development",
      image: "/ceo/saas.svg",
    },
  ],
};
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
export const CLIENT_SAY_ABOUT_CEO = {
  title: "What my clients say about me",
  leftQuote: "/ceo/left-qoute.svg",
  rightQuote: "/ceo/right-qoute.svg",
  reviews: [
    {
      para: "Working with Muhammad Faseeh Ullah has helped us a lot. Their AI solutions helped us automate the online customer support, which helped us focus on the other core business responsibilities.",
      image: "/ceo/abraham.webp",
      name: "Abraham",
      designation: "CEO | Tech Innovators",
    },
    {
      para: "Really great experience working together. Faseeh did an excellent job improving and polishing our frontend, with a strong focus on UI quality, performance optimization, and responsive behavior. They worked confidently with React.js and Next.js, translated designs and wireframes into clean, interactive components, and integrated everything smoothly with our RESTful APIs. Load times and overall responsiveness improved noticeably, and everything works consistently across browsers. Solid communication and delivery — would definitely work with them again.",
      image: "/ceo/user-icon.png",
      name: "SAM",
      designation: "CO-FOUNDER, MEIIDZ",
    },
    {
      para: "Really great experience working together. Faseeh did an excellent job improving and polishing our frontend, with a strong focus on UI quality, performance optimization, and responsive behavior. Load times and overall responsiveness improved noticeably, and everything works consistently across browsers.",
      image: "/ceo/user-icon.png",
      name: "MUKHLIS",
      designation: "TECHAGENCY BANGLA",
    },
    {
      para: "I engaged Faseeh for marketing initiatives at Same Day Builders, a company specializing in handyman services. Faseeh and his team at HtSol demonstrated remarkable flexibility by accommodating my ever-changing schedule, which is par for the course as a business owner. Moreover, during our initial proposal meeting, Faseeh adeptly addressed all of my questions and objectives. This instilled a level of comfort and confidence in me, affirming that I had made the right decision in partnering with him for our marketing needs. Given the positive experience and results, I've decided to extend my collaboration with HtSol to Meiidz, another venture of mine that offers semi-national house cleaning services. The professionalism and effectiveness Faseeh has shown make me optimistic about the marketing prospect.",
      image: "/ceo/user-icon.png",
      name: "MARISS N.",
      designation: "FOUNDER / CEO, SAME DAY BUILDERS, USA",
    },
    {
      para: "Our Account Manager at HtSol was very punctual and very communicative when it came to the campaign. I appreciate his will to understand what the client wants and overall the company to deliver.",
      image: "/ceo/user-icon.png",
      name: "JAMES ASUNA",
      designation: "PRINCIPAL DENTIST AND FOUNDER",
    },
    {
      para: `I was immediately impressed by their prompt and clear communication. They took the time to understand the nuances of my project and asked insightful questions that demonstrated their expertise in the field. This level of professionalism instantly put me at ease and assured me that I was in capable hands.

    Great campaign and managed all aspects of it - really happy with the support and guidance to make it a collaborative approach as it just took a lot of the stress away from me on an area I don't know much about.

    Perfectly executed and really happy with the communication throughout.
    `,
      image: "/ceo/user-icon.png",
      name: "ASIF N.",
      designation: "FOUNDER, MARKETING AGENCY, UK",
    },
    {
      para: "Project title: IT Consultation. Had a very engaging and productive meeting session. Good advice. They listened to the problem, tried to see the problem from a broader perspective to give a proper solution / advice. Anyone can can talk to them for IT advice. Best of luck !",
      image: "/ceo/user-icon.png",
      name: "MUSA",
      designation: "FOUNDER, TRAVEL AGENCY, BANGLADESH",
    },
    {
      para: `It was great to work with HtSol. They very keen to do all the details and ask / noted unclear parts thoroughly. I would Love and already planning to do another Software for healthcare industry with them.
    Helped me a lot with great product!
    `,
      image: "/ceo/user-icon.png",
      name: "JAEYOON",
      designation: "SOUTH KOREA",
    },
    {
      para: "Good and fast never disappointed with HtSol. They work quickly and take time to understand your business and business logic.",
      image: "/ceo/user-icon.png",
      name: "YANIS",
      designation: "FOUNDER, YOGA STUDIO, FRANCE",
    },
  ],
};
export const CEO_CTA = {
  title: "WANT TO TALK GROWTH?",
  para: "Whether you're a services business owner or an agency that needs reliable execution capacity, or a business that just wants a website that actually converts — I'm available for a direct conversation. No forms, no waiting. Book a call and let's figure out if we're a fit.",
  image: "/ceo/talk-img.png",
  buttons: [
    {
      text: "Schedule a Call Back",
      link: "/contact-us",
    },
    {
      text: "Book a discovery call",
      link: "/contact-us",
    },
  ],
};

export const BOLG_CURATE_CEO = [
  {
    image: "/ceo/blog-one.webp",
    slug: "/blog",
    name: "Why Most Dental Practice Websites Lose Patients Before They Even Call",
  },
  {
    image: "/ceo/blog-two.webp",
    slug: "/blog",
    name: "The Real Reason Your Agency's Websites Stop Converting After Launch",
  },
  {
    image: "/ceo/blog-three.webp",
    slug: "/blog",
    name: "What 100+ Projects Taught Me About Building Websites That Actually Grow Businesses",
  },
];
export const NAV_ITEMS = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "",
    drop: true,
    subItems: [
      {
        name: "About Us",
        link: "/about-us",
      },
      {
        name: "About the CEO",
        link: "/ceo",
      },
      {
        name: "About the CTO",
        link: "/cto",
      },
    ],
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
        name: "SEO Services",
        link: "/services/seo-services",
      },
      {
        name: "White Label",
        link: "/services/white-label",
      },
      {
        name: "Staff Augmentation",
        link: "/services/staff-augmentation",
      },
      {
        name: "Digital Marketing",
        link: "/services/digital-marketing",
      },
      {
        name: "Digital Transformation",
        link: "/services/digital-transformation",
      },
      {
        name: "CGI Services",
        link: "/services/cgi",
      },
    ],
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];
export const WEBSITE_NEEDS_BUISNESS = [
  {
    image: "/website/web-services-icon-1-1.svg",
    para: "Marketing websites that generate leads",
  },
  {
    image: "/website/web-services-icon-2.svg",
    para: "Service business websites built around bookings and inquiries",
  },
  {
    image: "/website/web-services-icon-3.svg",
    para: "Corporate websites with strong structure and content",
  },
  {
    image: "/website/web-services-icon-4.svg",
    para: "E-commerce sites designed for conversion and retention",
  },
  {
    image: "/website/web-services-icon-5.svg",
    para: "Landing pages for paid campaigns",
  },
  {
    image: "/website/web-services-icon-6.svg",
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
    image: "/website/enhanced-user-experience.json",
  },
  {
    name: "Strong visual<br/> credibility",
    para: "Design affects trust. Consistent branding, clean layout, and quality visuals help visitors feel confident in your business.",
    image: "/website/strong-visual-credibility.json",
  },
  {
    name: "Evergreen content<br/> that supports SEO",
    para: "We help you organize content so it stays relevant, supports search visibility, and answers customer questions clearly.",
    image: "/website/evergreen-content-that-supports.json",
  },
  {
    name: "Better conversion <br/> rates",
    para: "A good site is not just attractive. It guides users to action through strong pages, clear CTAs, and fewer distractions.",
    image: "/website/better-conversion-rates.json",
  },
  {
    name: "SEO-ready <br/> foundations",
    para: "Fast load times, mobile-first layouts, clean code, and on-page structure support better rankings and stronger results from marketing. This improves visibility because search engines and real users can move through your site with less friction.",
    image: "/website/seo-ready-foundations.json",
  },
  {
    name: "Custom <br/> functionality",
    para: "We can build and integrate features like booking systems, quote forms, configurators, calculators, gated content, and customer portals.",
    image: "/website/custom-functionality.json",
  },
];
export const WEB_DEV_SERVICES_WE_OFFER = [
  {
    icon: "/website/services-icon-1-1.svg",
    // icon: "/ceo/full-stack-architecture.json",
    heading: "Custom website design and development",
    para: "Sites built around your brand, your audience, and your marketing goals. ",
  },
  {
    icon: "/website/services-icon-2.svg",
    // icon: "/ceo/strategic-custom-solutions.json",
    heading: "Website redesigns and rebuilds",
    para: "If your site is slow, outdated, or hard to manage, we rebuild with better structure and performance while protecting SEO value.",
  },
  {
    // icon: "/ceo/cutting-edge.json",
    icon: "/website/services-icon-3.svg",
    heading: "CMS implementation and training",
    para: "We set up an easy-to-manage CMS so your team can update pages, add content, and publish with confidence. ",
  },
  {
    // icon: "/ceo/full-stack-architecture.json",
    icon: "/website/services-icon-4.svg",
    heading: "E-commerce development",
    para: "Secure, conversion-focused e-commerce builds on platforms that match your needs, including Shopify and WooCommerce. ",
  },
  {
    // icon: "/ceo/strategic-custom-solutions.json",
    icon: "/website/services-icon-5.svg",
    heading: "Ongoing maintenance and support",
    para: "Updates, fixes, performance monitoring, backups, and continuous improvements so your website stays stable and secure. ",
  },
  {
    // icon: "/ceo/cutting-edge.json",
    icon: "/website/services-icon-6.svg",
    heading: "Third-party integrations",
    para: "Payment, booking, CRM, email marketing, analytics, maps, chat, inventory tools, and more.",
  },
  {
    // icon: "/ceo/full-stack-architecture.json",
    icon: "/website/services-icon-7.svg",
    heading: "Optional bilingual support",
    para: "If your site is slow, outdated, or hard to manage, we rebuild with better structure and performance while protecting SEO value.",
  },
];

export const MISSISSAUGA_BANNER = {
  highLight: "Premier Mississauga Digital Agency",
  title: "Web Design Mississauga — Built to Convert, Not Just to Impress",
  para: `Mississauga businesses move fast. Your website should keep up. HTSOL Inc. designs and builds custom websites for local businesses — fast to launch, built for search, and designed to turn visitors into enquiries. 
  <br/><br/>
  We're based right here in Mississauga. We know the market, we know the competition, and we know what it takes for a local business to stand out online in the GTA.`,
  firstBtnText: "Book a Free Consultation",
  firstBtnLink: "/contact-us",
  secondBtnText: "View Our Work",
  secondBtnLink: "/services/website-development",
};

export const MISSISSAUGA_WEBSITE = {
  title: "Your Website Is Your Hardest-Working Employee —",
  highLight: "Is It Pulling Its Weight?",
  para: `When a potential customer in Mississauga searches for your service, they're going to land somewhere. If that somewhere isn't a fast, clear, trustworthy website, they'll click away and hire the competitor who showed up better.
  <br /><br />
  A professionally built website doesn't just look good — it works. It loads in seconds, answers the right questions immediately, guides visitors to take action, and supports every other piece of your marketing. SEO, paid ads, social media — all of it performs better when the website underneath is solid.
  <br /><br />
  That's exactly what we build.`,
  cardIcon: "/location-quote.svg",
  cardHeading: `"A website that looks pretty but doesn't rank is just a digital business card in a drawer. We build tools that actually grow businesses."`,
  cardPara: "— HTSOL Strategy Team",
};

export const MISSISSAUGA_AGENCY = {
  title: " A Mississauga Web Design Agency That Handles the Whole Picture",
  para: `Most web design companies hand you a finished site and move on. We                         don't work that way.`,
  cards: [
    {
      id: "agency-intro",
      para: `HTSOL Inc. brings design, development, and digital marketing together in one team. That means your website isn't built in isolation — it's built as part of your broader digital strategy, with SEO foundations baked in from the start, conversion-focused layouts informed by real user behaviour, and a structure that supports your marketing long after launch day.
      <br/><br/>
      We're also based in Mississauga, which means we're not a distant agency managing your project from across the country. We're local, we're reachable, and we have a genuine stake in helping Mississauga businesses succeed.`,
      fullWidth: true,
      hideOnMobile: true,
    },
    {
      id: "rapid-launch",
      heading: "Rapid Launch",
      para: "Your site is typically live within four weeks—from discovery to launch.",
    },
    {
      id: "seo-optimized",
      heading: "SEO Optimized",
      para: "Every page is structured for both search engines and real humans.",
    },
    {
      id: "full-ownership",
      heading: "Full Ownership",
      para: "You own everything: your domain, hosting, code, and CMS logins.",
    },
    {
      id: "strategic-growth",
      heading: "Strategic Growth",
      para: "We stay involved after launch—monitoring performance, making improvements, scaling with you.",
    },
    {
      id: "agency-image",
      mainImage: "/location-agency.png",
      imageAlt: "Mississauga web design agency",
    },
    {
      id: "dedicated-support",
      heading: "Dedicated Support",
      para: "One point of contact for design, development, and marketing questions.",
    },
  ],
};

export const MISSISSAUGA_SERVICES = {
  title: "Web Design Services We Offer in",
  highlight: "Mississauga",
  services: [
    {
      icon: "/services/why-icon-1.svg",
      heading: "Custom Website Design",
      para: `Every site we build starts from scratch — no templates, no page builders, no recycled layouts. We design around your brand, your audience, and your specific business goals. Whether you're a service business, professional firm, clinic, or local retailer, the design reflects who you are and what you want visitors to do.`,
    },
    {
      icon: "/services/why-icon-2.svg",
      heading: "Web Development",
      para: `Clean, performant code built on modern frameworks. We develop sites that load fast, run reliably, and can grow with your business. Built on Next.js and modern web standards — not WordPress themes stitched together and hoped for the best.`,
    },
    {
      icon: "/services/why-icon-3.svg",
      heading: "Mobile-First Design",
      para: `More than half of your visitors will find you on a phone. We build mobile-first as a baseline — not as an afterthought. Every layout, every button, every form works exactly as intended on any screen size.`,
    },
    {
      icon: "/services/why-icon-2.svg",
      heading: "SEO-Ready Foundations",
      para: `Every HTSOL website ships with clean site architecture, proper metadata, schema markup where relevant, fast Core Web Vitals, and a structure that makes it easy for Google to understand and rank your pages. You won't need to hire someone to 'fix the SEO' six months after launch.`,
    },
    {
      icon: "/services/why-icon-2.svg",
      heading: "CMS Setup & Training",
      para: `We set up a content management system that your team can actually use — no developer needed for everyday updates. Add blog posts, update service pages, change images, swap out offers — all without touching a line of code.`,
    },
    {
      icon: "/services/why-icon-3.svg",
      heading: "Landing Pages for Campaigns",
      para: `Running Google Ads or Meta campaigns? A dedicated landing page purpose-built for a specific offer converts significantly better than sending paid traffic to your homepage. We design and build campaign-specific landing pages that work with your ads, not against them.`,
    },
    {
      icon: "/services/why-icon-2.svg",
      heading: "Website Redesigns",
      para: `If your current site is slow, outdated, or losing you leads, we can redesign it — while protecting your existing SEO value through proper migration planning, redirect strategy, and content preservation.`,
    },
    {
      icon: "/services/why-icon-2.svg",
      heading: "E-Commerce Development",
      para: `We build conversion-focused e-commerce sites on Shopify and WooCommerce for Mississauga retailers looking to sell online with a store that's easy to manage and built to grow.`,
    },
  ],
  endServices: {
    heading: "Looking for Professional Growth?",
    para: `We’re always open to connecting with driven designers, developers, marketers, and strategists who want to do meaningful work with a supportive team.`,
    btnText: `Get Started`,
    btnLink: `/contact-us`,
  },
};

export const MISSISSAUGA_OUR_WORK = {
  topic: "OUR WORK",
  title: "Websites Built<br /> for Mississauga Businesses",
  slides: [
    {
      company: "Dentopia Marketing Agency",
      heading: "HIGH-PERFORMANCE UX FOR DENTAL MARKETING",
      description:
        "Built for a specialist dental marketing agency, this project focused on creating a polished digital experience that reflects authority, clarity, and growth. We developed a conversion-focused interface designed to support lead generation, showcase services effectively, and strengthen trust with dental clients.",
      services: [
        "Custom Build",
        "UI/UX Design",
        "Agency Website",
        "Conversion Focused",
        "Lead Generation",
        "Dental Marketing",
      ],
      images: ["/mockup.png"],
      accent: "/marketing-1.png",
    },
    {
      company: "518 Dental",
      heading: "MODERN WEBSITE EXPERIENCE FOR A PRIVATE DENTAL CLINIC",
      description:
        "Designed for a patient-focused dental clinic, this project centred on trust, usability, and local visibility. We created a clean, professional website experience that helps present treatments clearly, improve patient confidence, and support appointment-driven conversions.",
      services: [
        "Custom Website",
        "Dental Clinic",
        "UI/UX Design",
        "Local SEO",
        "Patient Journey",
        "Conversion Ready",
      ],
      images: ["/dental-location.png"],
      accent: "/marketing-1.png",
    },
    {
      company: "Grange Green Dental",
      heading: "TRUST-LED DIGITAL PRESENCE FOR A GROWING DENTAL PRACTICE",
      description:
        "This project was developed to give the practice a more refined and accessible online presence. The focus was on improving service presentation, strengthening credibility, and creating a smooth user experience that supports enquiries and long-term patient engagement.",
      services: [
        "Website Design",
        "Dental Practice",
        "UX Strategy",
        "Local Visibility",
        "Service Showcase",
        "Patient Enquiries",
      ],
      images: ["/mockup 3.png"],
      accent: "/marketing-1.png",
    },
  ],
};

export const MISSISSAUGA_BUSINESSES = {
  highlight: "Mississauga",
  title: "Businesses We Work With",
  para: `We build conversion-focused e-commerce sites on Shopify and WooCommerce for Mississauga retailers looking to sell online with a store that's easy to manage and built to grow.`,
  services: [
    {
      icon: "/location-icon-1.svg",
      para: `Professional Services`,
    },
    {
      icon: "/location-icon-2.svg",
      para: `Healthcare`,
    },
    {
      icon: "/location-icon-3.svg",
      para: `Healthcare`,
    },
    {
      icon: "/location-icon-4.svg",
      para: `Retail & E-commerce`,
    },
    {
      icon: "/location-icon-5.svg",
      para: `Hospitality`,
    },
    {
      icon: "/location-icon-6.svg",
      para: `Technology & SaaS`,
    },
    {
      icon: "/location-icon-7.svg",
      para: `Real Estate`,
    },
  ],
};

export const MISSISSAUGA_WORK = {
  title: "Mississauga Businesses We Work With",
  para: `We work with a wide range of local businesses across Mississauga and the wider GTA. A few of the industries we work with regularly:`,
  services: [
    {
      icon: "/website/web-services-icon-1-1.svg",
      heading: "Professional services",
      para: `accountants, lawyers, consultants, financial advisors`,
    },
    {
      icon: "/website/web-services-icon-2.svg",
      heading: "Healthcare and wellness",
      para: `clinics, dental practices, physio, specialists`,
    },
    {
      icon: "/website/web-services-icon-3.svg",
      heading: "Trades and home services",
      para: `contractors, electricians, plumbers, landscapers`,
    },
    {
      icon: "/website/web-services-icon-3.svg",
      heading: "Retail and e-commerce",
      para: `local shops, product brands, online stores`,
    },
    {
      icon: "/website/web-services-icon-3.svg",
      heading: "Restaurants and hospitality",
      para: `cafes, catering, event venues`,
    },
    {
      icon: "/website/web-services-icon-3.svg",
      heading: "Technology and SaaS",
      para: `startups and scale-ups needing a platform to match their product`,
    },
    {
      icon: "/website/web-services-icon-3.svg",
      heading: "Real estate professionals",
      para: `agents, developers, property managers`,
    },
  ],
  endServices: {
    heading:
      "If your business relies on people finding you online and trusting what they see, we can help",
    bgImage: "/business-bg.png",
    btnText: `Book A Free Consultation`,
    btnLink: `/contact-us`,
  },
};

export const MISSISSAUGA_Accordion = {
  title: "How a Mississauga Web Design Project Works With HTSOL",
  para: "We keep the process clear and structured so you always know what's happening and what's next. No disappearing for weeks, no surprise scope changes, no launch-day drama.",
  accordion: [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business: your goals, your customers, your competitors, and what you need the site to do. We map the structure before anything is designed.",
    },
    {
      number: "02",
      title: "Content & Wireframes",
      description:
        "We define the page hierarchy, messaging, and layouts. If you need help with copy, we can assist — or work with what you have and sharpen it for clarity and conversion.",
    },
    {
      number: "03",
      title: "DESIGN",
      description:
        "We design your site with a mobile-first approach, building a system that's consistent with your brand and purpose-built for your audience. You review and provide feedback before anything goes to development.",
    },
    {
      number: "04",
      title: "Development & SEO Setup",
      description:
        "We build the site using clean, performance-first code. Technical SEO foundations and tracking are configured during the build — not added as an afterthought.",
    },
    {
      number: "05",
      title: "Testing & Launch",
      description:
        "We test across devices, browsers, and screen sizes. Forms are validated. Speed is checked. Accessibility basics are confirmed. Then we launch cleanly.",
    },
    {
      number: "06",
      title: "Ongoing Support",
      description:
        "We don't hand over the keys and disappear. We monitor performance, provide reporting, and support your site as your business grows. Most of our Mississauga clients stay with us on a monthly retainer because they want a partner, not just a vendor.",
    },
  ],
};

export const MISSISSAUGA_WHAT_DELIVER = {
  title: "What a Well-Built Website Actually Delivers",
  para: `A well-built website is the foundation everything else builds on. When the foundations are right, every other channel performs better — SEO gets traction faster, paid ads convert at lower cost, and referrals turn into enquiries instead of bouncing away.
  <br/><br/>
  For Mississauga businesses specifically, local visibility matters. A site built with proper local SEO signals — city-specific content, Google Business Profile alignment, fast mobile performance — helps you show up when someone nearby is actively searching for what you offer.`,
  image: "/what-deliver-img.png",
};

export const MISSISSAUGA_WHY_CHOOSE = {
  highlight: "Why HTSOL Inc.",
  title: "Why Mississauga Businesses Choose HTSOL Inc.",
  accordion: [
    {
      heading: "We're Local",
      description:
        "We're based in Mississauga at 3400 Riverspray Crescent. We understand the local business landscape, the GTA market, and what Mississauga customers expect from a business online. This isn't a generic pitch — it's local knowledge applied to local strategy.",
      image: "/website/one-team.png",
    },
    {
      heading: "Design, Development, and Marketing Under One Roof",
      description:
        "Most agencies specialise in one thing. We bring all three together, which means your website is built with your marketing strategy in mind from day one — not retrofitted with SEO six months later by a different team.",
      image: "/website/performance-first.png",
    },
    {
      heading: "Built for Performance, Not Just Appearance",
      description:
        "Our builds use modern frameworks and performance-first practices. Fast load times, stable Core Web Vitals, clean code, and a CMS your team can manage without developer help.",
      image: "/website/clear-transparent.png",
    },
    {
      heading: "Live in Under a Month",
      description:
        "Most standard business websites are live within four weeks of kickoff — design, development, and launch. We're not slow. We're structured.",
      image: "/website/designed-trust.png",
    },
    {
      heading: "We Stay Involved",
      description:
        "We don't deliver and disappear. After launch, we monitor performance, recommend improvements, and stay engaged as your business grows. Your site should evolve — and we're here to make sure it does.",
      image: "/website/built-to-scale.png",
    },
  ],
};

export const MISSISSAUGA_CTA = {
  title: "Ready to Build a Website That Works for Your Mississauga Business?",
  para: `Tell us about your business, what you're trying to achieve, and what's not working with your current online presence. We'll review your situation and share a clear, practical path forward — no jargon, no pressure.`,
  firstBtnText: "Book a Free Consultation",
  firstBtnLink: "/contact-us",
  secondBtnText: "Talk to Our Team",
  secondBtnLink: "/contact-us",
};

export const MISSISSAUGA_FAQS = [
  {
    question: "How much does web design cost in Mississauga?",
    answer:
      "Costs vary depending on the size of the project, features required, and level of ongoing involvement. A straightforward business website for a service company will be priced differently from a multi-location e-commerce build. We scope every project individually and provide a clear breakdown so you know exactly what you're paying for. We don't use standardised packages because most Mississauga businesses don't fit neatly into fixed templates.",
  },
  {
    question: "How long does it take to build a website in Mississauga?",
    answer:
      "For most standard business websites, we're live within four weeks of kickoff — covering discovery, design, development, and launch. Complex builds with custom functionality, integrations, or large content volumes may take longer. We provide a clear timeline upfront so you know what to expect.",
  },
  {
    question: "Do I need to be involved in the design process?",
    answer:
      "You'll be involved at the key stages — sharing your goals and brand direction at the start, reviewing designs before we build, and approving the final site before launch. We handle the rest. Most clients find the process straightforward because we guide each step and keep communication clear throughout.",
  },
  {
    question: "Will my Mississauga website show up on Google?",
    answer:
      "Every website we build includes technical SEO foundations — clean architecture, proper metadata, schema markup, mobile-first structure, and Core Web Vitals optimisation. This gives your site the best possible start in search. For sustained ranking growth, a dedicated SEO strategy builds on that foundation over time.",
  },
  {
    question:
      "Can you redesign my existing website without losing my Google rankings?",
    answer:
      "Yes — with proper migration planning. We map your existing URL structure, plan redirects, preserve key content and metadata, and monitor performance post-launch. A well-managed redesign protects the SEO value you've already built and often improves rankings by addressing technical issues on the old site.",
  },
  {
    question: "Do I own my website after it's built?",
    answer:
      "Yes, fully. You own your domain, your hosting account, your code, and your CMS logins. We don't hold anything hostage. Good agency relationships are built on trust, and that starts with you having full control of your own digital assets.",
  },
  {
    question:
      "Can you build websites for businesses in Mississauga in specific industries?",
    answer:
      "Yes. We've built websites for professional services, healthcare, trades, retail, hospitality, technology, and more. We work to understand the specific expectations and behaviours of your industry's customers before we design a single page.",
  },
  {
    question: "What happens after my website launches?",
    answer:
      "We monitor performance, provide reporting, and remain available for updates, improvements, and technical support. Many of our clients stay on a monthly retainer for ongoing optimisation — because a website that isn't maintained and improved gradually loses ground to competitors who invest in theirs.",
  },
  {
    question: "Do you work with businesses outside of Mississauga?",
    answer:
      "Yes. While we're based in Mississauga and work closely with GTA businesses, we support clients across Ontario and Canada. If you're in the broader GTA — Brampton, Oakville, Burlington, Toronto, or further — we're happy to help.",
  },
  {
    question:
      "Can you integrate booking systems, CRMs, or other tools into the website?",
    answer:
      "Yes. We regularly integrate websites with booking platforms, CRM systems, email marketing tools, payment gateways, and inventory management systems. If you have an existing tool your team relies on, we'll connect it to your site so information flows automatically.",
  },
];
export const CEO_FAQS = [
  {
    question: "Who is Faseeh Khan?",
    answer:
      "Faseeh Khan (Muhammad Faseeh Ullah) is the CEO and Founder of HTSOL Inc., a full-service digital agency based in Mississauga, Ontario. With 8+ years of experience as a Full-Stack MERN developer turned digital growth strategist, he specializes in building high-converting websites, custom software, and digital marketing systems for healthcare businesses, dental practices, and marketing agencies across Canada and internationally.",
  },
  {
    question: "What does Faseeh Khan specialize in?",
    answer:
      "Faseeh specializes at the intersection of technical development and digital strategy. His core focus areas include dental and healthcare digital marketing, conversion-optimized web design, custom CRM and CMS development, AI-powered SEO, SaaS development, and white label agency partnerships. He has delivered 100+ projects across 8+ industries in 5+ countries.",
  },
  {
    question:
      "Does Faseeh Khan work directly with clients or only through HTSOL Inc.?",
    answer:
      "Both. Faseeh is actively involved in client strategy and works directly with businesses that need senior-level digital growth consultation. He also works with marketing agencies as a white label execution partner — delivering web design, development, and marketing work under the agency's brand with full NDA protection.",
  },
  {
    question: "What industries does Faseeh Khan work with?",
    answer:
      "Faseeh's strongest verticals are healthcare — including dental practices, medical clinics, and mental health providers — along with e-commerce, professional services, SaaS companies, and marketing agencies. His technical background means he can serve nearly any industry that relies on digital systems to attract and retain clients.",
  },
  {
    question: "Is Faseeh Khan available for consulting?",
    answer:
      "Yes. Faseeh is available for digital growth consulting engagements, particularly for healthcare and dental businesses looking to improve online patient acquisition, and for agencies seeking a reliable white label development and marketing partner. Book a discovery call directly through this page.",
  },
  {
    question: "Where is Faseeh Khan based?",
    answer:
      "Faseeh is based in Mississauga, Ontario, Canada. He works with clients remotely across Canada, the United States, the United Kingdom, the UAE, and internationally. In-person meetings are available for clients in the Greater Toronto Area.",
  },
  {
    question:
      "What is the difference between working with Faseeh directly and hiring HTSOL Inc.?",
    answer:
      "Working directly with Faseeh means senior-level strategy involvement from day one — he leads the engagement personally rather than handing it to a junior team member. HTSOL Inc. is the agency structure that handles full-scale execution. For most clients, the two are intertwined: you get Faseeh's strategic direction delivered through HTSOL's execution team.",
  },
  {
    question: "What makes HTSOL different from other digital agencies?",
    answer:
      "HTSOL brings design, development, and marketing under one roof — which is genuinely rare. Most agencies subcontract at least one of these disciplines. Because Faseeh has built everything himself across 8+ years, HTSOL can offer something most agencies can't: a single team that executes the full picture from strategy through technical implementation, with no handoff gaps and no blame between departments.",
  },
];

export const CTO_FAQS = [
  {
    question: "Who is Qamar Rafique?",
    answer:
      "Qamar Rafique is the Chief Technology Officer of HTSOL Inc., a full-service digital agency based in Mississauga, Ontario. He is a software architect and full-stack engineer with over six years of experience in web application development and systems architecture. At HTSOL, Qamar leads all technical delivery — website development, custom CRM and practice management software, AI-optimised SEO implementation, and technical infrastructure for dental practices and healthcare businesses.",
  },
  {
    question: "What does a CTO do at a digital agency like HTSOL?",
    answer:
      "Qamar's role is to ensure that every technical output HTSOL delivers is built properly — fast, secure, scalable, and structured to support long-term growth. Where Faseeh Khan (CEO) leads strategy, client relationships, and growth direction, Qamar leads technical architecture, development quality, and delivery execution. He works on every website build, CRM project, and technical SEO implementation — ensuring the engineering underneath HTSOL's work is done to a high standard.",
  },
  {
    question: "What is Qamar's specific experience with dental practices?",
    answer:
      "Qamar has worked with dental practices across the United Kingdom — including practices in Manchester, Birmingham, London, Leeds, Bristol, and Edinburgh — helping them rebuild underperforming websites into consistent patient acquisition systems. His focus has been on the technical systems specific to dental: conversion-optimised website architecture, AI-assisted local SEO, custom CRM and practice management software, and the booking and patient flow integrations that clinical teams actually need. He brings that UK delivery track record to every Canadian engagement.",
  },
  {
    question: "What technical stack does Qamar work with?",
    answer:
      "Qamar's primary stack is MERN (MongoDB, Express.js, React, Node.js) and Next.js for web applications and custom software. He also works with Python and Django for back-end systems, and has formal Meta certifications in Python programming, Django web framework, and back-end database development. For dental-specific builds, he integrates booking systems, patient management platforms, CMS architectures, and the local SEO technical layer that supports Google Business Profile and map pack rankings.",
  },
  {
    question:
      "Can Qamar build custom software for our dental practice — not just a website?",
    answer:
      "Yes — custom software is one of Qamar's core capabilities. He designs and builds bespoke CRM systems, patient management platforms, booking tools, and administrative dashboards tailored to how a specific dental practice operates. Unlike off-the-shelf solutions that require your team to adapt to the software, Qamar builds systems that adapt to your team. These are custom builds owned entirely by your practice — not subscription software with monthly fees that increase each year.",
  },
  {
    question:
      "Why does Qamar have an Avionics degree rather than a Computer Science degree?",
    answer:
      "Qamar studied B.E. Avionics (Aviation Electronics Engineering) at PAF Karachi Institute of Economics and Technology — a rigorous engineering discipline that demands the kind of systematic, precise thinking that good software architecture requires. Aviation electronics engineers are trained to build systems where failures have serious consequences, which translates directly into how Qamar approaches software architecture: methodically, with careful consideration of how systems fail and how to prevent it. His software expertise was developed through six years of professional practice as a software architect and engineer.",
  },
  {
    question:
      "Does Qamar work with dental marketing agencies on a white label basis?",
    answer:
      "Yes. Qamar leads the technical side of HTSOL's white label partnerships with dental marketing agencies. If your agency handles the client relationships and strategy but needs a reliable technical partner to build the websites, implement the SEO infrastructure, and develop any custom software — Qamar's team delivers that under your brand. He has specific experience working as a technical partner behind dental marketing agencies in the UK, and that experience informs how HTSOL operates its white label technical partnerships in Canada.",
  },
  {
    question: "How does Qamar approach technical SEO for dental practices?",
    answer:
      "Technical SEO for dental is a specific discipline. Qamar's approach focuses on the infrastructure that search engines use to understand and rank dental practices: clean site architecture that allows Google to crawl every page efficiently, schema markup that clearly communicates practice information, services, and location, Core Web Vitals performance that meets Google's quality thresholds, Google Business Profile technical optimisation, and local citation consistency. These are the technical signals that determine whether a dental practice appears in the map pack for searches like 'dentist near me' — and they require technical implementation, not just content creation.",
  },
];

export const CEO_CONVERSATION = {
  title: "From First Conversation to Real Results",
  para: "No long onboarding documents. No waiting three weeks to hear back. Here's exactly what working with me looks like — from the first call to delivery and beyond.",
  bgColor: `#0F0F0F`,
  accordion: [
    {
      number: "01",
      title: "Discovery Call",
      description:
        "Before anything else, we have a direct conversation. You tell me where you are, what's not working, and what you actually need. I ask the questions most agencies skip — about your customers, your growth constraints, your timeline, and your budget reality. No pitch deck. No pressure. Just a focused 30–45 minutes that tells both of us whether we're the right fit.",
    },
    {
      number: "02",
      title: "Strategy & Scope",
      description:
        "Based on our conversation, I put together a clear plan — what we're building, why, in what order, and what it costs. Not a 40-page methodology document. A focused scope that outlines deliverables, timelines, and exactly what I need from you to make it work. You know what you're getting before you commit to a single dollar.",
    },
    {
      number: "03",
      title: "Build & Launch",
      description:
        "Once we're aligned, we move fast. I handle the execution — whether that's a website, a marketing system, a custom platform, or a full campaign rollout — with consistent communication throughout. You're never left wondering what's happening. Progress updates, clear decision points, and a launch that's tested and ready before it goes live.",
    },
    {
      number: "04",
      title: "Optimise & Grow",
      description:
        "Delivery isn't the finish line — it's the starting line. After launch I monitor performance, track what's working, and refine based on real data. Whether you're on a monthly retainer or a quarterly check-in, I stay engaged with your results. A website or campaign that isn't being actively improved is gradually losing ground to someone who is.",
    },
  ],
};

export const CTO_CONVERSATION = {
  title: "From Brief to Build — How the Technical Work Actually Happens",
  para: "Every system I build starts with understanding what it needs to do — then I build the right way to do it. No shortcuts that create problems later. No handovers that leave gaps.",
  bgColor: `#0F0F0F`,
  accordion: [
    {
      number: "01",
      title: "Technical Discovery",
      description:
        "Before writing a line of code, I map what needs to be built, how it connects to existing systems, what the performance requirements are, and what constraints matter. For dental practices, that means understanding your booking flow, your patient journey, your staff workflows, and how your website needs to support all of it. I do not start building until the technical picture is complete.<br/><br/>Typically 2–3 days for a full technical brief",
    },
    {
      number: "02",
      title: "System Architecture",
      description:
        "I design the technical architecture before development starts — database structure, system components, API design, CMS setup, performance strategy, and security model. Getting this right at the start prevents the kind of technical debt that makes websites slow, difficult to maintain, and expensive to update later. The architecture document is reviewed and agreed before any build begins.<br/><br/>Architecture review included on all projects",
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "I build in stages with testing at each point — not a single large delivery at the end. You see working components as they are completed, which means issues are caught early and the final delivery is not the first time you see the product. Performance benchmarks, cross-device testing, security basics, and SEO foundations are validated before any page goes live.<br/><br/>Stage-by-stage delivery, no surprises at launch",
    },
    {
      number: "04",
      title: "Deployment & Ongoing Performance",
      description:
        "Launch is not the finish line. After deployment I monitor technical performance — load speed, Core Web Vitals, crawl health, error logs — and address anything that affects the site's performance or rankings. For ongoing retainer clients, I provide monthly technical health checks and implement improvements as the business grows and evolves.<br/><br/>Post-launch monitoring included",
    },
  ],
};

export const WEB_DEV_WHY_CHOOSE = {
  title: "Why Choose HTSOL Inc. for Web Development",
  cards: [
    {
      id: "oneTeam",
      heading: "ONE TEAM FOR DEVELOPMENT AND MARKETING",
      description:
        "Your website should work with your SEO, ads, and content strategy. We build with your full digital ecosystem in mind.",
      image: "/website/one-team.png",
    },
    {
      id: "performanceFirst",
      heading: "PERFORMANCE-FIRST BUILDS",
      description:
        "Speed, stability, and mobile usability are treated as requirements, not optional extras. This supports better user experience and more reliable Core Web Vitals.",
      image: "/website/performance-first.png",
    },
    {
      id: "clearTransparent",
      heading: "CLEAR, TRANSPARENT PROCESS",
      description:
        "You get clear milestones, practical guidance, and a build process that stays organized.",
      image: "/website/clear-transparent.png",
    },
    {
      id: "desForTrust",
      heading: "DESIGNED FOR TRUST",
      description:
        "We help you present your services clearly, build credibility, and reduce friction for users who are ready to contact you.",
      image: "/website/designed-trust.png",
    },
    {
      id: "builtToScale",
      heading: "BUILT TO SCALE",
      description:
        "Your site should support new services, new locations, and future campaigns without needing a rebuild every year.",
      image: "/website/built-to-scale.png",
    },
  ],
};

export const DIGITAL_MARKETING_WHY_CHOOSE = {
  title: " Why Businesses Choose HTSOL Digital Marketing Agency",
  para: `Businesses choose <b>HTSOL Inc. Digital Marketing Agency</b> because our work focuses on meaningful outcomes rather than activity alone. <br /> Our team combines technical expertise, strategic thinking, and creative marketing solutions to support long-term digital growth. <br />     When you work with <b>HTSOL Inc</b>., you gain access to:`,
  accordion: [
    {
      number: "01",
      title: "Data-Driven Strategies",
      description:
        "Every campaign begins with research and analytics. This ensures marketing decisions are based on measurable insights.",
    },
    {
      number: "02",
      title: "Experienced Digital Marketing Specialists",
      description:
        "Our team stays informed about search engine updates, marketing technology, and industry trends so your strategy remains current.",
    },
    {
      number: "03",
      title: "Custom Marketing Plans",
      description:
        "We develop bespoke marketing strategies based on your industry, your audience, and your business goals.",
    },
    {
      number: "04",
      title: "Transparent Reporting",
      description:
        "You receive clear performance reports that explain how campaigns are progressing and where improvements can be made.",
    },
    {
      number: "05",
      title: "Scalable Solutions",
      description:
        "As your business grows, your marketing strategy can evolve alongside it.",
    },
  ],
};

export const STAFF_AUGMENTATION_GROWTH = {
  title:
    " Growth Should Not Stop Because You Cannot Afford to Hire — or Take the Risk",
  para: `Every growing business hits the same wall. The workload has outgrown the team. You need a developer to build that feature. A designer to produce that campaign. An SEO specialist to finally get the site ranking. But hiring full-time is expensive, slow, and permanent — and the work you need done might only last three months.
  <br/><br/>
  Most businesses end up stuck between bad options: overpaying a generalist agency, taking a chance on a freelancer who disappears halfway through, or leaving the work undone while the opportunity passes. There is a better model — one where you get a dedicated professional who is actually accountable, without the full-time commitment.`,
  img: "/staff-augmentation/growth-imge.png",
  highlight: "The Real Cost of the Wrong Talent Decision:",
  list: [
    "Months wasted on a hiring process for a role that might not need to be permanent",
    "Freelancers who take the brief, disappear for a week, and deliver something you did not ask for",
    "Agency retainers where you pay a premium to speak to a junior who changes every quarter",
    "Workload sitting undone while the people you need are tied up on other priorities",
    "Projects delayed, launches missed, and growth slowed — not from lack of strategy, but lack of hands",
    "Key person dependency when one team member carries too much and eventually burns out or leaves",
  ],
};

export const STAFF_AUGMENTATION_PROTECTION = {
  bgImg: "/services/protection-bg.png",
  text1:
    "HTSOL Talent Works for You — Under Your Direction, in Your Tools, on Your Schedule. They Are an Extension of Your Team, Not a Vendor You Manage at Arm's Length.",
  text2:
    "You Set the Priorities. You Run the Standups. You Own the Output. We Provide the Person — Screened, Skilled, and Ready to Contribute from Week One.",
  btnText1: " tell us what you need",
  btnLink1: "#white-label-form",
  btnText2: "talk to a talent specialist",
  btnLink2: "#white-label-form",
};

export const STAFF_AUGMENTATION_SERVICES: ServiceData = {
  title: "Roles Available Through HTSOL Staff Augmentation",
  highLight: "FULL-STACK DIGITAL TALENT. ONE ENGAGEMENT MODEL.",
  para: "Whether you need a single specialist or a small embedded team, HTSOL provides senior digital talent across every discipline your business relies on. All roles are available on a dedicated, part-time, or project basis.",
  cards: [
    {
      titleLines: ["Full-Stack Developer"],
      description:
        "A developer who can build across the front and back end — React, Next.js, Node.js, MERN stack. Whether you are building a new feature or accelerating a stalled roadmap, a full-stack developer moves things forward fast.",
      icon: "/staff-augmentation/role-icon-1.svg",
      tone: "muted",
    },
    {
      titleLines: ["Front-End Developer"],
      description:
        "Pixel-perfect implementation of your designs in React, Next.js, HTML, and CSS. Ideal for startups and agencies that have designs ready but need someone to build them properly — responsive, performant, and accessible across every device and browser.",
      icon: "/staff-augmentation/role-icon-2.svg",
      tone: "base",
    },
    {
      titleLines: ["Back-End Developer"],
      description:
        "API development, database architecture, server-side logic, third-party integrations, and performance optimisation. If your product has backend complexity that your current team cannot handle at pace, a dedicated back-end developer changes that equation immediately.",
      icon: "/staff-augmentation/role-icon-3.svg",
      tone: "muted",
    },
    {
      titleLines: ["UI / UX Designer"],
      description:
        "User interface design, user experience flows, wireframing, prototyping, and design systems — in Figma or your tool of choice. A dedicated designer embedded in your team ensures every product decision has a design perspective, and nothing ships looking like it was built by a developer in a hurry.",
      icon: "/staff-augmentation/role-icon-4.svg",
      tone: "base",
    },
    {
      titleLines: ["SEO Specialist"],
      description:
        "Technical SEO, on-page optimisation, local SEO, keyword strategy, content planning, and monthly reporting — all executed by someone who works for you, not for an agency managing fifteen other clients at the same time. Your rankings, your priorities, your dedicated resource.",
      icon: "/staff-augmentation/role-icon-5.svg",
      tone: "muted",
    },
    {
      titleLines: ["Paid Ads Manager"],
      description:
        "Google Ads, Meta Ads, and paid search campaign management — strategy, setup, ongoing optimisation, and clear reporting. A dedicated ads manager embedded in your team means campaigns get the consistent daily attention they need to perform, instead of being checked once a week by an agency account manager.",
      icon: "/staff-augmentation/role-icon-6.svg",
      tone: "base",
    },
    {
      titleLines: ["Social Media Manager"],
      description:
        "Content creation, scheduling, community management, and performance tracking across your social channels. A dedicated social media manager who understands your brand, follows your voice guidelines, and treats your channels as if they are their primary job — because they are.",
      icon: "/staff-augmentation/role-icon-7.svg",
      tone: "muted",
    },
    {
      titleLines: ["Content Writer & Strategist"],
      description:
        "Blog posts, website copy, email sequences, product descriptions, and content strategies — written by someone who is dedicated to your brand, knows your audience, and produces work that ranks and converts. Not a content mill. A professional content resource who is genuinely embedded in your content operations.",
      icon: "/staff-augmentation/role-icon-8.svg",
      tone: "base",
    },
    {
      titleLines: ["Project Manager"],
      description:
        "A dedicated project manager who owns your delivery process — running sprints, managing backlogs, coordinating between teams, tracking timelines, and keeping stakeholders aligned. Ideal for startups and agencies that have the talent but need someone to ensure everything ships on time and to spec.",
      icon: "/staff-augmentation/role-icon-9.svg",
      tone: "muted",
    },
  ],
};

export const STAFF_AUGMENTATION_WHY_CHOOSE = {
  title: "Why Businesses Choose HTSOL for Staff Augmentation",
  highLight: "Senior Talent. Real Accountability. No Fluff.",
  bgColor: true,
  curveLine: true,
  cards: [
    {
      id: "oneTeam",
      heading: "NOT JUST DEVELOPERS — THE FULL DIGITAL STACK",
      description:
        "Most staff augmentation providers give you developers. HTSOL gives you the full range of digital talent your business actually needs — developers, designers, SEO specialists, paid ads managers, content writers, and project managers. One relationship. Every discipline. No need to find a separate provider for each role.",
      image: "/staff-augmentation/why-img-1.png",
    },
    {
      id: "performanceFirst",
      heading: "SENIOR TALENT FROM DAY ONE",
      description:
        "We do not send you a junior resource to learn on your project. Every HTSOL placement is a practitioner with real experience — someone who has done the work before, asks the right questions, and needs minimal hand-holding to deliver. You should see a meaningful contribution in week one, not week six.",
      image: "/website/performance-first.png",
    },
    {
      id: "clearTransparent",
      heading: "ACCESSIBLE TO STARTUPS AND SMES",
      description:
        "Enterprise offshore providers have enterprise minimums — six-figure annual contracts, complex onboarding, and governance structures built for Fortune 500 companies. HTSOL works with startups, growing agencies, and SMBs. Our model scales to your size. Whether you need one person for three months or a small team ongoing, we can accommodate it.",
      image: "/website/clear-transparent.png",
    },
    {
      id: "desForTrust",
      heading: "YOU OWN THE OUTPUT COMPLETELY",
      description:
        "Everything produced by your HTSOL resource belongs to you. Code, designs, content, strategies — it is all yours. We do not retain any rights to work produced during an engagement, and you are not locked into any platform or tooling we own. Your intellectual property is your intellectual property.",
      image: "/website/designed-trust.png",
    },
    {
      id: "builtToScale",
      heading: "HONEST MATCHING — NOT JUST FAST PLACEMENT",
      description:
        "We would rather take an extra few days to match you with the right person than place the wrong one quickly and have you managing a performance problem three weeks in. Before we place anyone, we match their skills, experience, and working style to your actual requirements. If we do not have the right person, we tell you — not try to sell you someone who almost fits.",
      image: "/website/built-to-scale.png",
    },
  ],
};

export const WHITE_LABEL_WHY_CHOOSE = {
  title: "Why Agencies Choose HTSOL Inc. As Their White Label Partner",
  highLight: "Quality You Can Stand Behind. Reliability You Can Count On.",
  bgColor: true,
  curveLine: true,
  cards: [
    {
      id: "oneTeam",
      heading: "We Understand Agency Workflows",
      description:
        "We have worked inside agency relationships before. We understand how agencies sell, how they manage clients, and how they protect their positioning. We are not a freelancer who needs hand-holding. We are a professional execution partner who integrates cleanly into your operation and makes you look good.",
      image: "/white-why-1.png",
    },
    {
      id: "fullStack",
      heading: "Full-Stack Capability Under One Roof",
      description:
        "Most white label options are specialists - they do SEO, or they do web design, or they do ads. HTSOL delivers all of it. That means your agency can offer a complete digital service to your clients without assembling a different partner for each discipline. One relationship. Full capability.",
      image: "/website/full-development.png",
    },
    {
      id: "quality",
      heading: "Quality That Protects Your Reputation",
      description:
        "We only produce work we would be comfortable putting our own name on, which means it is work you can comfortably put yours on. We do not cut corners to hit a price point. If a project requires more time to do it right, we communicate that early, not after we have delivered something substandard.",
      image: "/website/performance-first.png",
    },
    {
      id: "globalDelivery",
      heading: "Canada-Based Strategy, Global Delivery",
      description:
        "HTSOL is based in Mississauga, Ontario. Our strategic oversight is Canadian - we understand Canadian clients, Canadian compliance, and the Canadian market. Our delivery team operates internationally, which gives us the capacity to scale with your agency's needs without inflating your costs.",
      image: "/location-agency.png",
    },
    {
      id: "noConflicts",
      heading: "No Conflicts. Ever.",
      description:
        "We do not take on direct clients in the same markets as our agency partners without prior agreement. We do not approach your clients independently. We do not use the work we produce for you in our own portfolio without explicit permission. Your clients are your clients. That boundary is absolute.",
      image: "/website/clear-transparent.png",
    },
  ],
};

export const STAFF_AUGMENTATION_WHY_CHOOSE_Accordion = {
  highLight: "FLEXIBLE MODELS. NO UNNECESSARY COMMITMENTS.",
  title: "How to Engage HTSOL Talent",
  para: `Every business has different needs, different timelines, and different levels of certainty about what they require. We offer four engagement models so you can start in a way that makes sense for where you are right now.`,
  accordion: [
    {
      number: "01",
      title: " DEDICATED FULL-TIME RESOURCE",
      description:
        "One professional, working for your business exclusively, full-time (40 hours per week). This is the closest equivalent to an employee — they are fully embedded in your team, attend all relevant meetings, and have no competing priorities from other clients. Best for businesses that have a sustained workload that requires consistent daily availability. Typically engaged on a minimum three-month basis.",
    },
    {
      number: "02",
      title: "DEDICATED PART-TIME RESOURCE",
      description:
        "One professional, working for your business on a set part-time schedule — typically 20 hours per week. Ideal for businesses that need consistent, reliable support but do not have full-time volume. The resource is dedicated to you during their agreed hours and is not splitting time between competing clients in an unstructured way. Best for growing businesses adding a specialist discipline for the first time.",
    },
    {
      number: "03",
      title: "PROJECT-BASED ENGAGEMENT",
      description:
        "A dedicated resource or small team assigned to a specific project with a defined scope and timeline — a website build, a product sprint, a marketing campaign, a content rollout. The resource works full-time on your project until it is complete. Best for businesses with a clear, time-bound piece of work that requires dedicated focus rather than ongoing support.",
    },
    {
      number: "04",
      title: "SMALL EMBEDDED TEAM",
      description:
        "A cross-functional team of two to four HTSOL specialists embedded in your operation — for example, a developer, a designer, and an SEO specialist working together on a product or growth initiative. The team is coordinated internally by HTSOL and managed by you at the strategic level. Best for startups or agencies that need to rapidly build out a capability across multiple disciplines simultaneously.",
    },
  ],
};

export const STAFF_AUGMENTATION_AGENCY = {
  curveLine: true,
  title: " Loved by Digital Agencies across Canada and the US!",
  highLight: "Alan Baker",
  para: `Working with HtSolutions has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!
  <br /><br />
  Working with HtSolutions has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations.`,
  bottomPara: "CEO",
  className: "pb-10! md:pb-20! lg:pt-40!",
};

export const STAFF_AUGMENTATION_SMART_WAY = {
  bgImage: "/staff-augmentation/smart-way-bg.png",
  title: "THE SMARTEST WAY TO SCALE YOUR TEAM WITHOUT SCALING YOUR RISK",
  para: `The traditional hiring model is built for a different era. Permanent headcount, six-month hiring cycles, expensive onboarding, and the constant risk that your new hire does not work out — none of that is suited to the speed at which businesses need to move today.
  <br /><br />
  Staff augmentation is the modern alternative. You get the talent when you need it, at the level you need it, for as long as you need it. Then you scale back when the project ends or the workload changes — without a restructure, without a redundancy, without any of the legal and emotional complexity that comes with letting people go.`,
  btnText: "  Tell Us What You Need",
  btnLink: "#white-label-form",
  items: [
    {
      title: "Senior talent available in days, not months",
      image: "/staff-augmentation/smart-way-img-1.png",
      alt: "Senior talent available in days, not months",
    },
    {
      title: "Pay for the hours and skills you actually need — nothing more",
      image: "/website/full-development.png",
      alt: "Pay for the hours and skills you actually need — nothing more",
    },
    {
      title:
        "Scale up and down as your workload demands without the hiring and firing cycle",
      image: "/website/conversion-focused.png",
      alt: "Scale up and down as your workload demands without the hiring and firing cycle",
    },
    {
      title:
        "Eliminate employer taxes, benefits, office costs, and equipment overhead",
      image: "/website/technical-seo.png",
      alt: "Eliminate employer taxes, benefits, office costs, and equipment overhead",
    },
    {
      title: "Test a role before you commit to making it permanent",
      image: "/website/analytics.png",
      alt: "Test a role before you commit to making it permanent",
    },
    {
      title:
        "Keep your core team lean and focused while augmented talent handles specific workloads",
      image: "/website/performance.png",
      alt: "Keep your core team lean and focused while augmented talent handles specific workloads",
    },
  ],
  className: "pb-20! pt-10! lg:pt-40!",
};

export const STAFF_AUGMENTATION_EXPERT = {
  bgImage: "/staff-augmentation/expert-bg.png",
  title:
    " NEED AN EXTRA PAIR OF HANDS — OR AN ENTIRE CAPABILITY YOU DO NOT HAVE YET?",
  para: ` Tell us what you need, what your timeline looks like, and what a successful engagement means for your business. We will match you with the right talent and get you started fast — no lengthy procurement process, no enterprise contract, no unnecessary complexity.`,
  btnText: "Tell Us What You Need",
  btnLink: "#white-label-form",
};

export const STAFF_AUGMENTATION_FAQS = [
  {
    question:
      "What is the difference between staff augmentation and hiring a freelancer?",
    answer:
      "A freelancer works for themselves — on their schedule, across multiple clients, with their own tools, and with limited accountability to your process. A staff augmentation resource works for you — inside your tools, on your hours, under your direct management, with full accountability to your team and your deliverables. The key difference is integration and dedication. A freelancer is a contractor you work with. An augmented resource is a professional who becomes part of your team for the duration of the engagement.",
  },
  {
    question: "How is this different from using an agency?",
    answer:
      "When you hire an agency, they own the work. They assign whoever is available, you communicate through an account manager, and you often have limited visibility into who is actually doing the work. With staff augmentation, you get a named individual who works for you directly. You manage them, you set the priorities, you see the output as it is produced. There is no account manager in between, no markup for overhead you do not need, and no risk that your project is being deprioritised because the agency is busy with a bigger client.",
  },
  {
    question: "How quickly can someone start?",
    answer:
      "In most cases, within five business days of confirming the engagement. The timeline depends on the specific role and experience level required — some specialist roles take a few additional days to match correctly. We prioritise placing the right person over placing someone fast, but we move quickly. If you have a hard start date, tell us upfront and we will work backwards from it.",
  },
  {
    question: "What roles can I hire through HTSOL staff augmentation?",
    answer:
      "Full-stack, front-end, and back-end developers. UI/UX designers and graphic designers. SEO specialists. Paid ads managers for Google and Meta. Social media managers. Content writers and content strategists. Email marketing specialists. Project managers. If you need a digital role that is not listed, ask us — we may still be able to help, or we can be honest if we cannot.",
  },
  {
    question: "Do I need to provide equipment or software licences?",
    answer:
      "It depends on the role and your preference. Most HTSOL resources work with their own hardware. For software licences — design tools, development environments, SEO platforms — we can work within your existing licences, source our own where appropriate, or advise on the most cost-effective approach for your situation. We will clarify this before the engagement starts so there are no surprises.",
  },
  {
    question: "Can I end an engagement early if it is not working?",
    answer:
      "Yes. We do not lock clients into long-term contracts they cannot exit. Our standard engagements have a two-week notice period for ending or adjusting scope. If the placement is genuinely not working — the match is wrong, the output is not meeting your standard — we address it directly and, if necessary, make a replacement. We would rather solve the problem than hold you to a contract that is not delivering value.",
  },
  {
    question: "Who manages the HTSOL resource — us or you?",
    answer:
      "You manage them. You set the work priorities, run the standups, assign the tasks, and provide feedback. HTSOL handles the employment relationship — compensation, compliance, HR matters. Think of it as us being the employer of record while you are the day-to-day manager. You get all the control of a direct report without any of the employment administration.",
  },
  {
    question: "Can a staff augmentation arrangement become a permanent hire?",
    answer:
      "Yes — this is actually one of the advantages of the model. An augmentation engagement is an effective way to trial a person before committing to a permanent role. If after three to six months you want to convert the relationship to a direct permanent hire, we can facilitate that. The terms of conversion are agreed upfront so there are no ambiguities later.",
  },
  {
    question: "Is there a minimum engagement length?",
    answer:
      "We ask for a minimum commitment of one month for dedicated full-time and part-time resources — this ensures there is enough runway for the person to contribute meaningfully and for you to evaluate the value of the engagement. For project-based work, the minimum is the scope of the project itself. We do not offer day rates or week-by-week arrangements — the value of augmentation comes from consistency and integration, which requires a minimum time commitment to establish.",
  },
  {
    question:
      "How do you ensure the person you place is actually as experienced as described?",
    answer:
      "Every resource goes through an internal technical and professional evaluation before we make a placement. We assess their skills against the role requirements, review examples of their work, and conduct a structured interview process. We also match for working style, communication quality, and remote work capability — not just technical ability. If we are not confident someone is the right fit for your specific requirements, we will not place them and will keep looking. A bad placement creates more work for you and damages the relationship — we would rather take more time to get it right.",
  },
];

export const DIGITAL_TRANSFORMATION_GROWTH = {
  title: "Your Competitors Are Getting Customers You Should Be Getting",
  para: ` Every day, people in your area search for the exact services you offer. A dentist near me. A physio open on Saturday. An electrician available today. A family lawyer I can trust. These are real, high-intent searches from people ready to book, call, or enquire. If your business is not showing up properly, those leads go somewhere else.
  <br/><br/>
  The problem is not demand. The problem is visibility, trust, and follow-through. Without the right website, local SEO, messaging, and systems in place, your business stays harder to find and harder to choose. Over time, that gap grows. Competitors build more reviews, better rankings, stronger authority, and better client journeys while you rely on inconsistent referrals.`,
  img: "/digital-transformation/growth-img.png",
  highlight: "Here Is What Digital Invisibility Actually Costs You:",
  list: [
    "Clients choosing a competitor because they found them first on Google",
    "Growth that depends too heavily on referrals instead of a predictable pipeline",
    "No reliable inbound channel if your best referral source slows down",
    "Higher acquisition costs because you lack organic visibility and smart automation",
    "Slower growth because your website, SEO, and internal systems are not working together",
    "A business that is harder to scale, harder to sell, and more vulnerable than it should be",
  ],
};

export const DIGITAL_TRANSFORMATION_ACHIEVEMENTS = [
  {
    img: "/digital-transformation/build-icon-1.svg",
    name: "One Complete System",
    para: "Brand, website, SEO, marketing, and operations — connected, not cobbled together",
  },
  {
    img: "/digital-transformation/build-icon-2.svg",
    name: "0 to 100 Online",
    para: "From no digital presence to a fully functioning online growth engine — start to finish",
  },
  {
    img: "/digital-transformation/build-icon-3.svg",
    name: "All Under One Roof",
    para: "Strategy, design, development, marketing, and automation — one partner, one plan",
  },
];

export const DIGITAL_TRANSFORMATION_PROTECTION = {
  bgImg: "/services/protection-bg.png",
  text1:
    "HTSOL Inc. Handles the Full Journey — From Brand Strategy and Website Launch to SEO, Automation, and the Systems That Support Growth.",
  text2:
    "You Do Not Need Five Different Vendors. You Do Not Need to Figure Out Digital Marketing or Internal Systems on Your Own. You Need One Team That Builds the Right Foundation, Connects Everything Properly, and Shows You Real Results.",
  btnText1: "Book A free consultation",
  btnLink1: "/contact-us",
  btnText2: "see what is included",
  btnLink2: "/contact-us",
};

export const DIGITAL_TRANSFORMATION_EVERYTHING = {
  title: "FROM INVISIBLE TO IN-DEMAND: THE COMPLETE JOURNEY",
  highLight: "EVERYTHING YOUR BUSINESS NEEDS. NOTHING IT DOESN'T",
  para: ` We do not overload your business with random tactics. We build your digital presence in the right order, so every stage strengthens the next one. That is how effective <b>digital transformation for service businesses</b> works: one connected system, not a collection of disconnected tasks.`,
  bgColor: true,
  cards: [
    {
      id: "oneTeam",
      heading: "BRAND IDENTITY",
      description:
        "Before people trust your website, ads, or Google listing, they judge your brand. We create a professional logo, visual identity, messaging direction, and positioning that make your business feel credible, established, and worth contacting from the first impression.",
      image: "/digital-transformation/everything-img-1.png",
    },
    {
      id: "performanceFirst",
      heading: "WEBSITE DESIGN & DEVELOPMENT",
      description:
        "Your website is your digital storefront. We design and build a fast, mobile-ready, conversion-focused website that clearly explains what you do, who you help, and why people should choose you. Every page is built to support trust, SEO, and action.",
      image: "/website/performance-first.png",
    },
    {
      id: "clearTransparent",
      heading: "LOCAL SEO & GOOGLE VISIBILITY",
      description:
        "Once your site is live, we help the right people find it. We improve your Google Business Profile, local relevance, service pages, and search visibility so your business appears for the searches that matter in your city and service area.",
      image: "/website/clear-transparent.png",
    },
    {
      id: "desForTrust",
      heading: "DIGITAL MARKETING & PAID GROWTH",
      description:
        "SEO builds long-term momentum. Paid campaigns can generate demand sooner. We use the right mix of Google Ads, content, local search strategy, and social visibility to support growth based on your goals, timeline, and budget.",
      image: "/website/designed-trust.png",
    },
    {
      id: "builtToScale",
      heading: "SYSTEMS, AUTOMATION & SOFTWARE",
      description:
        "Growth only works when your operations can handle it. This is where our workflow automation consulting, digital systems consulting, and software modernization consulting come in. If your business needs better booking flows, CRM integration, reporting dashboards, internal tools, or more efficient processes, we build and connect the systems that support growth behind the scenes.",
      image: "/website/built-to-scale.png",
    },
  ],
};

export const DIGITAL_TRANSFORMATION_WHAT: ServiceData = {
  highLight: "BRANDING. WEBSITE. MARKETING. SOFTWARE. ALL UNDER ONE ROOF.",
  title: "WHAT IS INCLUDED IN YOUR DIGITAL TRANSFORMATION",
  para: "Every service we provide is connected. Your brand shapes your website. Your website supports your SEO. Your marketing brings in demand. Your systems help you handle that demand efficiently. We build your growth engine as one complete system.",
  cards: [
    {
      titleLines: ["Brand Identity & Logo Design"],
      description:
        "A professional logo, colour palette, and brand direction that make your business look consistent, trustworthy, and established. We create an identity that reflects what your business stands for and gives people confidence before they ever contact you.",
      icon: "/staff-augmentation/role-icon-1.svg",
      tone: "muted",
    },
    {
      titleLines: ["Website Design"],
      description:
        "A website designed around your business, your audience, and your goals, not a generic template. Clean, modern, mobile-first layouts help visitors understand your services quickly and guide them toward booking, calling, or enquiring.",
      icon: "/staff-augmentation/role-icon-2.svg",
      tone: "base",
    },
    {
      titleLines: ["Website Development"],
      description:
        "We build websites that are fast, responsive, technically sound, and ready for long-term growth. That includes strong foundations for SEO, lead capture, analytics, and future integrations, so your site supports both visibility and performance.",
      icon: "/digital-transformation/what-icon-1.svg",
      tone: "muted",
    },
    {
      titleLines: ["Local SEO & Google Maps"],
      description:
        "We help your business show up where local buyers are already searching. That includes Google Business Profile optimization, local landing pages, on-site SEO, citation work, and location relevance strategies that improve local visibility.",
      icon: "/digital-transformation/what-icon-2.svg",
      tone: "base",
    },
    {
      titleLines: ["Google Ads & Paid Search"],
      description:
        "SEO takes time. Paid search helps you appear sooner. We build and manage targeted Google Ads campaigns focused on high-intent searches, so your business can start generating quality enquiries while your organic visibility grows.",
      icon: "/digital-transformation/what-icon-3.svg",
      tone: "muted",
    },
    {
      titleLines: ["Social Media Marketing"],
      description:
        "We keep your brand visible and consistent across social channels with the right strategy, content direction, and messaging. This helps build credibility, familiarity, and trust with the audience most likely to become clients.",
      icon: "/staff-augmentation/role-icon-6.svg",
      tone: "base",
    },
    {
      titleLines: ["Content Marketing"],
      description:
        "We create service pages, blogs, FAQs, and local content that answer the questions your ideal clients are already typing into search. This improves authority, supports rankings, and gives your website more ways to attract the right traffic.",
      icon: "/digital-transformation/what-icon-4.svg",
      tone: "muted",
    },
    {
      titleLines: ["Review & Reputation Strategy"],
      description:
        "Reviews influence trust and conversions. We help you build a process for requesting more genuine reviews, responding professionally, and strengthening your online reputation across Google and other relevant platforms.",
      icon: "/digital-transformation/what-icon-5.svg",
      tone: "base",
    },
    {
      titleLines: ["Custom CRM & Booking Software"],
      description:
        "As leads increase, your operations need to keep up. We provide crm and workflow automation consulting, booking systems, internal tools, lead management flows, and custom software support to improve business efficiency, reduce manual work, and support scale. This is where business process automation services, systems integration services, and business systems modernization create real day-to-day value.",
      icon: "/digital-transformation/what-icon-6.svg",
      tone: "muted",
    },
  ],
};

export const DIGITAL_TRANSFORMATION_WHY = {
  highLight: "One Team. Every Piece. Real Results.",
  title: "Why Service Businesses Choose HTSOL Inc.",
  cards: [
    {
      icon: "/digital-transformation/why-icon-1.svg",
      id: "we-do-everything-in-house-no-handoffs",
      heading: "We Do Everything In-House No Handoffs",
      para: "Most providers focus on one piece only: web design, SEO, ads, or software. That leaves you managing multiple vendors who do not share one plan. HTSOL brings strategy, design, development, marketing, automation, and system improvements together under one roof, so every part supports the next.",
    },
    {
      icon: "/digital-transformation/why-icon-2.svg",
      id: "we-understand-service-businesses",
      heading: "We Understand Service Businesses",
      para: "We work with businesses where trust matters and buying decisions are personal. That includes clinics, healthcare providers, law firms, contractors, and other local service businesses. We understand how people search, what builds confidence, and what helps turn interest into action.",
    },
    {
      icon: "/digital-transformation/why-icon-3.svg",
      id: "we-start-where-you-are",
      heading: "We Start Where You Are",
      para: "You do not need a polished brand or a complete online presence before you speak with us. Whether you have nothing in place or an outdated setup that needs improvement, we assess your current position and build the right roadmap from there. That makes our digital transformation consulting for small business practical, not overwhelming.",
    },
    {
      icon: "/digital-transformation/why-icon-4.svg",
      id: "you-own-everything-we-build",
      heading: "You Own Everything We Build",
      para: "Your domain, website, content, accounts, and digital assets belong to you. We do not lock clients into systems they cannot control. We build assets that strengthen your business over time and remain valuable whether you continue with us or not.",
    },
    {
      id: "results-image",
      mainImage: "/digital-transformation/why-img.png",
      imageAlt: "Mississauga web design agency",
    },
    {
      icon: "/digital-transformation/why-icon-5.svg",
      id: "results-measure",
      heading: "Results You Can Measure from Day One",
      para: "We track the metrics that matter: rankings, traffic, leads, calls, enquiries, and conversion performance. We also improve the operational side through reporting automation, connected tools, and better visibility into what is actually driving growth.",
    },
  ],
};

export const DIGITAL_TRANSFORMATION_Accordion = {
  highLight: "A CLEAR PROCESS. NO SURPRISES. REAL PROGRESS.",
  title: "What to Expect When You Work With HTSOL Inc.",
  para: `We keep the process simple, organised, and transparent. You always know what is happening, what comes next, and what we need from you. That is how effective business digitization services should feel.`,
  accordion: [
    {
      number: "01",
      title: "DISCOVERY CALL",
      description:
        "We start with a practical conversation about your business, your services, your current setup, and your goals. We identify what is missing, what is already working, and where the biggest opportunities are.",
    },
    {
      number: "02",
      title: "AUDIT & STRATEGY",
      description:
        "We review your current digital footprint, competitors, search landscape, messaging, and opportunities for improvement. If needed, we also assess your internal workflows, digital tools, and client journey to identify where process redesign, automation, or modernization could improve performance.",
    },
    {
      number: "03",
      title: "BRAND & WEBSITE BUILD",
      description:
        "We create or refine your brand and then design and build your website around it. You review direction early, approve key decisions, and stay involved where it matters, while we handle the writing, structure, technical setup, and build.",
    },
    {
      number: "04",
      title: "SEO & MARKETING LAUNCH",
      description:
        "Your website goes live with the right SEO foundations in place. We optimise your Google presence, launch the agreed campaigns, and make sure your digital channels are working together to generate visibility and enquiries.",
    },
    {
      number: "05",
      title: "GROWTH & OPTIMISATION",
      description:
        "We monitor rankings, traffic, lead quality, campaign performance, and user behaviour. Then we refine. SEO improves over time. Ads get smarter with data. Content expands. Conversions improve. Your digital presence becomes stronger and more efficient month by month.",
    },
    {
      number: "06",
      title: "SCALE & EVOLVE",
      description:
        "As your business grows, your digital setup should grow with it. That may include software modernization, systems integration services, improved digital infrastructure, better internal systems, or expanded automation. We stay involved as your long-term partner, not just a launch vendor.",
    },
  ],
};

export const DIGITAL_TRANSFORMATION_DIGITAL_PRESENCE = {
  curveLine: true,
  title:
    "Digital Presence Is One of the Most Valuable Assets a Service Business Can Build",
  para: `Referrals are helpful, but they are not predictable. Word of mouth matters, but it does not scale on its own. A Google Business listing is useful, but it is not a full strategy.
  <br/><br/>
  A well-built digital presence does something different. It compounds. It improves visibility, strengthens trust, supports lead generation, and creates a better client journey over time. When your website, SEO, marketing, and systems are working together, your business becomes easier to grow and easier to manage.`,
  btnText: "Book a Free Consultation",
  btnLink: "/contact-us",
  items: [
    {
      title:
        "A brand that creates the right first impression online and offline",
      image: "/digital-transformation/digital-presence-1.png",
      alt: "Senior talent available in days, not months",
    },
    {
      title:
        "A website that turns visitors into real enquiries around the clock",
      image: "/website/full-development.png",
      alt: "Pay for the hours and skills you actually need — nothing more",
    },
    {
      title: "Google visibility that brings in leads beyond referrals alone",
      image: "/website/conversion-focused.png",
      alt: "Scale up and down as your workload demands without the hiring and firing cycle",
    },
    {
      title:
        "Marketing and automation that support predictable, measurable growth",
      image: "/website/technical-seo.png",
      alt: "Eliminate employer taxes, benefits, office costs, and equipment overhead",
    },
    {
      title:
        "Better workflow optimisation, stronger systems, and improved business efficiency",
      image: "/website/analytics.png",
      alt: "Test a role before you commit to making it permanent",
    },
    {
      title:
        "A business that is easier to scale, easier to sell, and less dependent on luck",
      image: "/website/performance.png",
      alt: "Keep your core team lean and focused while augmented talent handles specific workloads",
    },
  ],
  className: "pb-10! lg:pb-20! pt-20! lg:pt-40!",
};

export const DIGITAL_TRANSFORMATION_DIGITAL_SHIFT = {
  bgImage: "/staff-augmentation/smart-way-bg.png",
  title: "EMPOWERING MODERN BRANDS TO LEAD THE DIGITAL SHIFT",
  para: `The transition from traditional systems to a cloud-native environment seemed daunting until we partnered with HtSolutions. Their team bridged the gap between our vision and technical execution perfectly. We are now more agile, more responsive, and miles ahead of our competitors.`,
  highLight: "SARAH JENKINS",
  bottomPara: "Director of Innovation",
};

export const DIGITAL_TRANSFORMATION_READY = {
  bgImage: "/digital-transformation/ready-bg.png",
  title:
    "READY TO STOP RELYING ON REFERRALS AND START GETTING CLIENTS FROM GOOGLE?",
  para: `Whether you have no website, an outdated one, disconnected systems, or a site that is not generating results, we can help you fix it. HTSOL delivers digital transformation services that bring your brand, website, marketing, and internal systems together into one practical growth plan. Start with a free consultation and we will show you where you stand, what needs to happen next, and what the right scope looks like for your business.`,
  btnText: "Book a free consultation",
  btnLink: "/contact-us",
  className: "max-w-6xl!",
};

export const DIGITAL_TRANSFORMATION_FAQS = [
  {
    question:
      "I have a Google Business listing and I get referrals — do I really need a website?",
    answer:
      "A Google Business listing helps people who already know what they are looking for. A website helps you win trust, explain your services clearly, rank for more searches, and convert more visitors into enquiries. It also gives you an asset you fully control. A listing alone is not a complete digital strategy.",
  },
  {
    question: "How much does a complete digital transformation cost?",
    answer:
      "It depends on your starting point and what your business needs. Some businesses need branding, a new website, local SEO, and light automation. Others also need business process automation, CRM setup, or software modernization consulting. We scope projects based on your goals, current position, and priorities, then give you a clear breakdown of cost and deliverables.",
  },
  {
    question:
      "How long does it take before I start getting clients from my website?",
    answer:
      "That depends on the channels involved. Google Ads can generate enquiries quickly after launch. SEO usually takes longer to build, but its value compounds over time. Automation and system improvements may not directly bring in leads, but they improve follow-up, response speed, and conversion efficiency once leads start coming in.",
  },
  {
    question: "Can I start with just a website and add marketing later?",
    answer:
      "Yes. That is a common starting point. We often begin with brand and website work, then add local SEO, paid campaigns, content, and operational improvements over time. The key is planning it properly from the start so each stage connects to the next.",
  },
  {
    question:
      "I am a dentist / physio / lawyer — do you understand my industry?",
    answer:
      "Yes. We work with trust-based service businesses where credibility, clarity, and local visibility matter. That includes healthcare, legal, and professional services. We understand how clients search, what information they need before contacting you, and how to structure a digital presence that supports those decisions. This also makes us a strong fit for digital transformation for healthcare clinics and other service-led businesses.",
  },
  {
    question: "Will I need to be heavily involved in the process?",
    answer:
      "Not heavily. We involve you in the decisions that need your input, such as brand direction, design approval, service details, and business priorities. We handle the strategy, writing, development, implementation, and optimisation work so you can stay focused on running the business.",
  },
  {
    question: "What if I already have a website but it is not working?",
    answer:
      "That is common. Sometimes the issue is poor messaging, weak SEO, slow performance, bad structure, or missing conversion paths. In other cases, the problem is that the website is not connected properly to your lead handling, reporting, or internal systems. We audit what is there, identify the real bottlenecks, and recommend the most practical fix.",
  },
  {
    question: "Do you write the website copy or do I need to provide it?",
    answer:
      "We write it. You give us the core information about your services, service areas, differentiators, and business goals. We turn that into clear, persuasive, SEO-friendly copy that speaks to your audience naturally and supports conversions.",
  },
  {
    question:
      "What happens to everything you build if I stop working with HTSOL?",
    answer:
      "It stays yours. Your website, content, accounts, domain, and digital assets remain under your control. If we build connected systems, dashboards, or automation flows, we structure them so your business is not locked out of what it paid for.",
  },
  {
    question: "How do I know if digital transformation is actually working?",
    answer:
      "We measure it. That includes traffic, rankings, calls, form submissions, lead quality, campaign data, and operational improvements where relevant. If your project includes workflow automation consulting, reporting automation, or system changes, we also track how those improvements support faster response times, cleaner workflows, and better efficiency.",
  },
];

export const CEO_SKILLS = {
  skills: [
    { src: "/ceo/figma.svg", label: "Digital Growth Strategy" },
    { src: "/ceo/wordpress.svg", label: "Dental Marketing" },
    { src: "/ceo/elementor.svg", label: "Healthcare Digital Marketing" },
    { src: "/ceo/vscode.svg", label: "Mental Health Clinic Growth" },
    { src: "/ceo/visual-studio.svg", label: "Conversion Rate Optimization" },
    { src: "/ceo/photoshop.svg", label: "Custom CRM & CMS Development" },
    { src: "/ceo/xd.svg", label: "AI-Powered SEO" },
    { src: "/ceo/adobe-ai.svg", label: "SaaS Product Development" },
    { src: "/ceo/shopify.svg", label: "Design Psychology" },
    { src: "/ceo/webflow.svg", label: "Agency White Label Partner" },
    { src: "/ceo/laravel.svg", label: "Full-Stack MERN Development" },
    { src: "/ceo/shopify.svg", label: "E-Commerce Growth" },
    { src: "/ceo/webflow.svg", label: "Search Engine Optimization" },
    { src: "/ceo/laravel.svg", label: "Web Performance & Speed" },
  ],
};

export const CEO_ABOUT_ME = {
  title: "About Me",
  para: `I started as a developer. Over 8 years I built websites, platforms, and software for businesses across 5 countries — and somewhere along the way I noticed something that bothered me:
  technically excellent work failing because the strategy behind it was wrong. Great code sitting on a website nobody could find. Beautiful designs that didn&apos;t convert. Platforms launched without any plan for growth.
  <br/><br/>
  That&apos;s why I built HTSOL Inc. the way I did — with design, development, and marketing operating as one coordinated unit, not three separate vendors pulling in different directions. Today I work with healthcare practices, dental clinics, mental health providers, and marketing agencies who need more than execution. They need someone who understands the full picture: what to build, how to market it, and how to make it grow. That&apos;s what I do.`,
  image: "/ceo/about-me.webp",
  signImage: "/ceo/signature.webp",
};

export const CTO_SKILLS = {
  skills: [
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
  ],
};

export const CTO_ABOUT_ME = {
  title: "About Me",
  para: `I am a software architect, full-stack engineer, and AI systems builder with over six years of experience designing web applications, intelligent automation systems, and digital infrastructure. My engineering background — rooted in avionics and complex systems design — means I think about technology the way an engineer designs a control system: precision-first, failure-aware, built to perform under load. When I joined HTSOL Inc. as CTO, I brought that foundation to one focused purpose: building AI-driven digital systems that help dental practices and healthcare businesses grow online — high-performance websites, custom CRMs, intelligent SEO automation, and software that actually fits how a clinical team operates.
  <br/><br/>
  Dental practices don't struggle because of bad dentistry. They struggle because their digital presence doesn't reflect the quality of care they deliver. My job is to close that gap — with websites engineered to perform from day one, AI-powered SEO systems that automate the discovery of high-intent dental searches, intelligent booking and CRM software that reduces front-desk administrative burden, and robotic process automation that handles the repetitive operational tasks that eat into a clinical team's time. I've helped practices across the UK turn underperforming websites into consistent patient acquisition engines. That's the standard I bring to every build.`,
  image: "/cto/about-cto.png",
  signImage: "/ceo/signature.webp",
};

export const CTO_ACHIEVEMENTS = [
  {
    number: "6+",
    name: "YEARS IN SOFTWARE DEVELOPMENT",
    para: "From software engineering and system architecture to building production-grade web applications for businesses in the UK and Canada.",
  },
  {
    number: "UK ",
    name: "DENTAL TRACK RECORD",
    para: "Helped dental practices across Manchester, Birmingham, London, Leeds, Bristol, and Edinburgh turn underperforming websites into consistent patient acquisition systems.",
  },
  {
    number: "100+",
    name: "TECHNOLOGIES INTEGRATED",
    para: "From custom MERN stack builds and Django back-ends to AI-optimised SEO systems, booking integrations, and practice management software.",
  },
];

export const CTO_SERVICES = {
  title: "The Technical Systems Behind HTSOL's Results",
  para: "I don't do surface-level web work. Every system I build is engineered for performance, infused with AI where it creates real value, and built to support genuine long-term growth.",
  cards: [
    {
      // icon: "/ceo/full-stack-architecture.json",
      icon: "/ceo/what-do-icon-1.svg",
      heading: "High-Performance Dental Websites",
      para: "I build dental websites that are fast, mobile-first, and technically structured for SEO from the ground up — not templated, not slowed by bloated plugins, not built on platforms that create performance debt. Core Web Vitals, clean architecture, conversion-focused structure. The technical foundation that makes every other marketing effort more effective.",
    },
    {
      // icon: "/ceo/strategic-custom-solutions.json",
      icon: "/ceo/what-do-icon-2.svg",
      heading: "Custom CRM & Practice Management Software",
      para: "Off-the-shelf practice management tools cost more than they solve. I build custom CRM systems, booking platforms, and patient management tools tailored to how a dental team actually works — from front-desk workflows to treatment tracking to automated recall systems. Built to your exact process, owned entirely by your practice.",
    },
    {
      // icon: "/ceo/cutting-edge.json",
      icon: "/ceo/what-do-icon-3.svg",
      heading: "AI-Optimised SEO Systems",
      para: "SEO for dental practices is not generic blog writing and keyword stuffing. It is technical infrastructure — site architecture that search engines can crawl properly, local signals that put your practice in the map pack, schema markup that communicates exactly what you offer and where. I build the technical SEO layer that makes everything else rank.",
    },
    {
      // icon: "/ceo/full-stack-architecture.json",
      icon: "/ceo/what-do-icon-4.svg",
      heading: "CMS Architecture & Setup",
      para: "A poorly architected CMS becomes a bottleneck — slow to update, prone to breaking, and difficult to scale. I design and build CMS systems that give your team full control over content without touching code, keep the site fast, and support your long-term marketing operations. Built to grow with your practice, not fight it.",
    },
    {
      // icon: "/ceo/strategic-custom-solutions.json",
      icon: "/ceo/what-do-icon-5.svg",
      heading: "API Development & Third-Party Integrations",
      para: "Booking systems, payment processors, email marketing platforms, practice management software, analytics — I connect your digital systems so they share data automatically, eliminate manual work, and give you a single coherent view of your practice's digital performance. Custom API development and third-party integrations that actually work reliably.",
    },
    {
      // icon: "/ceo/cutting-edge.json",
      icon: "/ceo/what-do-icon-6.svg",
      heading: "Web Performance & Technical Audits",
      para: "A slow website loses patients before they book. I conduct in-depth technical audits that identify exactly what is limiting your site's performance — load speed, Core Web Vitals, crawlability, indexation, security, and conversion friction — and fix them in order of impact. The technical health of your website directly affects your rankings and your bookings.",
    },
  ],
};

export const WHY_HIRE_ME_CTO = {
  title: "WHY WORK WITH ME",
  para: `Most web developers build websites. I build dental digital systems — the technical infrastructure that makes a practice visible, bookable, and operationally efficient. There is a difference, and it shows in every project I deliver.`,
  btnText: "Let's Discuss Your Technical Requirements",
  btnLink: "/contact-us",
  cards: [
    {
      // icon: "/ceo/full-stack-architecture.json",
      icon: "/ceo/why-icon-1-2.svg",
      hoverIcon: "/ceo/why-icon-1.svg",
      heading: "BUILT FOR DENTAL — NOT ADAPTED FROM GENERIC",
      para: " I have spent years building specifically for dental practices. I understand PIPEDA and patient data compliance. I know how booking systems need to work for a clinical front desk. I understand the local SEO signals that matter for dental searches — 'dentist near me', 'Invisalign [city]', 'emergency dental'. When I build for a dental practice, I am not starting from a generic template and adapting it. I am building from dental-specific knowledge.",
    },
    {
      // icon: "/ceo/strategic-custom-solutions.json",
      icon: "/ceo/why-icon-2.svg",
      hoverIcon: "/ceo/why-icon-2-2.svg",
      heading: "PROVEN IN COMPETITIVE DENTAL MARKETS",
      para: "I built and optimised dental websites across Manchester, Birmingham, London, Leeds, Bristol, and Edinburgh — some of the most competitive dental markets in the English-speaking world. UK dental patients are demanding, UK Google rankings are hard-fought, and the practices I worked with saw measurable patient acquisition improvements. That track record is what I bring to every Canadian engagement.",
    },
    {
      // icon: "/ceo/cutting-edge.json",
      icon: "/ceo/why-icon-3.svg",
      hoverIcon: "/ceo/why-icon-3-2.svg",
      heading: "ARCHITECTURE THINKING IN EVERY BUILD",
      para: "Six years as a Senior Software Architect means I think about systems, not just pages. Before I write code, I think about how the components interact, where the performance bottlenecks will be, how the system will behave under load, and what changes the practice will need to make in two years. That architectural thinking prevents technical debt and produces websites and software that work properly — and keep working.",
    },
  ],
};

export const CLIENT_SAY_ABOUT_CTO = {
  title: "What my clients say about me",
  leftQuote: "/ceo/left-qoute.svg",
  rightQuote: "/ceo/right-qoute.svg",
  reviews: [
    {
      para: "Working with Muhammad Faseeh Ullah has helped us a lot. Their AI solutions helped us automate the online customer support, which helped us focus on the other core business responsibilities.",
      image: "/ceo/abraham.webp",
      name: "Abraham",
      designation: "CEO | Tech Innovators",
    },
    {
      para: "Really great experience working together. Faseeh did an excellent job improving and polishing our frontend, with a strong focus on UI quality, performance optimization, and responsive behavior. They worked confidently with React.js and Next.js, translated designs and wireframes into clean, interactive components, and integrated everything smoothly with our RESTful APIs. Load times and overall responsiveness improved noticeably, and everything works consistently across browsers. Solid communication and delivery — would definitely work with them again.",
      image: "/ceo/user-icon.png",
      name: "SAM",
      designation: "CO-FOUNDER, MEIIDZ",
    },
    {
      para: "Really great experience working together. Faseeh did an excellent job improving and polishing our frontend, with a strong focus on UI quality, performance optimization, and responsive behavior. Load times and overall responsiveness improved noticeably, and everything works consistently across browsers.",
      image: "/ceo/user-icon.png",
      name: "MUKHLIS",
      designation: "TECHAGENCY BANGLA",
    },
    {
      para: "I engaged Faseeh for marketing initiatives at Same Day Builders, a company specializing in handyman services. Faseeh and his team at HtSol demonstrated remarkable flexibility by accommodating my ever-changing schedule, which is par for the course as a business owner. Moreover, during our initial proposal meeting, Faseeh adeptly addressed all of my questions and objectives. This instilled a level of comfort and confidence in me, affirming that I had made the right decision in partnering with him for our marketing needs. Given the positive experience and results, I've decided to extend my collaboration with HtSol to Meiidz, another venture of mine that offers semi-national house cleaning services. The professionalism and effectiveness Faseeh has shown make me optimistic about the marketing prospect.",
      image: "/ceo/user-icon.png",
      name: "MARISS N.",
      designation: "FOUNDER / CEO, SAME DAY BUILDERS, USA",
    },
    {
      para: "Our Account Manager at HtSol was very punctual and very communicative when it came to the campaign. I appreciate his will to understand what the client wants and overall the company to deliver.",
      image: "/ceo/user-icon.png",
      name: "JAMES ASUNA",
      designation: "PRINCIPAL DENTIST AND FOUNDER",
    },
    {
      para: `I was immediately impressed by their prompt and clear communication. They took the time to understand the nuances of my project and asked insightful questions that demonstrated their expertise in the field. This level of professionalism instantly put me at ease and assured me that I was in capable hands.

    Great campaign and managed all aspects of it - really happy with the support and guidance to make it a collaborative approach as it just took a lot of the stress away from me on an area I don't know much about.

    Perfectly executed and really happy with the communication throughout.
    `,
      image: "/ceo/user-icon.png",
      name: "ASIF N.",
      designation: "FOUNDER, MARKETING AGENCY, UK",
    },
    {
      para: "Project title: IT Consultation. Had a very engaging and productive meeting session. Good advice. They listened to the problem, tried to see the problem from a broader perspective to give a proper solution / advice. Anyone can can talk to them for IT advice. Best of luck !",
      image: "/ceo/user-icon.png",
      name: "MUSA",
      designation: "FOUNDER, TRAVEL AGENCY, BANGLADESH",
    },
    {
      para: `It was great to work with HtSol. They very keen to do all the details and ask / noted unclear parts thoroughly. I would Love and already planning to do another Software for healthcare industry with them.
    Helped me a lot with great product!
    `,
      image: "/ceo/user-icon.png",
      name: "JAEYOON",
      designation: "SOUTH KOREA",
    },
    {
      para: "Good and fast never disappointed with HtSol. They work quickly and take time to understand your business and business logic.",
      image: "/ceo/user-icon.png",
      name: "YANIS",
      designation: "FOUNDER, YOGA STUDIO, FRANCE",
    },
  ],
};

export const CTO_CTA = {
  title: "IS YOUR DENTAL WEBSITE UNDERPERFORMING TECHNICALLY?",
  para: "If your website is slow, not ranking, difficult to update, or losing patients to competitors with better-performing sites — the problem is usually technical, not marketing. I offer a direct technical consultation where I review what you have, identify what is limiting performance, and tell you exactly what needs to be fixed and why. No pitch. No generic recommendation. Just a technical assessment from someone who builds this specifically for dental practices.",
  image: "/call-back-from-us.webp",
  buttons: [
    {
      text: "Book a Technical Consultation",
      link: "/contact-us",
    },
  ],
  className: "h-[300px] lg:h-[480px]! xl:h-[540px]!",
};
