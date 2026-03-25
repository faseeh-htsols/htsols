"use client";

import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import { useState } from "react";

const pricingData = [
    {
        feature: "Branding",
        economical: "-",
        organic: "-",
        boost: "-",
    },
    {
        feature: "Website",
        economical: "$-.00",
        organic: "$-.00",
        boost: "$-.00",
    },
    {
        feature: "SEO",
        economical: "Y",
        organic: "Y",
        boost: "Y",
    },
    {
        feature: "Blog (inc copywriting)",
        economical: "Y",
        organic: "Y",
        boost: "Y",
    },
    {
        feature: "Social Media Management",
        economical: "Basic",
        organic: "Basic",
        boost: "Basic",
    },
    {
        feature: "Content Day (every 6 months)",
        economical: "-",
        organic: "-",
        boost: "-",
    },
    {
        feature: "Open Day Support",
        economical: "Y",
        organic: "Y",
        boost: "Y",
    },
    {
        feature: "Setup Cost",
        economical: "-",
        organic: "-",
        boost: "-",
    },
    {
        feature: "Monthly Service Cost",
        economical: "Y",
        organic: "Y",
        boost: "Y",
    },
];

const customPricingData = [
    {
        feature: "Branding",
        economical: "$00.00",
        organic: "$00.00",
        boost: "$00.00",
    },
    {
        feature: "Website",
        economical: "$00.00",
        organic: "$00.00",
        boost: "$00.00",
    },
    {
        feature: "SEO",
        economical: "$00.00",
        organic: "$00.00",
        boost: "$00.00",
    },
    {
        feature: "Blog (inc copywriting)",
        economical: "$00.00",
        organic: "$00.00",
        boost: "$00.00",
    },
    {
        feature: "Social Media Management",
        economical: "$00.00",
        organic: "$00.00",
        boost: "$00.00",
    },
    {
        feature: "Content Day (every 6 months)",
        economical: "$00.00",
        organic: "$00.00",
        boost: "$00.00",
    },
    {
        feature: "Open Day Support",
        economical: "$00.00",
        organic: "$00.00",
        boost: "$00.00",
    },
    {
        feature: "Setup Cost",
        economical: "$00.00",
        organic: "$00.00",
        boost: "$00.00",
    },
    {
        feature: "Monthly Service Cost",
        economical: "$00.00",
        organic: "$00.00",
        boost: "$00.00",
    },
];

export default function PricingPlan() {
    const [activeTab, setActiveTab] = useState("bundle");
    const currentPricingData =
        activeTab === "bundle" ? pricingData : customPricingData;

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
                            <div className="flex flex-col items-center text-center mb-6 border-b pb-6 border-[#00A1A5]">
                                <div className="flex justify-between items-center md:justify-center w-full">
                                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden mb-3 border border-white/20">
                                        <Image
                                            src="/dental/pricing-circle.png"
                                            alt="icon"
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <button className="block md:hidden bg-white text-black font-semibold font-sans rounded-full px-6 py-2.5 hover:bg-white/90 transition capitalize">
                                        Most popular
                                    </button>
                                </div>

                                <h3 className="text-white text-[30px] md:text-2xl font-bold font-sans">
                                    {activeTab === "bundle" ? "Our Economical Bundles" : "Build Your Own Package"}
                                </h3>

                                <button className="mt-4 bg-white text-black font-bold font-sans rounded-md px-6 py-2.5 hover:bg-white/90 transition uppercase w-full max-w-[300px]">
                                    Choose this plan
                                </button>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-white">
                                    <thead>
                                        <tr className="">
                                            <th className="text-left py-3 px-3 text-sm md:text-base font-medium text-white/90"></th>
                                            <th className="py-3 px-3 font-semibold text-white bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] text-nowrap">
                                                Get Me Online
                                            </th>
                                            <th className="py-3 px-3 font-semibold text-white bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] text-nowrap">
                                                Organic
                                            </th>
                                            <th className="py-3 px-3 font-semibold text-white bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] text-nowrap">
                                                Boost
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {currentPricingData.map((item, index) => (
                                            <tr key={index} className="">
                                                <td className="py-3 px-3 text-left text-white pr-6 md:pr-0 text-nowrap md:text-wrap">
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
                                                <td className="py-3 px-3 text-center text-white border-l-[0.5px] border-white/20">
                                                    {item.economical}
                                                </td>
                                                <td className="py-3 px-3 text-center text-white border-l-[0.5px] border-white/20">
                                                    {item.organic}
                                                </td>
                                                <td className="py-3 px-3 text-center text-white border-l-[0.5px] border-white/20">
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