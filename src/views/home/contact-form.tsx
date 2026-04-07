"use client";

import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import type { FormikHelpers } from "formik";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import {
  contactSchema as validationSchema,
  type ContactFormValues,
} from "@/lib/contact-form";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const scopeRef = useRef<HTMLElement | null>(null);
  const headingSplitRef = useRef<HTMLHeadingElement | null>(null);
  const paraSplitRef = useRef<HTMLParagraphElement | null>(null);
  const iconWrapRef = useRef<HTMLDivElement | null>(null);
  const formWrapRef = useRef<HTMLDivElement | null>(null);

  const [isSending, setIsSending] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState<"success" | "error">("success");
  const [popupMsg, setPopupMsg] = useState("");

  useGSAP(
    () => {
      const headingEl = headingSplitRef.current;
      const paraEl = paraSplitRef.current;
      const formEl = formWrapRef.current;
      if (!headingEl || !paraEl || !formEl) return;

      const headingSplit = new SplitType(headingEl, { types: "words" });
      const paraSplit = new SplitType(paraEl, { types: "words" });
      const iconEl = iconWrapRef.current;

      if (iconEl) {
        gsap.fromTo(
          iconEl,
          { opacity: 0, y: -14, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: iconEl,
              start: "top 85%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          }
        );
      }

      gsap.set([headingSplit.words, paraSplit.words], {
        display: "inline-block",
        opacity: 0,
        y: 18,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingEl,
          start: "top 80%",
          end: "bottom 55%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(headingSplit.words, {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        ease: "power2.out",
        duration: 0.6,
      }).to(
        paraSplit.words,
        {
          opacity: 1,
          y: 0,
          stagger: 0.01,
          ease: "power2.out",
          duration: 0.6,
        },
        "-=0.25"
      );

      gsap.fromTo(
        formEl,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formEl,
            start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        }
      );

      return () => {
        headingSplit.revert();
        paraSplit.revert();
      };
    },
    { scope: scopeRef }
  );

  const sendEmail = async (
    values: ContactFormValues,
    formikHelpers: FormikHelpers<ContactFormValues>
  ) => {
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to send message.");
      }

      setPopupType("success");
      setPopupMsg(
        data?.message ||
        "Thanks — we’ve received your message and will get back to you shortly."
      );
      setPopupOpen(true);
      formikHelpers.resetForm();
    } catch (error) {
      setPopupType("error");
      setPopupMsg(
        error instanceof Error
          ? error.message
          : "Failed to send message, please try again."
      );
      setPopupOpen(true);
    } finally {
      setIsSending(false);
      formikHelpers.setSubmitting(false);
    }
  };

  const closePopup = () => setPopupOpen(false);

  return (
    <section
      ref={scopeRef}
      className="bg-[url(/get-in-touch-bg.webp)] bg-cover relative py-20 lg:py-40"
    >
      <Container>
        <div className="relative flex gap-8 flex-col max-w-5xl mx-auto">
          <div className="flex justify-center" ref={iconWrapRef}>
            <Image
              src={"/chat.svg"}
              alt="chat icon"
              className="w-[52px] h-[52px]"
              width={54}
              height={54}
            />
          </div>

          <HeadingTwo ref={headingSplitRef} className="text-center">
            Let’s have a chat
          </HeadingTwo>

          <p ref={paraSplitRef} className="text-white text-[20px] text-center">
            HT-Solutions provides you Website Designing, Web Development, SEO
            Services, Graphic Designing, Mobile Application Development Video
            Production, Voice Over, Digital Marketing and Network Solutions in
            Lahore, Pakistan.
          </p>
        </div>

        <div className="relative mt-8" ref={formWrapRef}>
          <Formik<ContactFormValues>
            initialValues={{
              firstName: "",
              lastName: "",
              page: "Home Page",
              email: "",
              contact: "",
              service: "",
              enquiry: "",
              city: "",
            }}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field type="hidden" name="page" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
                  <div>
                    <Field
                      type="text"
                      name="firstName"
                      className="h-10 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                      placeholder="First Name"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="p"
                      className="text-red-600 text-xs mt-2"
                    />
                  </div>

                  <div>
                    <Field
                      type="text"
                      name="lastName"
                      className="h-10 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                      placeholder="Last Name"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="p"
                      className="text-red-600 text-xs mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
                  <div>
                    <Field
                      type="tel"
                      name="contact"
                      className="h-10 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                      placeholder="Contact No"
                    />
                    <ErrorMessage
                      name="contact"
                      component="p"
                      className="text-red-600 text-xs mt-2"
                    />
                  </div>

                  <div>
                    <Field
                      name="email"
                      type="email"
                      className="h-10 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                      placeholder="Email Address"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-600 text-xs mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
                  <div>
                    <Field
                      name="city"
                      type="text"
                      className="h-10 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                      placeholder="City/Area"
                    />
                    <ErrorMessage
                      name="city"
                      component="p"
                      className="text-red-600 text-xs mt-2"
                    />
                  </div>

                  <div>
                    <Field
                      as="select"
                      name="service"
                      className="h-10 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-sm px-4 backdrop:backdrop-blur-2xl text-white"
                    >
                      <option value="" disabled className="bg-white text-black">
                        Select a service
                      </option>
                      <option value="web dev" className="bg-white text-black">
                        web dev
                      </option>
                      <option
                        value="cgi / vfx / 3d animations"
                        className="bg-white text-black"
                      >
                        cgi / vfx / 3d animations
                      </option>
                      <option
                        value="staff augmentation"
                        className="bg-white text-black"
                      >
                        staff augmentation
                      </option>
                      <option
                        value="Complete digital transformation"
                        className="bg-white text-black"
                      >
                        Complete digital transformation
                      </option>
                    </Field>
                    <ErrorMessage
                      name="service"
                      component="p"
                      className="text-red-600 text-xs mt-2"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <Field
                    as="textarea"
                    name="enquiry"
                    className="h-28 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-md px-4 py-3 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                    placeholder="Enquiry details"
                  />
                  <ErrorMessage
                    name="enquiry"
                    component="p"
                    className="text-red-600 text-xs mt-2"
                  />
                </div>

                <div className="flex mt-6 justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSending}
                    className="inline-flex cursor-pointer items-center bg-white gap-2 px-6 py-3 text-sm text-primary font-medium uppercase rounded-full tracking-wider transition-all duration-300 border disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSending ? "Sending..." : "Send Message"}

                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_397_144)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.56991 23.5995C5.13058 23.1602 5.13057 22.4479 5.56991 22.0085L17.2372 10.3413C17.6765 9.90193 18.3888 9.90193 18.8282 10.3413C19.2675 10.7806 19.2675 11.4929 18.8282 11.9322L7.1609 23.5995C6.72156 24.0389 6.00923 24.0388 5.56991 23.5995Z"
                          fill="#000"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.36147 11.1338C7.36147 10.5125 7.86518 10.0088 8.48651 10.0088L18.0324 10.0088C18.6537 10.0088 19.1574 10.5125 19.1575 11.1338L19.1575 20.6797C19.1574 21.301 18.6537 21.8047 18.0324 21.8048C17.4111 21.8047 16.9074 21.301 16.9074 20.6797L16.9074 12.2588L8.48647 12.2588C7.86519 12.2588 7.36151 11.7551 7.36147 11.1338Z"
                          fill="#000"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_397_144">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 16.9706) rotate(-45)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
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
                    }`}
                >
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
                className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 text-black"
              >
                <span className="text-xl leading-none">&times;</span>
              </button>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={closePopup}
                className="px-5 py-2 rounded-full bg-secondary text-black font-medium"
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

export default ContactForm;