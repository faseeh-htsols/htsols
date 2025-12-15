import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
const data = [
  {
    name: "Phone No",
    para: "123 456 789",
    imageUrl: "",
    href: "",
  },
  {
    name: "Email:",
    para: "loremisum@gmail.com",
    imageUrl: "",
    href: "",
  },
  {
    name: "Book a Free 1hr Consultation With Us via Whatapp",
    imageUrl: "",
    href: "",
  },
];
const ContactUsDetails = () => {
  return (
    <div>
      <Container>
        <div>
          <HeadingTwo>Contact us details</HeadingTwo>
          <p>
            HT-Solutions provides you Website Designing, Web Development, SEO
            Services, Graphic Designing, Mobile Application Development Video
            Production
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ContactUsDetails;
