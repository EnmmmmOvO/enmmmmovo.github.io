import PortfolioMasonry from "@/components/portfolios/PortfolioMasonry";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Work Masonry || Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
  description:
    "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function WorksMasonryPage() {
  return (
    <>
      <main
        id="mxd-page-content" className="mxd-page-content inner-page-content"
      >
        <PortfolioMasonry />
      </main>
    </>
  );
}
