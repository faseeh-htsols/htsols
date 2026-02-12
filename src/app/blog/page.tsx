import Main from "@/views/blog/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "https://www.htsol.ca/blog",
  },
};

function Page() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default Page;
