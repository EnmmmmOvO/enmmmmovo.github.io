import { Metadata } from "next";
import { MetaDescription, MetaTitle } from '@/data/metadata';
import PortfolioList from '@/components/portfolios/PortfolioList';

export const metadata: Metadata = {
  title: "Portfolio List" + MetaTitle,
  description: MetaDescription
};

export default function WorksMasonryPage() {
  return (
    <>
      <main
        id="mxd-page-content" className="mxd-page-content inner-page-content"
      >
        <PortfolioList />
      </main>
    </>
  );
}
