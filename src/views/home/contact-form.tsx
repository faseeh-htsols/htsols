"use client";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import type { FormikHelpers } from "formik";
import { useRef, useState } from "react";
const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  city: Yup.string()
    .min(2, "City/Area must be at least 2 characters")
    .required("City/Area is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  contactNumber: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Contact number must be 10–15 digits")
    .required("Contact number is required"),
  services: Yup.string().required("Please select a services"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});
type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  services: string;
  message: string;
  city: string;
};
const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
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
        "service_qm3kdpd",
        "template_4svdbpi",
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
    <section className="bg-[url(/get-in-touch-bg.jpg)] bg-cover relative py-20   -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_100%,0_100%)]">
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div>
      {/* <div className="pointer-events-none h-full w-full absolute inset-x-0 top-0 flex justify-center">
        <div className="w-full h-full  max-w-[1600px] bg-gradient-to-r from-transparent via-[#00A1A5] to-transparent" />
      </div> */}
      <Container>
        <div className="relative py-10 flex gap-8 flex-col max-w-5xl mx-auto">
          <div className="flex justify-center">
            <Image
              src={"/chat.svg"}
              alt="chat icon"
              className="w-[52px] h-[52px]"
              width={54}
              height={54}
            />
          </div>

          <HeadingTwo className="text-center">Let’s have a chat</HeadingTwo>
          <p className="text-white text-[20px] text-center">
            HT-Solutions provides you Website Designing, Web Development, SEO
            Services, Graphic Designing, Mobile Application Development Video
            Production, Voice Over, Digital Marketing and Network Solutions in
            Lahore, Pakistan.
          </p>
        </div>
        <div className="relative mt-8">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              contactNumber: "",
              services: "",
              message: "",
              city: "",
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
                      name="firstName"
                      className="h-10 w-full relative outline-0 bg-[url(/input-bg.png)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
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
                      className="h-10 w-full relative outline-0 bg-[url(/input-bg.png)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
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
                      type="text"
                      name="contactNumber"
                      className="h-10 w-full relative outline-0 bg-[url(/input-bg.png)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                      placeholder="Contact No"
                    />
                    <ErrorMessage
                      name="contactNumber"
                      component="p"
                      className="text-red-600 text-xs mt-2"
                    />
                  </div>
                  <div>
                    <Field
                      name="email"
                      type="text"
                      className="h-10 w-full relative outline-0 bg-[url(/input-bg.png)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
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
                      className="h-10 w-full relative outline-0 bg-[url(/input-bg.png)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
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
                      className="h-10 w-full relative outline-0 bg-[url(/input-bg.png)] bg-cover border-0 rounded-sm px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                    >
                      <option value=" web dev" className="bg-black text-white">
                        web dev
                      </option>
                      <option
                        value=" cgi / vfx /3d animations"
                        className="bg-black text-white"
                      >
                        {" "}
                        cgi / vfx /3d animations{" "}
                      </option>
                      <option
                        value="staff augmentation"
                        className="bg-black text-white"
                      >
                        {" "}
                        staff augmentation{" "}
                      </option>
                      <option
                        value="Complete digital transformation"
                        className="bg-black text-white"
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
                </div>
                <div className="mb-3">
                  <Field
                    as="textarea"
                    name="message"
                    className="h-28 w-full relative outline-0 bg-[url(/input-bg.png)] bg-cover border-0 rounded-md px-4 py-3 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                    placeholder="Enquiry  details"
                    id=""
                  ></Field>
                  <ErrorMessage
                    name="message"
                    component="p"
                    className="text-red-600 text-xs mt-2"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSending}
                    className="inline-flex cursor-pointer items-center bg-white gap-2 px-6 py-3 text-sm text-primary font-medium uppercase rounded-full tracking-wider transition-all duration-300 border"
                  >
                    {isSending ? "Sending..." : "Send Message"}
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_397_144)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.56991 23.5995C5.13058 23.1602 5.13057 22.4479 5.56991 22.0085L17.2372 10.3413C17.6765 9.90193 18.3888 9.90193 18.8282 10.3413C19.2675 10.7806 19.2675 11.4929 18.8282 11.9322L7.1609 23.5995C6.72156 24.0389 6.00923 24.0388 5.56991 23.5995Z"
                          fill="#000"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
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
                          <stop stop-color="#075B65" />
                          <stop offset="0.370192" stop-color="#00838A" />
                          <stop offset="0.8125" stop-color="#328A99" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_397_144"
                          x1="12.464"
                          y1="16.7022"
                          x2="18.8279"
                          y2="10.3383"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#075B65" />
                          <stop offset="0.370192" stop-color="#00838A" />
                          <stop offset="0.8125" stop-color="#328A99" />
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
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
                  className={`text-lg font-semibold ${
                    popupType === "success" ? "text-green-700" : "text-red-700"
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
                className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50"
              >
                <span className="text-xl leading-none">&times;</span>
              </button>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={closePopup}
                className="px-5 py-2 rounded-full bg-secondary text-white font-medium"
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
