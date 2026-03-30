import Main from "@/views/mississauga/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "",
  description:
    "",
  alternates: {
    canonical: "https://www.htsol.ca/mississauga",
  },
};
export default function LocationPage() {
  return (
    <>
      <Main />
    </>
  );
}
