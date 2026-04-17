"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik } from "formik";
import type { FormikHelpers } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),
  contact: Yup.string()
    .trim()
    .matches(/^[0-9]{10,15}$/, "Phone number must be 10-15 digits")
    .required("Phone number is required"),
  agencyName: Yup.string()
    .trim()
    .min(2, "Agency name must be at least 2 characters")
    .required("Agency name is required"),
  website: Yup.string()
    .trim()
    .min(2, "URL is required")
    .required("URL is required"),
  enquiry: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
  smsConsent: Yup.boolean().oneOf(
    [true],
    "Please confirm consent before submitting",
  ),
  page: Yup.string()
    .trim()
    .min(2, "Page name must be at least 2 characters")
    .required("Page is required"),
});

type StaffAugmentationFormValues = Yup.InferType<typeof validationSchema>;

const avatarSources = [
  "/staff-augmentation/avatar-1.png",
  "/staff-augmentation/avatar-2.png",
  "/staff-augmentation/avatar-3.png",
  "/staff-augmentation/avatar-4.png",
  "/staff-augmentation/avatar-5.png",
] as const;

const inputClasses =
  "h-12 w-full rounded-xl border border-white/20 bg-white/[0.05] px-4 text-[15px] text-white outline-0 transition-colors placeholder:text-white/72 focus:border-[#00A1A5]/70 focus:bg-white/[0.08]";

const submitButtonClasses =
  "group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white bg-white px-5 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-black transition-all duration-300 hover:bg-transparent hover:text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-6 sm:text-sm sm:tracking-wider";

const DigitalTransformationHero = () => {
  const [isSending, setIsSending] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState<"success" | "error">("success");
  const [popupMsg, setPopupMsg] = useState("");

  const closePopup = () => setPopupOpen(false);

  const sendEmail = async (
    values: StaffAugmentationFormValues,
    formikHelpers: FormikHelpers<StaffAugmentationFormValues>,
  ) => {
    setIsSending(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/form/submit-form`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName,
            name: `${values.firstName} ${values.lastName}`.trim(),
            email: values.email,
            contact: values.contact,
            contactNumber: values.contact,
            companyName: values.agencyName,
            agencyName: values.agencyName,
            companyUrl: values.website,
            website: values.website,
            page: values.page,
            enquiry: values.enquiry,
            message: values.enquiry,
            service: "White Label Agency Support",
            smsConsent: values.smsConsent,
          }),
        },
      );

      const data = await response.json();

      const backendMessage =
        data?.messages?.[0]?.message ||
        data?.message ||
        "Thanks - we have received your message and will get back to you shortly.";

      if (!response.ok) {
        throw new Error(backendMessage || "Failed to send message.");
      }

      setPopupType("success");
      setPopupMsg(backendMessage);
      setPopupOpen(true);
      formikHelpers.resetForm();
    } catch (error) {
      setPopupType("error");
      setPopupMsg(
        error instanceof Error
          ? error.message
          : "Failed to send message, please try again.",
      );
      setPopupOpen(true);
    } finally {
      setIsSending(false);
      formikHelpers.setSubmitting(false);
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-[#04070A] bg-cover bg-center bg-no-repeat pb-16 pt-32 lg:min-h-screen lg:pb-24 lg:pt-40"
      style={{
        backgroundImage: "url('/digital-transformation/banner-bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute left-0 top-20">
        <Image
          src="/left-gradient.webp"
          width={500}
          height={500}
          className="h-[350px] w-[350px]"
          alt="left gradient"
        />
      </div>
      <div className="absolute right-0 top-20">
        <Image
          src="/right-gradient.webp"
          width={500}
          height={500}
          className="h-[350px] w-[350px]"
          alt="right gradient"
        />
      </div>

      <Container>
        <div className="relative overflow-hidden">
          <div className="max-w-[1080px]">

            <div className="mb-6 md:mb-8 inline-flex h-12 not-odd:w-fit items-center gap-2.5 rounded-full border border-[#00A1A5] px-3 py-2.5 sm:h-[53px] sm:px-3.5 [&>span:first-child]:hidden">
              <span className="mr-3 text-[#00A1A5]">•</span>
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#00A1A5]" />
              <span className="inline-flex h-[33px] min-w-0 flex-1 items-center whitespace-nowrap font-sans text-[11px] font-light leading-none tracking-[0.02em] text-white sm:text-[16px] lg:text-[18px]">
                Digital Transformation Consulting for Service Businesses
              </span>
            </div>

            <h1 className="font-primary text-[34px] font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-5xl sm:tracking-[-0.045em] lg:text-[56px] xl:text-[64px]">Your Business Deserves
              {" "}
              <span className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent">
                More Than
              </span>{" "}
              Referrals and Luck
            </h1>

            <p className="mt-6 leading-relaxed text-white md:mt-8">
              You are good at what you do. Your clients trust you. Your patients leave satisfied. Referrals come in. But when someone searches for your services online, they find someone else first.
              <br /><br />
              That does not happen because your business is less capable. It happens because your digital presence was never built properly. No strong brand. No high-performing website. No search visibility. No connected systems. Just a listing, a few scattered tools, and hope.
              <br /><br />
              That is where HTSOL comes in. Our digital transformation consulting helps service businesses build the right foundation from the ground up. We combine digital transformation services, branding, website strategy, SEO, marketing, business process automation, and system improvements into one clear path. The result is a business that looks more credible, gets found more often, and turns more visitors into real enquiries month after month.
            </p>

            <div className="mt-6 md:mt-8 flex justify-center sm:mt-10 sm:justify-start">
              <Button variant="white" href="/contact-us">
                Book a free consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DigitalTransformationHero;
