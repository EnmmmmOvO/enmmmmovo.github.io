import DetailsHero from "@/components/common/DetailsHero";
import NextPrevNavigation from "@/components/common/NextPrevNavigation";
import ParallaxDivider from "@/components/projects/ParallaxDivider";
import Content from "@/components/projects/Content";
import { Metadata } from "next";
import { notFound } from 'next/dist/client/components/not-found';
import { type ProjectProps } from '@/types/project';
import ImageGalley from '@/components/projects/ImageGalley';
import ImageLarge from '@/components/projects/ImageLarge';
import { getTranslations } from 'next-intl/server';
import { ProjectIntl } from '@/config';

export async function generateMetadata({ params } : {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const tData = await getTranslations(ProjectIntl(id));
  const t = await getTranslations();

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
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const mod = await import(`@/data/projects/${id}`);
    const project : ProjectProps = mod.default
    const intlKey = ProjectIntl(project.key);

    return (
      <>
        <main
          id="mxd-page-content"
          className="mxd-page-content inner-page-content"
        >
          <DetailsHero intlKey={intlKey} ignoreDetails={project.ignoreDetails} links={project.links} />
          {project.img1 && <ParallaxDivider file={project.img1}/>}
          <div className="mxd-section mxd-project overflow-hidden">
            <div className="mxd-container grid-container">
              {
                project.content.map((item, index) => {
                  if (item.type === 'content' || item.type === 'highlight-content') {
                    return <Content key={index} intlKey={intlKey} detail={item} />
                  } else if (item.type === 'image-gallery') {
                    return <ImageGalley key={index} detail={item} intlKey={intlKey} />
                  } else {
                    return <ImageLarge key={index} detail={item} intlKey={intlKey} />
                  }
                })
              }
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

