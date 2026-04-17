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

const WhiteLabelHero = () => {
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
        backgroundImage: "url('/services/whitelabel-bg-home.png')",
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
        <div className="relative grid grid-cols-1 items-center gap-8 sm:gap-10 xl:grid-cols-[minmax(0,780px)_630px] xl:justify-between xl:gap-12 overflow-hidden">
          <div className="max-w-[780px]">
            <div className="mb-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:gap-6">
              <div className="flex items-center">
                {avatarSources.map((src, index) => (
                  <div
                    key={src}
                    className={`relative h-11 w-11 overflow-hidden rounded-full border border-white/20 bg-black ${index === 0 ? "" : "-ml-3"}`}
                  >
                    <Image
                      src={src}
                      alt="HTSOL team member"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="border-t border-[#00A1A5]/40 pt-3 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                <div className="mb-1 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#F5C451"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M12 2.75l2.83 5.73 6.32.92-4.57 4.45 1.08 6.3L12 17.16l-5.66 2.99 1.08-6.3L2.85 9.4l6.32-.92L12 2.75z" />
                    </svg>
                  ))}
                </div>
                {/* <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/90 sm:text-sm">
                  NDA Protected <span className="mx-2 text-white/35">|</span>{" "}
                  100% White Label
                </p> */}
              </div>
            </div>

            <div className="mb-8 inline-flex h-[48px] w-fit items-center gap-[10px] rounded-full border border-[#00A1A5] px-[12px] py-[10px] sm:h-[53px] sm:px-[14px] [&>span:first-child]:hidden">
              <span className="mr-3 text-[#00A1A5]">•</span>
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#00A1A5]" />
              <span className="inline-flex h-[33px] min-w-0 flex-1 items-center whitespace-nowrap font-sans text-[13px] font-light leading-none tracking-[0.02em] text-white sm:text-[16px] lg:text-[18px]">
                Staff Augmentation Services
              </span>
            </div>

            <h1 className="max-w-[780px] font-primary text-[34px] font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-5xl sm:tracking-[-0.045em] lg:text-[60px]">The
              {" "}
              <span className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent">
                Talent Your Team Needs.
              </span>{" "}
              None of the Hiring Headaches.
            </h1>

            <p className="mt-6 max-w-2xl leading-relaxed text-white/82 sm:mt-8">
              Hiring takes months. Freelancers are unreliable. Agencies charge for work you cannot control. And your business still needs the work done — right now, to a real standard, by someone who actually shows up.
              <br /><br />
              Staff augmentation is the practical answer. You get a dedicated professional — a developer, a designer, a marketer, an SEO specialist — who integrates directly into your team, works under your direction, attends your standups, and delivers exactly what you tell them to.
              <br /><br />
              HTSOL Inc. gives startups, agencies, and growing businesses access to senior digital talent across the full stack — without the six-month hiring process, the employer taxes, the benefits package, or the risk of a permanent hire you are not sure about yet.

            </p>

            <div className="mt-8 flex justify-center sm:mt-10 sm:justify-start">
              <Button variant="white" href="#white-label-form">
                Tell Us What You Need
              </Button>
            </div>
          </div>

          <div
            id="white-label-form"
            className="relative w-full xl:ml-auto xl:w-[630px]"
          >
            <div className="rounded-[30px] border border-[#00A1A5] bg-transparent">
              <div className="overflow-hidden rounded-[30px] bg-[linear-gradient(180deg,rgba(38,38,38,0.8)_0%,rgba(20,20,20,0.84)_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="bg-[linear-gradient(180deg,rgba(10,98,103,0.48)_0%,rgba(8,62,66,0.28)_100%)] px-6 py-5 text-center">
                  <h2 className="mx-auto flex min-h-16 w-full max-w-[420px] flex-col items-center justify-center font-primary text-[19px] font-semibold uppercase leading-[1] tracking-[-0.03em] text-white sm:text-[24px] lg:text-[30px]">
                    <span className="block whitespace-nowrap">
                      Get the Talent You Need to
                    </span>
                    <span className="block whitespace-nowrap">Hit Your Deadlines</span>
                  </h2>
                </div>

                <div className="p-4 sm:p-6 lg:px-7 lg:pb-7 lg:pt-6">
                  <Formik<StaffAugmentationFormValues>
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      email: "",
                      contact: "",
                      agencyName: "",
                      website: "",
                      enquiry: "",
                      smsConsent: false,
                      page: "White Label Page",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={sendEmail}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <Field type="hidden" name="page" />

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <Field
                              type="text"
                              name="firstName"
                              className={inputClasses}
                              placeholder="First name"
                            />
                            <ErrorMessage
                              name="firstName"
                              component="p"
                              className="mt-2 text-xs text-red-400"
                            />
                          </div>

                          <div>
                            <Field
                              type="text"
                              name="lastName"
                              className={inputClasses}
                              placeholder="Last name"
                            />
                            <ErrorMessage
                              name="lastName"
                              component="p"
                              className="mt-2 text-xs text-red-400"
                            />
                          </div>

                          <div>
                            <Field
                              type="email"
                              name="email"
                              className={inputClasses}
                              placeholder="Email"
                            />
                            <ErrorMessage
                              name="email"
                              component="p"
                              className="mt-2 text-xs text-red-400"
                            />
                          </div>

                          <div>
                            <Field
                              type="text"
                              name="contact"
                              className={inputClasses}
                              placeholder="Phone number"
                            />
                            <ErrorMessage
                              name="contact"
                              component="p"
                              className="mt-2 text-xs text-red-400"
                            />
                          </div>

                          <div>
                            <Field
                              type="text"
                              name="agencyName"
                              className={inputClasses}
                              placeholder="Agency Name"
                            />
                            <ErrorMessage
                              name="agencyName"
                              component="p"
                              className="mt-2 text-xs text-red-400"
                            />
                          </div>

                          <div>
                            <Field
                              type="text"
                              name="website"
                              className={inputClasses}
                              placeholder="URL"
                            />
                            <ErrorMessage
                              name="website"
                              component="p"
                              className="mt-2 text-xs text-red-400"
                            />
                          </div>
                        </div>

                        <div className="mt-4">
                          <Field
                            as="textarea"
                            name="enquiry"
                            className="h-28 w-full rounded-xl border border-white/20 bg-white/[0.05] px-4 py-4 text-[15px] text-white outline-0 transition-colors placeholder:text-white/72 focus:border-[#00A1A5]/70 focus:bg-white/[0.08]"
                            placeholder="Message"
                          />
                          <ErrorMessage
                            name="enquiry"
                            component="p"
                            className="mt-2 text-xs text-red-400"
                          />
                        </div>

                        <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-white/72 sm:text-sm">
                          <span className="relative mt-1 h-6 w-6 shrink-0">
                            <Field
                              type="checkbox"
                              name="smsConsent"
                              className="peer absolute inset-0 h-full w-full cursor-pointer appearance-none bg-white/[0.08] checked:border-[#00A1A5] checked:bg-[#00A1A5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A1A5]/50"
                            />
                            <svg
                              className="pointer-events-none absolute inset-0 m-auto hidden h-[20px] w-[20px] text-white peer-checked:block"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                d="M3.5 8.5L6.5 11.5L12.5 4.5"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span>
                            Consent to receive SMS notifications, alerts, and
                            occasional marketing communication from company.
                            Message frequency varies. Message and data rates may
                            apply. You can reply STOP to unsubscribe at any
                            time.
                          </span>
                        </label>
                        <ErrorMessage
                          name="smsConsent"
                          component="p"
                          className="mt-2 text-xs text-red-400"
                        />

                        <div className="mt-7 flex justify-center">
                          <button
                            type="submit"
                            disabled={isSubmitting || isSending}
                            className={submitButtonClasses}
                          >
                            {isSending
                              ? "Sending..."
                              : "I'M READY TO GROW MY AGENCY"}
                            <Image
                              src="/black-arrow.svg"
                              alt=""
                              width={22}
                              height={22}
                              className="h-[22px] w-[22px] transition-[filter] duration-300 group-hover:invert"
                            />
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {popupOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          <button
            type="button"
            aria-label="Close popup backdrop"
            onClick={closePopup}
            className="absolute inset-0 bg-black/70"
          />
          <div className="relative w-full max-w-md rounded-[10px] border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                  className={`text-lg font-semibold ${popupType === "success" ? "text-green-700" : "text-red-700"}`}
                >
                  {popupType === "success"
                    ? "Message sent"
                    : "Something went wrong"}
                </p>
                <p className="mt-1 text-sm text-gray-600">{popupMsg}</p>
              </div>

              <button
                type="button"
                aria-label="Close popup"
                onClick={closePopup}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-black hover:bg-gray-50"
              >
                <span className="text-xl leading-none">&times;</span>
              </button>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={closePopup}
                className="rounded-full bg-secondary px-5 py-2 font-medium text-black"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhiteLabelHero;
