"use client";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import type { FormikHelpers } from "formik";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Full name must be at least 2 characters")
    .required("Full name is required"),
  companyName: Yup.string()
    .min(2, "Company name/URL must be at least 2 characters")
    .required("Company name/URL is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  contactNumber: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Phone number must be 10–15 digits")
    .required("Phone number is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});
type FormValues = {
  fullName: string;
  companyName: string;
  email: string;
  contactNumber: string;
  message: string;
};
const Contact = () => {
  const scopeRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  // 👇 for split text
  const headingSplitRef = useRef<HTMLHeadingElement | null>(null);
  const paraSplitRef = useRef<HTMLHeadingElement | null>(null);
  const iconWrapRef = useRef<HTMLDivElement | null>(null);
  // 👇 for form fade
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

      // Split into words
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
          },
        );
      }
      // Make sure words can move independently
      gsap.set([headingSplit.words, paraSplit.words], {
        display: "inline-block",
        opacity: 0,
        y: 18,
      });

      // Heading + para reveal by words on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingEl, // top block
          start: "top 80%",
          end: "bottom 55%",
          scrub: true,
          invalidateOnRefresh: true,
          // markers: true,
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
        "-=0.25",
      );

      // Form fade from bottom
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
        },
      );

      // ✅ cleanup SplitType DOM changes
      return () => {
        headingSplit.revert();
        paraSplit.revert();
      };
    },
    { scope: scopeRef },
  );
  const sendEmail = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => {
    setIsSending(true);

    try {
      await emailjs.send(
        "service_4ls6ayf",
        "template_1sux4xj",
        {
          fullName: values.fullName,
          companyName: values.companyName,
          email: values.email,
          contactNumber: values.contactNumber,
          message: values.message,
        },
        {
          publicKey: "Mr3TWOsrrdm099Kef",
        }
      );

      setPopupType("success");
      setPopupMsg(
        "Thanks — we’ve received your message and will get back to you shortly."
      );
      setPopupOpen(true);
      formikHelpers.resetForm();
    } catch (error) {
      console.error("EMAILJS ERROR:", error);
      setPopupType("error");
      setPopupMsg("Failed to send message, please try again.");
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
      className="bg-black relative pb-20   "
    >
      {/* <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div> */}
      {/* <div className="pointer-events-none h-full w-full absolute inset-x-0 top-0 flex justify-center">
        <div className="w-full h-full  max-w-[1600px] bg-gradient-to-r from-transparent via-[#00A1A5] to-transparent" />
      </div> */}
      <Container>
        <div className="relative py-5 lg:py-10 flex gap-8 flex-col max-w-5xl mx-auto">
          {/* <div className="flex justify-center" ref={iconWrapRef}>
                        <Image
                            src={"/chat.svg"}
                            alt="chat icon"
                            className="w-[52px] h-[52px]"
                            width={54}
                            height={54}
                        />
                    </div> */}

          <HeadingTwo ref={headingSplitRef} className="text-center mb-3">
            Ready To Discuss your project?
          </HeadingTwo>
          <h3 ref={paraSplitRef} className="text-white text-[20px] text-center font-normal">
            Katalyst Studio offers a range of design services that are tailored to meet the unique needs of each client Katalyst Studio offers a range of design services.
          </h3>
        </div>
        <div className="relative mt-8" ref={formWrapRef}>
          <Formik
            initialValues={{
              fullName: "",
              companyName: "",
              email: "",
              contactNumber: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            {({ isSubmitting }) => (
              <Form ref={formRef}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
                  <div>
                    <Field
                      type="text"
                      name="fullName"
                      className="h-10 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                      placeholder="Full name"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="p"
                      className="text-red-600 text-xs mt-2"
                    />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="contactNumber"
                      className="h-10 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                      placeholder="Phone Number"
                    />
                    <ErrorMessage
                      name="contactNumber"
                      component="p"
                      className="text-red-600 text-xs mt-2"
                    />
                  </div>

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
                  <div>
                    <Field
                      type="text"
                      name="companyName"
                      className="h-10 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                      placeholder="Company Name/URL"
                    />
                    <ErrorMessage
                      name="companyName"
                      component="p"
                      className="text-red-600 text-xs mt-2"
                    />
                  </div>
                  <div>
                    <Field
                      name="email"
                      type="text"
                      className="h-10 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-600 text-xs mt-2"
                    />
                  </div>
                </div>
                {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
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
                                            name="services"
                                            id=""
                                            className="h-10 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-sm px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                                        >
                                            <option value=" web dev" className="bg-white text-black">
                                                web dev
                                            </option>
                                            <option
                                                value=" cgi / vfx /3d animations"
                                                className="bg-white text-black"
                                            >
                                                {" "}
                                                cgi / vfx /3d animations{" "}
                                            </option>
                                            <option
                                                value="staff augmentation"
                                                className="bg-white text-black"
                                            >
                                                {" "}
                                                staff augmentation{" "}
                                            </option>
                                            <option
                                                value="Complete digital transformation"
                                                className="bg-white text-black"
                                            >
                                                {" "}
                                                Complete digital transformation{" "}
                                            </option>
                                        </Field>
                                        <ErrorMessage
                                            name="services"
                                            component="p"
                                            className="text-red-600 text-xs mt-2"
                                        />
                                    </div>
                                </div> */}
                <div className="mb-3">
                  <Field
                    as="textarea"
                    name="message"
                    className="h-28 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-md px-4 py-3 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                    placeholder="Notes"
                    id=""
                  ></Field>
                  <ErrorMessage
                    name="message"
                    component="p"
                    className="text-red-600 text-xs mt-2"
                  />
                </div>
                <div className="flex mt-6 justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSending}
                    className="inline-flex cursor-pointer items-center bg-white gap-2 px-6 py-3 text-sm text-primary font-medium uppercase rounded-full tracking-wider transition-all duration-300 border"
                  >
                    {isSending ? "Submiting..." : "Submit Form"}
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
                        <linearGradient
                          id="paint0_linear_397_144"
                          x1="5.56991"
                          y1="23.5995"
                          x2="18.8282"
                          y2="10.3413"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#075B65" />
                          <stop offset="0.370192" stopColor="#00838A" />
                          <stop offset="0.8125" stopColor="#328A99" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_397_144"
                          x1="12.464"
                          y1="16.7022"
                          x2="18.8279"
                          y2="10.3383"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#075B65" />
                          <stop offset="0.370192" stopColor="#00838A" />
                          <stop offset="0.8125" stopColor="#328A99" />
                        </linearGradient>
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
                className="px-5 py-2 rounded-full bg-secondary font-medium text-black"
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

export default Contact;
