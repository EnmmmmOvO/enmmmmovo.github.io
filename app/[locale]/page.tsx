import { Metadata } from "next";
import Hero from '@/components/homes/Hero';
import heroStack from '@/data/herostack';
import Techstack from '@/components/homes/Techstack';
import toolstack from '@/data/toolstack';
import WorkExperiences from '@/components/homes/WorkExperiences';
import Education from '@/components/homes/Education';
import FeaturedProjects from '@/components/homes/FeaturedProjects';
import FeaturedPortfolios from '@/components/homes/FeaturedPortfolios';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params } : {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("homePage") + t("metaTitle"),
    description: t("metaDesc")
  };
}

export default async function Home({ params } : {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content inner-page-content">
        <Hero />
        <Techstack techStack={heroStack} topic={t("coreTechTitle")}/>
        <FeaturedProjects />
        <FeaturedPortfolios />
        <WorkExperiences />
        <Techstack techStack={toolstack} topic={t("toolsIUse")} direction="left" />
        <Education />
      </main>
    </>
  );
}
