import LegalPageTemplate, { type LegalSection } from "@/components/ui/legal-page-template";

export const metadata = {
  title: "Cookie Policy | HTSOL Inc.",
  description: "Cookie Policy for htsol.ca, operated by HTSOL Inc.",
  alternates: {
    canonical: "https://www.htsol.ca/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | HTSOL Inc.",
    description: "Cookie Policy for htsol.ca, operated by HTSOL Inc.",
    url: "https://www.htsol.ca/cookie-policy",
    images: ["/htsol-ball-favicon.svg"],
  },
};

const sections: LegalSection[] = [
  {
    number: "1.",
    heading: "Introduction",
    short: "We use cookies on htsol.ca to make the site work and to understand how people use it. You are in control of the optional ones.",
    body: [
      'HTSOL Inc. ("HTSOL", "we", "our", or "us") is a corporation incorporated under the Canada Business Corporations Act, Corporation No. 1749219-7. This Cookie Policy explains what cookies are, what types we use on our website (htsol.ca), what information we collect using them, how we use that information, and what your options are.',
      "This Cookie Policy forms part of our Privacy Policy (htsol.ca/privacy-policy) and Terms of Use (htsol.ca/terms-of-use), which you should also read.",
    ],
  },
  {
    number: "2.",
    heading: "What Are Cookies?",
    short: "Cookies are tiny text files stored on your device when you visit a website. They help sites remember things about you, from your consent choice to how you browse.",
    body: [
      "A cookie is a small text file that is placed on your device, including a computer, tablet, or mobile phone, when you visit a website. Cookies are widely used by websites to make them work, to work more efficiently, and to provide information to the site operator.",
      "Cookies can be used to:",
    ],
    bullets: [
      "Enable certain features and functions on the website",
      "Remember your preferences",
      "Provide analytics so we can understand how the site is being used",
      "Enable advertising and behavioural tracking, where you have given consent",
    ],
    subsections: [
      {
        heading: "Session Cookies",
        body: [
          "A session cookie is used to identify a particular visit to our website. These cookies expire when you close your web browser. We use session cookies to identify you during a single browsing session and to keep certain features working while you navigate the site.",
        ],
      },
      {
        heading: "Persistent Cookies",
        body: [
          "A persistent cookie remains on your device for a set period of time specified in the cookie itself. We use persistent cookies where we need to remember something about you across multiple visits, for example, to store your cookie consent preferences so we do not ask you again on your next visit.",
          "Cookies can also be categorised as:",
        ],
        bullets: [
          "First-party cookies - set directly by htsol.ca",
          "Third-party cookies - set by a domain other than htsol.ca, such as analytics providers like Google Analytics",
        ],
      },
      {
        body: [
          'In addition to cookies, we may use similar technologies such as web beacons (pixel tags) and browser local storage for related purposes. Where we refer to "cookies" in this policy, we mean all such technologies unless otherwise stated.',
        ],
      },
    ],
  },
  {
    number: "3.",
    heading: "Our Legal Basis for Using Cookies in Canada",
    short: "Under Canadian law (CASL + PIPEDA), we must get your permission before placing any non-essential cookies on your device. Analytics and marketing cookies only fire after you say yes.",
    body: [
      "Canada's Anti-Spam Legislation (CASL) applies to the installation of computer programs, including cookies, on users' devices in the course of commercial activity. Under CASL and PIPEDA:",
    ],
    bullets: [
      "Strictly necessary cookies may be installed without consent, as they are technically essential for the website to function",
      "All analytics, preference, and marketing cookies require your prior, active consent before we install them on your device",
    ],
    subsections: [
      {
        body: [
          "We operate a consent-first approach: non-essential cookies are blocked by default and are only activated after you have actively accepted them through our cookie consent banner. We do not rely on pre-ticked boxes or continued browsing as a proxy for consent.",
        ],
      },
    ],
  },
  {
    number: "4.",
    heading: "Types of Cookies We Use",
    subsections: [
      {
        heading: "4.1 Strictly Necessary Cookies",
        body: [
          "These cookies are essential for the website to work and cannot be switched off. They are usually set in response to actions you take, such as setting your cookie preferences. They do not store any personally identifiable information. You cannot opt out of these cookies.",
          "These cookies enable:",
        ],
        bullets: [
          "Basic navigation and page functionality",
          "Storage of your cookie consent choice",
          "Website security features",
        ],
      },
      {
        heading: "4.2 Analytics / Performance Cookies",
        body: [
          "These cookies allow us to count visits and understand how visitors navigate our website, so we can measure and improve performance. All information collected is aggregated and anonymous.",
          "Example: Google Analytics cookies help us understand which pages are most visited, where visitors come from, and how long they stay. These cookies are only placed after you have given consent.",
        ],
      },
      {
        heading: "4.3 Functional / Preference Cookies",
        body: [
          "These cookies allow the website to remember choices you make, such as previously filled form information, to provide a more personalised experience. These cookies are only placed after you have given consent.",
        ],
      },
      {
        heading: "4.4 Marketing / Targeting Cookies",
        body: [
          "These cookies track your visits across websites to deliver targeted advertising. They are typically set by third-party advertising partners.",
          "At the time this policy was written, HTSOL does not operate retargeting campaigns. If this changes in the future, this policy will be updated and this section will identify the relevant platforms.",
        ],
      },
    ],
  },
  {
    number: "5.",
    heading: "How Do Third Parties Use Cookies on Our Website?",
    short: "Third-party providers like Google may set their own cookies to understand how visitors use our site. They may use that information across other websites they work with.",
    body: [
      "Third-party companies, including analytics providers, may use cookies to collect user information on an anonymous or pseudonymous basis. They may use that information to build an aggregate profile of activity on our website and on other websites that those third parties work with.",
      "We only allow third-party cookies to be set where you have provided consent, and we list all active third-party cookie providers in the cookie table in Section 6.",
      "HTSOL does not sell, rent, or share cookie data with third parties for their independent marketing purposes.",
    ],
  },
  {
    number: "6.",
    heading: "Cookies We Use",
    short: "Here is the full list of every cookie currently running on htsol.ca, what it does, who set it, and how long it stays.",
    body: [
      "The table below lists the specific cookies in use on htsol.ca. This table is updated whenever cookies are added, removed, or changed. If you notice a discrepancy, please contact us at hello@htsol.ca.",
    ],
    tables: [
      {
        title: "Strictly Necessary Cookies",
        headers: ["Cookie Name", "Provider", "Category", "Purpose", "Expiry"],
        rows: [
          [
            "_htsol_consent",
            "HTSOL Inc.",
            "Strictly Necessary",
            "Stores the user's cookie consent preferences so we do not ask on every visit",
            "1 year",
          ],
          [
            "PHPSESSID / session",
            "HTSOL Inc.",
            "Strictly Necessary",
            "Maintains session state during a single browsing session",
            "Session",
          ],
        ],
      },
      {
        title: "Analytics Cookies - Only Active After Consent",
        headers: ["Cookie Name", "Provider", "Category", "Purpose", "Expiry"],
        rows: [
          ["_ga", "Google Analytics (Google LLC)", "Analytics", "Assigns a unique identifier to distinguish individual users; throttles request rate", "2 years"],
          ["_ga_XXXXXXXX", "Google Analytics (Google LLC)", "Analytics", "Stores and counts pageviews for the specific GA4 property", "2 years"],
          ["_gid", "Google Analytics (Google LLC)", "Analytics", "Distinguishes individual users; expires more quickly than _ga", "24 hours"],
          ["_gat", "Google Analytics (Google LLC)", "Analytics", "Throttles the rate of requests sent to Google Analytics", "1 minute"],
        ],
      },
      {
        title: "Marketing Cookies - Not Currently in Use",
        headers: ["Cookie Name", "Provider", "Category", "Purpose", "Expiry"],
        rows: [
          [
            "None at this time",
            "-",
            "Marketing",
            "HTSOL does not currently use marketing or retargeting cookies. If this changes, this table will be updated before implementation.",
            "-",
          ],
        ],
      },
    ],
  },
  {
    number: "7.",
    heading: "What Are Your Cookie Options?",
    short: "You have three ways to control cookies: our consent banner, your browser settings, and the Google Analytics opt-out tool.",
    subsections: [
      {
        heading: "7.1 Cookie Consent Banner",
        body: [
          "When you first visit htsol.ca, you will be presented with a cookie consent banner that gives you the following choices:",
        ],
        bullets: [
          "Accept All - enables all cookie categories",
          "Reject All - disables all optional cookies (analytics, marketing); only strictly necessary cookies are placed",
          "Manage Preferences - allows you to choose which categories to enable",
        ],
      },
      {
        body: [
          'You can change your preferences at any time by clicking the "Cookie Preferences" link in the footer of our website.',
        ],
      },
      {
        heading: "7.2 Browser Settings",
        body: [
          "Most web browsers allow you to manage cookies through your browser settings. You can typically view, delete, or block cookies from specific sites. Please note that blocking all cookies may affect how our website and other websites function. Instructions for common browsers:",
        ],
        bullets: [
          "Google Chrome: Settings > Privacy and Security > Cookies and other site data",
          "Mozilla Firefox: Settings > Privacy & Security > Cookies and Site Data",
          "Apple Safari: Preferences > Privacy > Cookies and website data",
          "Microsoft Edge: Settings > Cookies and site permissions > Cookies and site data",
        ],
      },
      {
        body: [
          "For more information, visit the help section of your browser. You can also find general information about cookies at www.allaboutcookies.org.",
        ],
      },
      {
        heading: "7.3 Opt Out of Google Analytics",
        body: [
          "To prevent Google Analytics from using your browsing data across all websites, install the Google Analytics Opt-out Browser Add-on, free from Google, at: https://tools.google.com/dlpage/gaoptout",
          "Please note: if you delete cookies or do not accept them, you might not be able to use all of the features we offer, some of our pages might not display properly, and we will have to ask for your consent preference again on your next visit.",
        ],
      },
    ],
  },
  {
    number: "8.",
    heading: "Do Not Track",
    body: [
      'Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. There is currently no industry standard for responding to DNT signals, and we do not respond to them at this time. We provide the cookie consent mechanism described in Section 7 as a more transparent and reliable method of controlling tracking on our website.',
    ],
  },
  {
    number: "9.",
    heading: "Cookies and Personal Information",
    short: "Cookie data that can identify you is personal information under Canadian law and is protected by our Privacy Policy.",
    body: [
      "Some cookies we use, particularly analytics cookies, may be considered personal information when combined with other data we hold. Where cookies constitute or contribute to personal information, they are subject to our Privacy Policy (htsol.ca/privacy-policy) and the protections provided by PIPEDA.",
    ],
  },
  {
    number: "10.",
    heading: "Data Retention",
    body: [
      "Cookies are retained for the periods specified in the cookie table in Section 6. Persistent cookies are automatically removed from your device when they expire. You can also delete cookies at any time through your browser settings or by changing your preferences through the cookie consent banner.",
      "Aggregated analytics data is retained in our analytics platform for 26 months before being automatically deleted or anonymised.",
    ],
  },
  {
    number: "11.",
    heading: "International Data Transfers",
    body: [
      "Some third-party cookie providers, including Google Analytics, are headquartered in the United States and process data there. By accepting analytics cookies, your data may be transferred to and processed in the United States under US law.",
      "We take steps to ensure such transfers are subject to appropriate safeguards, including standard contractual clauses with our service providers. For questions about international transfers, see our Privacy Policy at htsol.ca/privacy-policy.",
    ],
  },
  {
    number: "12.",
    heading: "Updates to This Cookie Policy",
    body: [
      'This Cookie Policy was last updated on April 10, 2026. We will update this Policy whenever we change the cookies we use or our cookie practices. The "Last Updated" date at the top of this page reflects the most recent revision.',
    ],
  },
  {
    number: "13.",
    heading: "Contact Us",
    body: [
      "Questions about cookies or this policy? Get in touch:",
      "HTSOL Inc.\nCorporation No. 1749219-7 | Canada Business Corporations Act\nRiverspray Crescent, Mississauga, Ontario, L4Y 3M5, Canada\nEmail: hello@htsol.ca\nPhone: (+1) 437-937-1235\nWebsite: htsol.ca",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPageTemplate
      title="Cookie Policy"
      meta={[
        "Effective Date: April 10, 2026 | Last Updated: April 10, 2026",
        "URL: htsol.ca/cookie-policy",
        "Governing Law: Province of Ontario, Canada | Compliant with: PIPEDA, CASL",
        "Corporate Registration: Canada Business Corporations Act, Corporation No. 1749219-7",
      ]}
      sections={sections}
    />
  );
}
