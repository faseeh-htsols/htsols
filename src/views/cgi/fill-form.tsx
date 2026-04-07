"use client";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import type { FormikHelpers } from "formik";
import { useRef, useState } from "react";
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Full name must be at least 2 characters")
    .required("Full name is required"),
  page: Yup.string()
    .trim()
    .min(2, "Page name must be at least 2 characters")
    .required("Page is required"),
  companyUrl: Yup.string()
    .min(2, "Company name/URL must be at least 2 characters")
    .required("Company name/URL is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  contact: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Phone number must be 10–15 digits")
    .required("Phone number is required"),
  enquiry: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});
type FormValues = {
  name: string;
  page: string;
  companyUrl: string;
  email: string;
  contact: string;
  enquiry: string;
};
const FillForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState<"success" | "error">("success");
  const [popupMsg, setPopupMsg] = useState("");
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
          name: values.name,
          page: values.page,
          companyUrl: values.companyUrl,
          email: values.email,
          contact: values.contact,
          enquiry: values.enquiry,
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
    <div className="py-24 lg:py-40">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="flex flex-col gap-10">
            <HeadingTwo>FILL THE FORM to get a CALL BACK FROM US</HeadingTwo>
            <p>
              Katalyst Studio offers a range of design services that are
              tailored to meet the unique needs of each client Katalyst Studio
              offers a range of design services.
            </p>
          </div>
          <div>
            <Formik
              initialValues={{
                name: "",
                page: "CGI Page",
                companyUrl: "",
                email: "",
                contact: "",
                enquiry: "",
              }}
              validationSchema={validationSchema}
              onSubmit={sendEmail}
            >
              {({ isSubmitting }) => (
                <Form ref={formRef} className="flex flex-col gap-6">
                  <Field type="hidden" name="page" />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Field
                        type="text"
                        name="name"
                        className="h-14 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                        placeholder="Full Name"
                      />
                      <ErrorMessage
                        name="name"
                        component="p"
                        className="text-red-600 text-xs mt-2"
                      />
                    </div>
                    <div>
                      {" "}
                      <Field
                        type="text"
                        name="contact"
                        className="h-14 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                        placeholder="Phone Number"
                      />
                      <ErrorMessage
                        name="contact"
                        component="p"
                        className="text-red-600 text-xs mt-2"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Field
                        type="text"
                        name="companyUrl"
                        className="h-14 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                        placeholder="Company Name/URL"
                      />
                      <ErrorMessage
                        name="companyUrl"
                        component="p"
                        className="text-red-600 text-xs mt-2"
                      />
                    </div>
                    <div>
                      {" "}
                      <Field
                        type="text"
                        name="email"
                        className="h-14 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red-600 text-xs mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Field
                      as="textarea"
                      name="enquiry"
                      className="h-28 w-full relative outline-0 bg-[url(/input-bg.webp)] bg-cover border-0 rounded-md px-4 py-3 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                      placeholder="Notes "
                      id=""
                    ></Field>
                    <ErrorMessage
                      name="enquiry"
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
                      {isSending ? "Sending..." : "SEND INQUIRY"}
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
    </div>
  );
};

export default FillForm;
