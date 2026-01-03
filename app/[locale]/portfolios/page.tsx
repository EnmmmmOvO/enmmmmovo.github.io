import { Metadata } from "next";
import PortfolioList from '@/components/portfolios/PortfolioList';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("portfoliosPage") + t("metaTitle"),
    description: t("metaDesc")
  };
}

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
