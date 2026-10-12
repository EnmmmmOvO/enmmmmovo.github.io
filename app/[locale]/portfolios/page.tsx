import { Metadata } from "next";
import PortfolioList from '@/components/portfolios/PortfolioList';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params } : {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("portfoliosPage") + t("metaTitle"),
    description: t("metaDesc")
  };
}

export default async function WorksMasonryPage({ params } : {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

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
