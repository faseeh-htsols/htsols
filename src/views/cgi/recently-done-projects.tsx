import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
const data = [
  {
    heading: "Lorem Ipsum",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    href: "/cgi1.mp4",
  },
  {
    heading: "Lorem Ipsum",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    href: "/cgi1.mp4",
  },
  {
    heading: "Lorem Ipsum",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    href: "/cgi1.mp4",
  },
  {
    heading: "Lorem Ipsum",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    href: "/cgi1.mp4",
  },
];
const RecentlyDoneProjects = () => {
  return (
    <div className="py-14">
      <Container>
        <div className="mb-10">
          <HeadingTwo className="text-center">
            Recently done projects
          </HeadingTwo>{" "}
        </div>
      </Container>
      <div className="bg-[url(/cgi/reccently-done-bg.png)]">
        <Container>
          <div className="max-w-[300px] mx-auto">
            <Image
              width={300}
              height={1000}
              src={"/cgi/reccently-done.png"}
              alt="image"
              className="w-full h-[450px] object-contain object-center"
            />
          </div>
        </Container>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default RecentlyDoneProjects;
