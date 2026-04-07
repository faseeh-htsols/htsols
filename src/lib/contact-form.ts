import * as Yup from "yup";

export const contactSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),

  page: Yup.string()
    .trim()
    .min(2, "Page name must be at least 2 characters")
    .required("Page is required"),

  lastName: Yup.string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),

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

export type ContactFormValues = Yup.InferType<typeof contactSchema>;