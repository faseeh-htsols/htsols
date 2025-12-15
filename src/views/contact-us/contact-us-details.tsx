import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
const data = [
  {
    name: "Phone No",
    para: "123 456 789",
    imageUrl: "/call-svg.svg",
    href: "tel:123 456 789",
  },
  {
    name: "Email:",
    para: "loremisum@gmail.com",
    imageUrl: "/email-svg.svg",
    href: "mailto:loremisum@gmail.com",
  },
  {
    name: "Book a Free 1hr Consultation With Us via Whatapp",
    imageUrl: "/book-consultation-svg.svg",
    href: "https://wa.me/552196312XXXX",
  },
];
const ContactUsDetails = () => {
  return (
    <div className="bg-black text-white pb-10">
      <Container>
        <div className="flex flex-col gap-5 mb-7">
          <HeadingTwo className="text-center">Contact us details</HeadingTwo>
          <p className="text-xl text-center">
            HT-Solutions provides you Website Designing, Web Development, SEO
            Services, Graphic Designing,
            <br /> Mobile Application Development Video Production
          </p>
        </div>
        <div className="grid grid-cols-3 gap-9 py-8">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex  gap-2 bg-primary py-6 px-4 rounded-2xl"
            >
              <div className="shrink-0">
                <Image
                  src={item.imageUrl}
                  width={55}
                  height={55}
                  className="w-[55px] h-[55px] "
                  alt={`${item.name} icon`}
                />
              </div>
              <div>
                {!item.para ? (
                  <h3 className="text-lg font-semibold">
                    <a href={item.href}>{item.name}</a>
                  </h3>
                ) : (
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                )}
                {item.para && <a href={item.href}>{item.para}</a>}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ContactUsDetails;
