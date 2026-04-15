import type { Metadata } from "next";
import StaffAugmentationMain from "@/views/staff-augmentation/main";

export const metadata: Metadata = {
  title: "Staff Augmentation Partner | HTSOL Inc.",
  description:
    "Scale your agency with a staff augmentation partner service.",
  alternates: {
    canonical: "https://www.htsol.ca/services/staff-augmentation",
  },
};

const WhiteLabelPage = () => {
  return <StaffAugmentationMain />;
};

export default WhiteLabelPage;
