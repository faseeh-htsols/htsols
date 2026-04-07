"use client";

import Container from "@/components/ui/container";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import type { FormikHelpers } from "formik";
import { useRef, useState } from "react";
import HeadingTwo from "@/components/ui/heading-two";

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),

  page: Yup.string()
    .trim()
    .min(2, "Page name must be at least 2 characters")
    .required("Page is required"),

  city: Yup.string()
    .trim()
    .min(2, "City/Area must be at least 2 characters")
    .required("City/Area is required"),

  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),

  contact: Yup.string()
    .trim()
    .matches(/^[0-9]{10,15}$/, "Contact number must be 10–15 digits")
    .required("Contact number is required"),

  service: Yup.string()
    .trim()
    .required("Please select a service"),

  enquiry: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

type FormValues = {
  name: string;
  page: string;
  email: string;
  contact: string;
  service: string;
  enquiry: string;
  city: string;
  // firstName: string;
  // email: string;
  // contactNumber: string;
  // services: string;
  // message: string;
  // city: string;
};

const Banner = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const formWrapRef = useRef<HTMLDivElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState<"success" | "error">("success");
  const [popupMsg, setPopupMsg] = useState("");

  const sendEmail = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => {
    setIsSending(true);

    emailjs
      .sendForm(
        "service_4ls6ayf",
        "template_1sux4xj",
        formRef.current!,
        "Mr3TWOsrrdm099Kef",
      )
      .then(
        () => {
          setIsSending(false);
          setPopupType("success");
          setPopupMsg(
            "Thanks — we’ve received your message and will get back to you shortly.",
          );
          setPopupOpen(true);
          formikHelpers.resetForm();
        },
        () => {
          setIsSending(false);
          setPopupType("error");
          setPopupMsg("Failed to send message, please try again.");
          setPopupOpen(true);
        },
      );
  };
  const closePopup = () => setPopupOpen(false);

  return (
    <div className="bg-black relative py-20 lg:py-40 overflow-hidden">
      {/* <div className="pointer-events-none h-full w-full absolute inset-x-0 top-0 flex justify-center">
        <div className="w-full h-full  max-w-[1600px] bg-gradient-to-r from-transparent via-[#00A1A5] to-transparent" />
      </div> */}
      <div className="absolute top-20 left-0">
        <Image
          src={"/left-gradient.webp"}
          width={500}
          height={500}
          className="w-[350px] h-[350px]"
          alt="left gradient"
        />
      </div>
      <div className="absolute top-20 right-0">
        <Image
          src={"/right-gradient.webp"}
          width={500}
          height={500}
          className="w-[350px] h-[350px]"
          alt="left gradient"
        />
      </div>
      <Container>
        <div className="relative py-10 flex gap-6 flex-col max-w-6xl mx-auto">
          <div className="flex justify-center">
            <Image
              src={"/chat.svg"}
              alt="chat icon"
              className="w-[52px] h-[52px]"
              width={54}
              height={54}
            />
          </div>

          <h1 className="text-4xl lg:text-5xl font-semibold uppercase text-center font-primary">
            Get in touch with HTSOL Inc.
          </h1>
          <p className="text-white/80 text-[16px] sm:text-[18px] text-center max-w-3xl mx-auto leading-relaxed">
            Are you ready to propel your business forward? It all begins with
            reaching out to us and sharing your goals. Whether you already have
            a clear vision or are still finalizing the details, our team is here
            to listen and guide you with confidence every step of the way.
          </p>
          <div className="w-full max-w-3xl mx-auto h-px bg-white/20 mt-3" />
        </div>

        <div className="relative mt-10" ref={formWrapRef}>
          <Formik
            initialValues={{
              name: "",
              page: "Contact Us Page",
              email: "",
              contact: "",
              service: "",
              enquiry: "",
              city: "",
            }}
            validationSchema={validationSchema}
            onSubmit={sendEmail}>
            {({ isSubmitting }) => (
              <Form ref={formRef}>
                <Field type="hidden" name="page" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* LEFT COLUMN */}
                  <div className="flex flex-col gap-8">
                    <div className="p-px rounded-2xl bg-linear-to-br from-[#00A1A5] via-white/10 to-transparent">
                      <div className="rounded-2xl bg-[#0f0f0f]/90 shadow-[0_20px_80px_rgba(0,0,0,0.55)] p-6 sm:p-8">
                        <h2 className="font-primary uppercase text-2xl mb-4">
                          Share your goals
                        </h2>
                        <p className="text-white/75 text-sm leading-relaxed mb-4">
                          Let us know about your business, the challenges you’re
                          facing, and where you want to go. To help us
                          understand your needs better, consider including:
                        </p>
                        <ul className="space-y-2 text-white/85 text-sm">
                          <li className="flex gap-2">
                            <span className="text-[#00A1A5]">•</span>
                            <span>What you’d like to improve right now</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#00A1A5]">•</span>
                            <span>Your target audience</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#00A1A5]">•</span>
                            <span>
                              What’s worked well for you (and what hasn’t)
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-[#00A1A5]">•</span>
                            <span>Any specific timelines or priorities</span>
                          </li>
                        </ul>
                        <p className="text-white/75 text-sm leading-relaxed mt-5">
                          We’ll listen carefully and create a customized
                          strategy that aligns with your goals, using your
                          insights as the foundation for what’s best for your
                          business.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-primary uppercase text-2xl mb-3">
                        Let’s get started
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-lg">
                        Once we have a clear understanding of your objectives,
                        we’ll guide you through the next steps. We’ll outline a
                        solid plan to bring your vision to life, ensuring you
                        know exactly what happens next, what we’ll need from
                        you, and how we’ll move forward in a clear and
                        manageable way.
                      </p>
                      <a
                        href="#contact-form"
                        className="inline-flex items-center bg-white gap-2 px-6 py-3 text-sm text-primary font-medium uppercase rounded-full tracking-wider transition-all duration-300 border border-white hover:bg-transparent hover:text-white">
                        Request a call back
                        <Image
                          src={"/right-arrow-btn.webp"}
                          alt="arrow"
                          width={18}
                          height={18}
                          className="w-[18px] h-[18px]"
                        />
                      </a>
                    </div>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div id="contact-form">
                    <HeadingTwo className="mb-3">Fill out the form</HeadingTwo>
                    <p className="text-white/75 text-sm leading-relaxed mb-6">
                      Start by filling out the simple contact form below. Just
                      share the basics, and we’ll take it from there. We’ll
                      review your information and get back to you soon with
                      follow-up questions or next steps, tailored to your needs.
                    </p>

                    {/*
                      Field styling to match the screenshot:
                      soft dark gradient, large radius, no harsh borders.
                    */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                      <div>
                        <div className="h-14 w-full rounded-md bg-[linear-gradient(180deg,#1B1B1B_0%,#121212_100%)]">
                          <Field
                            type="text"
                            name="name"
                            className="h-full rounded-md w-full outline-0 bg-transparent border-0  px-5 text-white placeholder:text-white/60"
                            placeholder="Full name"
                          />
                        </div>
                        <ErrorMessage
                          name="name"
                          component="p"
                          className="text-red-600 text-xs mt-2"
                        />
                      </div>
                      <div>
                        <div className="h-14 w-full  bg-[linear-gradient(180deg,#1B1B1B_0%,#121212_100%)]">
                          <Field
                            type="text"
                            name="contact"
                            className="h-full rounded-md w-full outline-0 bg-transparent border-0  px-5 text-white placeholder:text-white/60"
                            placeholder="Contact Number"
                          />
                        </div>
                        <ErrorMessage
                          name="contact"
                          component="p"
                          className="text-red-600 text-xs mt-2"
                        />
                      </div>
                      <div>
                        <div className="h-14 w-full  bg-[linear-gradient(180deg,#1B1B1B_0%,#121212_100%)]">
                          <Field
                            name="email"
                            type="text"
                            className="h-full rounded-md w-full outline-0 bg-transparent border-0  px-5 text-white placeholder:text-white/60"
                            placeholder="Email"
                          />
                        </div>
                        <ErrorMessage
                          name="email"
                          component="p"
                          className="text-red-600 text-xs mt-2"
                        />
                      </div>
                      <div>
                        <div className="h-14 w-full  bg-[linear-gradient(180deg,#1B1B1B_0%,#121212_100%)]">
                          <Field
                            name="city"
                            type="text"
                            className="h-full rounded-md w-full outline-0 bg-transparent border-0  px-5 text-white placeholder:text-white/60"
                            placeholder="City/Area"
                          />
                        </div>
                        <ErrorMessage
                          name="city"
                          component="p"
                          className="text-red-600 text-xs mt-2"
                        />
                      </div>
                    </div>
                    <div className="mb-5 relative">
                      <div className="h-14 w-full rounded-md bg-[linear-gradient(180deg,#1B1B1B_0%,#121212_100%)]">
                        <Field
                          as="select"
                          name="service"
                          className="h-full w-full outline-0 bg-transparent border-0 rounded-md px-5 pr-12 text-white appearance-none">
                          <option value="" className="bg-black text-white">
                            Service are you interested in
                          </option>
                          <option
                            value="web dev"
                            className="bg-black text-white">
                            web dev
                          </option>
                          <option
                            value="cgi / vfx /3d animations"
                            className="bg-black text-white">
                            cgi / vfx /3d animations
                          </option>
                          <option
                            value="staff augmentation"
                            className="bg-black text-white">
                            staff augmentation
                          </option>
                          <option
                            value="Complete digital transformation"
                            className="bg-black text-white">
                            Complete digital transformation
                          </option>
                        </Field>
                      </div>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/70">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6 9l6 6 6-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <ErrorMessage
                        name="service"
                        component="p"
                        className="text-red-600 text-xs mt-2"
                      />
                    </div>

                    <div className="mb-4">
                      <div className="w-full rounded-md bg-[linear-gradient(180deg,#1B1B1B_0%,#121212_100%)]">
                        <Field
                          as="textarea"
                          name="enquiry"
                          className="h-44 w-full outline-0 bg-transparent border-0 rounded-md px-5 py-4 text-white placeholder:text-white/60 resize-none"
                          placeholder="Notes"
                        />
                      </div>
                      <ErrorMessage
                        name="enquiry"
                        component="p"
                        className="text-red-600 text-xs mt-2"
                      />
                    </div>

                    <div className="flex mt-6 justify-start">
                      <button
                        type="submit"
                        disabled={isSubmitting || isSending}
                        className="inline-flex cursor-pointer items-center bg-white gap-2 px-6 py-3 text-sm text-primary font-semibold uppercase rounded-full tracking-wider transition-all duration-300 border border-white hover:bg-transparent hover:text-white disabled:opacity-60 disabled:cursor-not-allowed">
                        {isSending ? "Sending..." : "Submit form"}
                        <Image
                          src={"/right-arrow-btn.webp"}
                          alt="arrow"
                          width={18}
                          height={18}
                          className="w-[18px] h-[18px]"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Container>

      {popupOpen && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center px-4">
          <button
            type="button"
            aria-label="Close popup backdrop"
            onClick={closePopup}
            className="absolute inset-0 bg-black/60"
          />
          <div className="relative w-full max-w-md bg-white rounded-[10px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-gray-200 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                  className={`text-lg font-semibold ${popupType === "success" ? "text-green-700" : "text-red-700"
                    }`}>
                  {popupType === "success"
                    ? "Message sent"
                    : "Something went wrong"}
                </p>
                <p className="text-sm text-gray-600 mt-1">{popupMsg}</p>
              </div>

              <button
                type="button"
                aria-label="Close popup"
                onClick={closePopup}
                className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 text-black">
                <span className="text-xl leading-none">&times;</span>
              </button>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={closePopup}
                className="px-5 py-2 rounded-full bg-secondary font-medium text-black">
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
