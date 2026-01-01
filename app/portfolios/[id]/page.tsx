import DetailsHero from "@/components/common/DetailsHero";
import NextPrevNavigation from "@/components/common/NextPrevNavigation";
import { Metadata } from "next";
import { notFound } from 'next/dist/client/components/not-found';
import { MetaDescription, MetaTitle } from '@/data/metadata';
import { PortfolioProps } from '@/types/portfolio';

export async function generateMetadata({ params } : {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const mod = await import(`@/data/portfolios/${id}`);
    const project: PortfolioProps = mod.default;

    return {
      title: project.detail.name + MetaTitle,
      description: MetaDescription
    };
  } catch {
    return { title: "Project Not Found" + MetaTitle };
  }
}

export default async function ProjectDetailsPage({ params } : {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const mod = await import(`@/data/portfolios/${id}`);
    const project : PortfolioProps = mod.default

    return (
      <>
        <main
          id="mxd-page-content"
          className="mxd-page-content inner-page-content"
        >
          <DetailsHero detail={project.detail} links={project.links} portfolio />
          <div className="mxd-section mxd-project overflow-hidden">
            <div className="mxd-container grid-container">
              <NextPrevNavigation related={project.related} />
            </div>
          </div>
        </main>
      </>
    );
  } catch {
    notFound();
  }
}

