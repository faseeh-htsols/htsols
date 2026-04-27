import LegalPageTemplate, { type LegalSection } from "@/components/ui/legal-page-template";

export const metadata = {
  title: "Terms of Use | HTSOL Inc.",
  description: "Terms of Use for htsol.ca, operated by HTSOL Inc.",
  alternates: {
    canonical: "https://www.htsol.ca/terms-of-use",
  },
  openGraph: {
    title: "Terms of Use | HTSOL Inc.",
    description: "Terms of Use for htsol.ca, operated by HTSOL Inc.",
    url: "https://www.htsol.ca/terms-of-use",
    images: ["/htsol-ball-favicon.svg"],
  },
};

const sections: LegalSection[] = [
  {
    number: "1.",
    heading: "Acceptance of Terms",
    short: "By using this website, you agree to these Terms. If you do not agree, please leave the site. It is that simple.",
    body: [
      'Welcome to htsol.ca (the "Website"), operated by HTSOL Inc. ("HTSOL", "we", "our", or "us"), a corporation incorporated under the Canada Business Corporations Act, Corporation No. 1749219-7, with its registered office and principal place of business at 3400 Riverspray Crescent, Mississauga, Ontario, L4Y 3M5, Canada.',
      'By accessing or using this Website, you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use this Website. These Terms apply to all visitors, users, and others who access or use the Website.',
      "These Terms should be read alongside our Privacy Policy (htsol.ca/privacy-policy) and Cookie Policy (htsol.ca/cookie-policy), which are incorporated herein by reference.",
    ],
  },
  {
    number: "2.",
    heading: "Changes to These Terms",
    short: "We can update these Terms at any time. We will change the date at the top when we do. Keep checking back.",
    body: [
      "We reserve the right to modify these Terms at any time. We will indicate the date of the most recent update at the top of this page. Your continued use of the Website following the posting of revised Terms constitutes your acceptance of those changes.",
    ],
  },
  {
    number: "3.",
    heading: "Use of the Website",
    short: "Use this site for legitimate purposes only. Do not scrape it, hack it, spam from it, or copy our content for commercial use.",
    subsections: [
      {
        heading: "3.1 Permitted Use",
        body: ["You may use this Website for lawful purposes only. You are permitted to:"],
        bullets: [
          "Browse and read our content for informational purposes",
          "Submit enquiries through contact forms to learn about our services",
          "Share links to our Website via social media or electronic communications",
        ],
      },
      {
        heading: "3.2 Prohibited Use",
        body: ["You agree not to:"],
        bullets: [
          "Violate any applicable Canadian federal, provincial, or local law, including PIPEDA and CASL",
          "Send unsolicited commercial electronic messages (spam) through or using our Website",
          "Introduce viruses, malware, ransomware, or other harmful code",
          "Attempt to gain unauthorised access to this Website, its servers, or connected systems",
          "Scrape, crawl, or harvest data from this Website without our express written permission",
          "Impersonate HTSOL, our staff, or any other person or entity",
          "Reproduce, distribute, or modify our content without prior written authorisation",
          "Interfere with or disrupt the operation of this Website",
        ],
      },
    ],
  },
  {
    number: "4.",
    heading: "Intellectual Property",
    short: "Everything on this site belongs to us or our licensors. You may view it, but you may not copy, resell, or adapt it without permission.",
    subsections: [
      {
        heading: "4.1 Our Content",
        body: [
          "All content on this Website, including text, graphics, logos, images, icons, video, audio, and software, is the property of HTSOL Inc. or its licensors and is protected by Canadian and international copyright, trademark, and other intellectual property laws. HTSOL and the HTSOL logo are trademarks of HTSOL Inc.",
        ],
      },
      {
        heading: "4.2 Limited Licence",
        body: [
          "We grant you a limited, non-exclusive, non-transferable, revocable licence to access and use this Website for personal, non-commercial informational purposes. This licence does not permit you to:",
        ],
        bullets: [
          "Download or copy content for commercial use",
          "Reproduce, republish, upload, post, transmit, or distribute any Website content without express written permission",
          "Create derivative works based on Website content",
        ],
      },
      {
        heading: "4.3 Client Work Product",
        body: [
          "Intellectual property in deliverables produced by HTSOL for clients, including website designs, code, content, and brand assets, is governed by the written service agreement between HTSOL and that client, not by these Terms of Use.",
        ],
      },
    ],
  },
  {
    number: "5.",
    heading: "User-Submitted Content",
    short: "When you contact us or submit a form, you are letting us use that information to help you, nothing more.",
    body: [
      "When you submit information through contact forms, email, or other communications, you grant HTSOL a non-exclusive licence to use that information to respond to your enquiry and for the purposes described in our Privacy Policy.",
      "You are responsible for ensuring that any content you submit does not infringe any third-party rights and does not contain unlawful, defamatory, or harmful content.",
    ],
  },
  {
    number: "6.",
    heading: "Third-Party Links",
    short: "We sometimes link to other websites. Once you leave ours, those sites have their own rules, and we cannot control them.",
    body: [
      "This Website may contain links to third-party websites or content not owned or controlled by HTSOL. These links are provided for convenience only. HTSOL has no control over, and assumes no responsibility for, the content or privacy practices of any third-party websites.",
    ],
  },
  {
    number: "7.",
    heading: "Disclaimers",
    short: "This website is provided as-is. We cannot guarantee it is always perfect, and the content on it is not professional advice.",
    subsections: [
      {
        heading: "7.1 No Warranties",
        body: [
          'This Website and its content are provided on an "as is" and "as available" basis. To the fullest extent permitted by applicable Canadian law, HTSOL disclaims all warranties, express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
        ],
      },
      {
        heading: "7.2 Not Professional Advice",
        body: [
          "Content on this Website is provided for general informational purposes and does not constitute professional, legal, financial, medical, or other specialist advice. You should not act or refrain from acting based solely on information on this Website without first obtaining appropriate professional advice.",
        ],
      },
    ],
  },
  {
    number: "8.",
    heading: "Limitation of Liability",
    short: "To the extent the law allows, we are not responsible for losses arising from your use of this website.",
    body: [
      "To the fullest extent permitted by applicable Canadian law, HTSOL Inc. and its directors, officers, employees, agents, and service providers shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:",
    ],
    bullets: [
      "Your use of, or inability to use, this Website",
      "Any content on this Website or any linked third-party website",
      "Unauthorised access to or alteration of your data or transmissions",
      "Any other matter relating to this Website",
    ],
    subsections: [
      {
        body: [
          "Some jurisdictions do not allow the exclusion of certain types of liability. In such cases, our liability is limited to the greatest extent permitted by law.",
        ],
      },
    ],
  },
  {
    number: "9.",
    heading: "Indemnification",
    body: [
      "You agree to indemnify and hold harmless HTSOL Inc., its directors, officers, employees, and service providers from and against any claims, liabilities, damages, and expenses, including reasonable legal fees, arising from your use of this Website, violation of these Terms, or infringement of any third-party rights.",
    ],
  },
  {
    number: "10.",
    heading: "Privacy",
    short: "We take privacy seriously. Read our Privacy Policy to understand how we handle your information.",
    body: [
      "Your use of this Website is governed by our Privacy Policy, incorporated into these Terms by reference: htsol.ca/privacy-policy.",
    ],
  },
  {
    number: "11.",
    heading: "Governing Law and Jurisdiction",
    short: "Any disputes about this website will be resolved in Ontario courts, under Ontario and federal Canadian law.",
    body: [
      "These Terms and any dispute arising from or related to your use of this Website shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles.",
      "You agree that any legal action arising out of or relating to these Terms shall be brought exclusively before the courts of competent jurisdiction in the Province of Ontario, and you irrevocably consent to the personal jurisdiction and venue of such courts.",
    ],
  },
  {
    number: "12.",
    heading: "Entire Agreement",
    body: [
      "These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and HTSOL with respect to your use of this Website. They supersede all prior agreements, representations, and understandings, whether oral or written. These Terms do not create any partnership, joint venture, employment, or agency relationship.",
    ],
  },
  {
    number: "13.",
    heading: "Severability",
    body: [
      "If any provision of these Terms is found unenforceable or invalid under applicable law, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions remain in full force and effect.",
    ],
  },
  {
    number: "14.",
    heading: "Waiver",
    body: [
      "Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision. Any waiver of any provision will only be effective if made in writing and signed by HTSOL.",
    ],
  },
  {
    number: "15.",
    heading: "Contact Us",
    body: [
      "Questions about these Terms? Contact us:",
      "HTSOL Inc.\nCorporation No. 1749219-7 | Canada Business Corporations Act\nRiverspray Crescent, Mississauga, Ontario, L4Y 3M5, Canada\nEmail: hello@htsol.ca\nPhone: (+1) 437-937-1235\nWebsite: htsol.ca",
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPageTemplate
      title="Terms of Use"
      meta={[
        "Effective Date: April 10, 2026 | Last Updated: April 10, 2026",
        "URL: htsol.ca/terms-of-use",
        "Governing Law: Province of Ontario, Canada",
        "Corporate Registration: Canada Business Corporations Act, Corporation No. 1749219-7",
      ]}
      sections={sections}
    />
  );
}
