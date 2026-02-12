import CtoMain from "@/views/cto/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "https://www.htsol.ca/cto",
  },
};
function Page() {
  return (
    <div>
      <CtoMain />
    </div>
  );
}

export default Page;
