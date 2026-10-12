import DetailsHero from "@/components/common/DetailsHero";
import NextPrevNavigation from "@/components/common/NextPrevNavigation";
import { Metadata } from "next";
import { notFound } from 'next/dist/client/components/not-found';
import { PortfolioProps } from '@/types/portfolio';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PortfolioIntl } from '@/config';
import portfolios from '@/data/portfolios';

export function generateStaticParams() {
  return portfolios.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params } : {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const tData = await getTranslations({ locale, namespace: PortfolioIntl(id) });
  const t = await getTranslations({ locale });

  if (!tData.has("title")) {
    return {
      title: t("pageNotFound") + t("metaTitle"),
      description: t("metaDesc")
    };
  }

  return {
    title: tData("title") + t("metaTitle"),
    description: t("metaDesc")
  };
}

export default async function ProjectDetailsPage({ params } : {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  try {
    const mod = await import(`@/data/portfolios/${id}`);
    const portfolio : PortfolioProps = mod.default;

    return (
      <>
        <main
          id="mxd-page-content"
          className="mxd-page-content inner-page-content"
        >
          <DetailsHero
            intlKey={PortfolioIntl(portfolio.key)}
            links={portfolio.links}
            ignoreDetails={portfolio.ignoreDetails}
            portfolio
          />
          <div className="mxd-section mxd-project overflow-hidden">
            <div className="mxd-container grid-container">
              <NextPrevNavigation related={portfolio.related} portfolio />
            </div>
          </div>
        </main>
      </>
    );
  } catch {
    notFound();
  }
}

