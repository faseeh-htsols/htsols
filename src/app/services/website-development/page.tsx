import WebDevMain from "@/views/web-dev/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "https://www.htsol.ca/services/website-development",
  },
};

const WebDevPage = () => {
  return (
    <>
      <WebDevMain />
    </>
  );
};

export default WebDevPage;
