import PortfolioMasonry from "@/components/projects/PortfolioMasonry";
import { Metadata } from "next";
import { MetaTitle } from '@/data/metadata';

export const metadata: Metadata = {
  title: "Project List" + MetaTitle,
  description: "Technical portfolio of Jinghan Wang, focusing on applied machine learning, NLP systems, end-to-end encryption, and production-grade data platforms."
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
