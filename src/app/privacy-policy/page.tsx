import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/container";

export const metadata = {
    title: "Privacy Policy | HTSOL Inc.",
    description:
        "",
    alternates: {
        canonical: "https://www.htsol.ca/privacy-policy",
    },
    openGraph: {
        title: "Privacy Policy | HTSOL Inc.",
        description: "",
        url: "https://www.htsol.ca/privacy-policy",
        images: ["/htsol-ball-favicon.svg"],
    },
};

const sections = [
    {
        number: "1.",
        heading: "Introduction",
        body: `HTSOL Inc. ("HTSOL", "we", "our", or "us") is a corporation incorporated under the Canada Business Corporations Act (CBCA), Corporation No. 1749219-7, with its principal place of business at 3400 Riverspray Crescent, Mississauga, Ontario, L4Y 3M5, Canada.
        <br/><br/>
        We are committed to protecting the privacy and security of the personal information of our clients, prospective clients, website visitors, and all others who interact with our business. This Privacy Policy explains how we collect, use, store, disclose, and protect personal information in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy laws.
        <br/><br/>
        As a federally incorporated corporation, HTSOL is directly subject to PIPEDA for all commercial activities, regardless of the province in which those activities occur.
        <br/><br/>
        By using our website at htsol.ca or engaging our services, you acknowledge that you have read and understood this Privacy Policy.
`,
    },
    {
        number: "2.",
        heading: "Scope of This Policy",
        body: "This Privacy Policy applies to:",
        bullets: [
            "Personal information collected through our website, htsol.ca",
            "Personal information collected through contact forms, email, telephone, or in-person interactions",
            "Personal information collected in the course of providing our services to clients",
            "Personal information collected from prospective clients or business partners",
        ],
        botPara: "This Policy does not apply to the practices of third-party companies or individuals that HTSOL does not own or control, including third-party service providers who operate under their own privacy policies.",
    },
    {
        number: "3.",
        heading: "What Is Personal Information",
        body: `Under PIPEDA, "personal information" means any information about an identifiable individual. This includes, but is not limited to:`,
        bullets: [
            "Name, mailing address, telephone number, and email address",
            "Job title, company name, and professional contact details",
            "Job title, company name, and professional contact details",
            "Website usage data collected via cookies and analytics tools (see Section 9)",
            "Communications you send to us — enquiry messages, support requests, project feedback",
            "Any other information you voluntarily provide to us",
        ],
        botPara: "Business contact information used solely for the purpose of communicating with individuals in their professional capacity is generally exempt from PIPEDA, but we treat all information we hold with care regardless.",
    },
    {
        number: "4.",
        heading: "How We Collect Personal Information",
        bulletHeading: "4.1 Information You Provide Directly",
        bullets: [
            "Contact forms on our website (name, email, phone, company, message)",
            "Email and telephone communications",
            "Project onboarding and client intake",
            "Meetings, calls, or strategy consultations",
            "Signing service agreements or proposals",
        ],
        bulletHeading2: "4.2 Information Collected Automatically",
        bullets2: [
            "Website analytics — pages visited, time on site, browser type, device, approximate location based on IP address — collected via Google Analytics and similar tools",
            "Cookies and similar tracking technologies — see Section 9 and our Cookie Policy for full details",
            "Server logs that record IP addresses and access times",
        ],
        bulletHeading3: "4.3 Information From Third Parties",
        bullets3: [
            "Referrals from existing clients or business partners",
            "Publicly available professional information (such as LinkedIn profiles) where relevant to a business engagement",
        ],
    },
    {
        number: "5.",
        heading: "Why We Collect Your Information",
        body: "We collect and use personal information only for the specific purposes identified at or before the time of collection. These purposes include:",
        bullets: [
            "Responding to enquiries and consultation requests",
            "Providing digital agency services — web design, development, SEO, digital marketing, branding, CGI, and related services",
            "Communicating with clients about project progress, deliverables, and invoicing",
            "Sending service-related updates and notifications",
            "Sending marketing communications — only where you have provided express consent under CASL, or where implied consent lawfully applies",
            "Improving our website and services through analytics and user behaviour data",
            "Fulfilling legal and regulatory obligations under Canadian law",
            "Protecting the rights, property, and safety of HTSOL, our clients, and others",
        ],
        botPara: "We will not use your personal information for any purpose other than those identified above without first obtaining your consent, unless permitted or required by law.",
    },
    {
        number: "6.",
        heading: "Consent",
        bulletHeading: "6.1 Express Consent",
        bulletPara: "Express consent is required for:",
        bullets: [
            "Sending commercial electronic messages (marketing emails, newsletters, promotional content) under CASL",
            "Sharing your information with third parties for purposes beyond supporting our service delivery",
            "Processing sensitive personal information",
        ],
        bulletBotPara: "Express consent must be given proactively by you — we will never pre-tick a box on your behalf.",
        bulletHeading2: "6.2 Implied Consent",
        bulletPara2: "Implied consent may apply when the purpose for which information is collected is obvious in context — for example, when you submit our contact form to request a consultation, we may use your contact details to respond to your enquiry.",
        bulletHeading3: "6.3 Withdrawing Consent",
        bulletPara3: "You may withdraw consent at any time, subject to legal or contractual restrictions and reasonable notice. To withdraw, contact us at hello@htsol.ca or use the unsubscribe link in any marketing email we send. We process unsubscribe requests within 10 business days, as required by CASL.",
    },
    {
        number: "7.",
        heading: "When We Share Your Information",
        bulletHeading: "7.1 Service Providers",
        bulletPara: "We may share information with third-party service providers who support our operations. These providers are contractually required to handle your information confidentially and only for the specific purposes we specify. Examples include:",
        bullets: [
            "Website hosting and cloud storage providers",
            "Project management and communication tools",
            "Accounting and invoicing software",
            "Email marketing platforms (where you have consented to receive marketing)",
            "Analytics platforms, such as Google Analytics",
        ],
        bulletHeading2: "7.2 Legal Requirements",
        bulletPara2: "We may disclose personal information if required to do so by law, or in response to valid legal process including court orders, subpoenas, or requests from government authorities with lawful jurisdiction under federal or provincial Canadian law.",
        bulletHeading3: "7.3 Business Transfers",
        bulletPara3: "In the event of a merger, acquisition, or sale of all or a portion of our assets, personal information may be transferred to the acquiring party, subject to equivalent privacy protections.",
        bulletHeading4: "7.4 With Your Consent",
        bulletPara4: "We may share your information with any other party only with your explicit prior consent.",
    },
    {
        number: "8.",
        heading: "How Long We Keep Your Information",
        body: "We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law:",
        bullets: [
            "Client project files and communications: 7 years from project completion or end of client relationship — to comply with Canada Revenue Agency (CRA) record-keeping requirements",
            "Website analytics data: 26 months, as configured in Google Analytics",
            "CASL consent records: Duration of the consent plus 3 years after the business relationship ends, as required by CASL",
            "Contact form submissions where no engagement follows: 12 months",
        ],
        botPara: "When personal information is no longer required, we dispose of it securely by deletion, anonymisation, or physical destruction where applicable.",
    },
    {
        number: "9.",
        heading: "Cookies and Tracking Technologies",
        body: `Our website uses cookies and similar technologies. A cookie is a small text file stored on your device when you visit a website. We use cookies to improve your browsing experience and to understand how our site is being used.
        <br/><br/>
        We use the following categories of cookies:
        `,
        bullets: [
            `Strictly Necessary Cookies — required for the website to function; cannot be disabled`,
            `Analytics Cookies — help us understand visitor behaviour; only placed with your consent`,
            `Marketing Cookies — used for advertising tracking; only placed with your consent`,
        ],
        botPara: "For full details, see our Cookie Policy at htsol.ca/cookie-policy.",
    },
    {
        number: "10.",
        heading: "How We Protect Your Information",
        body: "HTSOL implements appropriate technical and organisational safeguards including:",
        bullets: [
            "SSL/TLS encryption (HTTPS) for all data transmitted through our website",
            "Access controls limiting personal information access to authorised staff on a need-to-know basis",
            "Secure credential management and password policies",
            "Regular software updates and security patches",
            "Contractual confidentiality obligations with service providers who handle personal information on our behalf",
        ],
        botPara: "No method of electronic transmission or storage is 100% secure. In the event of a breach that poses a real risk of significant harm to individuals, we will notify the Office of the Privacy Commissioner of Canada and affected individuals as required under PIPEDA's mandatory breach reporting provisions.",
    },
    {
        number: "11.",
        heading: "Your Rights Under PIPEDA",
        bulletHeading: "11.1 Right of Access",
        bulletPara: "You may request access to the personal information we hold about you. We will respond within 30 days. An extension may apply in limited circumstances, in which case we will notify you.",
        bulletHeading2: "11.2 Right to Correction",
        bulletPara2: "If you believe information we hold about you is inaccurate or incomplete, you may request a correction.",
        bulletHeading3: "11.3 Right to Challenge Compliance",
        bulletPara3: "You may challenge our compliance with PIPEDA. We will investigate all complaints and take appropriate action.",
        bulletHeading4: "11.4 Right to Withdraw Consent",
        bulletPara4: `You may withdraw consent for certain uses of your personal information at any time, as described in Section 6.3.
        <br/><br/>
        To exercise any right, contact our Privacy Officer using the details in Section 14. We may verify your identity before processing your request. We will not charge a fee unless a request is excessive or manifestly unfounded.
        <br/><br/>
        If you are not satisfied with our response, you may file a complaint with the Office of the Privacy Commissioner of Canada at www.priv.gc.ca or by telephone at 1-800-282-1376.
`,
    },
    {
        number: "12.",
        heading: "International Data Transfers",
        body: `Some third-party service providers we use are located outside Canada. When personal information is transferred outside Canada — for example, to service providers in the United States — it may be subject to the laws of that jurisdiction.
        <br/><br/>
        We take steps to ensure international transfers are conducted with appropriate safeguards, including contractual obligations with our service providers. For questions about international transfers, contact our Privacy Officer.`,
    },
    {
        number: "13.",
        heading: "Children's Privacy",
        body: "Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us at hello@htsol.ca and we will delete it promptly.",
    },
    {
        number: "14.",
        heading: "Contact Our Privacy Officer",
        body: `For all privacy questions, concerns, or access requests, please contact:
        <br/><br/>
        <b>HTSOL Inc. — Privacy Officer</b><br/>
        Corporation No. 1749219-7  |  Canada Business Corporations Act<br/>
        Riverspray Crescent, Mississauga, Ontario, L4Y 3M5, Canada<br/>
        Email: <a href="mailto:hello@htsol.ca">hello@htsol.ca</a><br/>
        Phone: <a  href="tel:+14379371235" >(+1) 437-937-1235</a><br/>
        Website: <a href='/' style={{color: '#075B65'}}>htsol.ca</a><br/>
        Office of the Privacy Commissioner of Canada: <a href='https://www.priv.gc.ca/' target='_blank'>www.priv.gc.ca</a>  |  <a  href="tel:+18002821376" >1-800-282-1376</a>
        `,
    },
    {
        number: "15.",
        heading: "Changes to This Policy",
        body: `This Privacy Policy was last updated on April 10, 2026. We may update this Policy from time to time. When we make material changes, we will update the "Last Updated" date at the top of this page. Your continued use of our website or services following any changes constitutes your acceptance of the updated Policy.`,
    },
];

