"use client";

import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import { useState } from "react";

const pricingData = [
    {
        feature: "Branding",
        economical: "5 - 30",
        organic: "5 - 30",
        boost: "5 - 60",
    },
    {
        feature: "Website",
        economical: "✓",
        organic: "✓",
        boost: "✓",
    },
    {
        feature: "SEO",
        economical: "✓",
        organic: "✓",
        boost: "✓",
    },
    {
        feature: "Blog (copywriting)",
        economical: "✓",
        organic: "✗",
        boost: "✗",
    },
    {
        feature: "Social Media Management",
        economical: "Basic",
        organic: "Basic",
        boost: "Basic",
    },
    {
        feature: "Content Day (every 6 months)",
        economical: "✗",
        organic: "✓",
        boost: "✓",
    },
    {
        feature: "Open Day Support",
        economical: "✓",
        organic: "✓",
        boost: "✓",
    },
    {
        feature: "Ads",
        economical: "✓",
        organic: "✗",
        boost: "✓",
    },
    {
        feature: "Monthly Service Cost",
        economical: "✓",
        organic: "✓",
        boost: "✓",
    },
];

export default function PricingPlan() {
    const [activeTab, setActiveTab] = useState("bundle");

    return (
        <section className="bg-black py-20">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="text-center mb-8">
                    <HeadingTwo className="capitalize">
                        Our Pricing Plan
                    </HeadingTwo>

                    <div className="mt-5 inline-flex items-center rounded-full border border-white/80 p-[5px] bg-[#111111]">
                        <button
                            onClick={() => setActiveTab("bundle")}
                            className={`px-5 py-2 rounded-full hover:cursor-pointer transition ${activeTab === "bundle"
                                ? "text-white bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"
                                : "text-white/80"
                                }`}
                        >
                            Bundles We Offer
                        </button>

                        <button
                            onClick={() => setActiveTab("custom")}
                            className={`px-5 py-2 rounded-full hover:cursor-pointer transition ${activeTab === "custom"
                                ? "text-white bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"
                                : "text-white/80"
                                }`}
                        >
                            Make Your Own Bundle
                        </button>
                    </div>
                </div>

                <div className="max-w-[820px] mx-auto">
                    <div className="relative overflow-hidden rounded-[18px] border border-[#0DAFC0]/40 bg-[#111111]">
                        <div className="absolute inset-0">
                            <Image
                                src="/dental/pricing-plan-bg.png"
                                alt="pricing bg"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.7)_55%,rgba(0,0,0,0.92)_100%)]" />

                        <div className="relative z-10 px-4 md:px-8 py-8 md:py-10">
                            <div className="flex flex-col items-center text-center mb-6">
                                <div className="w-[48px] h-[48px] rounded-full overflow-hidden mb-3 border border-white/20">
                                    <Image
                                        src="/dental/pricing-circle.png"
                                        alt="icon"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <h3 className="text-white text-[30px] md:text-2xl font-bold font-sans">
                                    Our Economical Bundles
                                </h3>

                                <button className="mt-4 bg-white text-black font-bold font-sans rounded-md px-6 py-2.5 hover:bg-white/90 transition">
                                    Choose this plan
                                </button>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-white">
                                    <thead>
                                        <tr className="border-t border-[#1AC6D9]/40 border-b border-[#1AC6D9]/40">
                                            <th className="text-left py-3 px-3 text-sm md:text-base font-medium text-white/90"></th>
                                            <th className="py-3 px-3 text-sm md:text-base font-semibold text-black bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] rounded-tl-md rounded-tr-md">
                                                60% online
                                            </th>
                                            <th className="py-3 px-3 text-sm md:text-base font-medium text-white/90">
                                                Organic
                                            </th>
                                            <th className="py-3 px-3 text-sm md:text-base font-medium text-white/90">
                                                Boost
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {pricingData.map((item, index) => (
                                            <tr key={index} className="">
                                                <td className="py-3 px-3 text-left text-white">
                                                    <div className="flex items-center gap-2">
                                                        <Image
                                                            src="/dental/tick-icon.svg"
                                                            alt="icon"
                                                            width={14}
                                                            height={14}
                                                            className="w-4 h-4 object-contain"
                                                        />
                                                        <span>{item.feature}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-3 text-center text-white">
                                                    {item.economical}
                                                </td>
                                                <td className="py-3 px-3 text-center text-white">
                                                    {item.organic}
                                                </td>
                                                <td className="py-3 px-3 text-center text-white">
                                                    {item.boost}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}