export default function TermsOfUsePage() {
    return (
        <>
            <div className="h-[400px] relative">
                <h1 className="text-4xl md:text-6xl font-bold text-white font-primary absolute inset-0 flex items-center justify-center">
                    Privacy Policy
                </h1>
            </div>
            <main className=" min-h-screen py-20">
                <Container>
                    <div className="flex flex-col gap-8">
                        {sections.map((section) => (
                            <div key={section.number} className="flex gap-4">
                                {/* Number badge */}
                                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-tertiary flex items-center justify-center mt-0.5">
                                    <span className=" text-white">
                                        {section.number}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-2 flex-1">
                                    <h2 className="font-semibold text-white text-[18px]">
                                        {section.heading}
                                    </h2>

                                    {section.body && (
                                        <p className="text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: section.body }} />
                                    )}


                                    {section.bulletHeading && (
                                        <p className="text-white leading-relaxed font-semibold" dangerouslySetInnerHTML={{ __html: section.bulletHeading }} />
                                    )}

                                    {section.bulletPara && (
                                        <p className="text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: section.bulletPara }} />
                                    )}

                                    {section.bullets && (
                                        <ul className="flex flex-col gap-1.5 mt-1">
                                            {section.bullets.map((bullet, i) => (
                                                <li
                                                    key={i}
                                                    className="flex gap-2 text-sm text-white leading-relaxed">
                                                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#075B65]" />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.bulletBotPara && (
                                        <p className="text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: section.bulletBotPara }} />
                                    )}

                                    {section.bulletHeading2 && (
                                        <p className="text-white leading-relaxed font-semibold" dangerouslySetInnerHTML={{ __html: section.bulletHeading2 }} />
                                    )}

                                    {section.bulletPara2 && (
                                        <p className="text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: section.bulletPara2 }} />
                                    )}

                                    {section.bullets2 && (
                                        <ul className="flex flex-col gap-1.5 mt-1">
                                            {section.bullets2.map((bullet, i) => (
                                                <li
                                                    key={i}
                                                    className="flex gap-2 text-sm text-white leading-relaxed">
                                                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#075B65]" />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {section.bulletHeading3 && (
                                        <p className="text-white leading-relaxed font-semibold" dangerouslySetInnerHTML={{ __html: section.bulletHeading3 }} />
                                    )}

                                    {section.bulletPara3 && (
                                        <p className="text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: section.bulletPara3 }} />
                                    )}

                                    {section.bullets3 && (
                                        <ul className="flex flex-col gap-1.5 mt-1">
                                            {section.bullets3.map((bullet, i) => (
                                                <li
                                                    key={i}
                                                    className="flex gap-2 text-sm text-white leading-relaxed">
                                                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#075B65]" />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.bulletHeading4 && (
                                        <p className="text-white leading-relaxed font-semibold" dangerouslySetInnerHTML={{ __html: section.bulletHeading4 }} />
                                    )}

                                    {section.bulletPara4 && (
                                        <p className="text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: section.bulletPara4 }} />
                                    )}

                                    {section.botPara && (
                                        <p className="text-white leading-relaxed mt-1" dangerouslySetInnerHTML={{ __html: section.botPara }} />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </main>
        </>
    );
}
