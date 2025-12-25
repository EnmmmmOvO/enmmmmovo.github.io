import DetailsHero from "@/components/projects/DetailsHero";
import NextPrevNavigation from "@/components/projects/NextPrevNavigation";
import ParallaxDivider2 from "@/components/projects/ParallaxDivider2";
import Content from "@/components/projects/Content";
import { Metadata } from "next";
import { notFound } from 'next/dist/client/components/not-found';
import { type ProjectProps } from '@/types/project';
import ImageGalley from '@/components/projects/ImageGalley';
import ParallaxDivider from '@/components/projects/ParallaxDivider';
import { MetaTitle } from '@/data/metadata';

export async function generateMetadata({ params } : {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const mod = await import(`@/data/projects/${id}`);
    const project: ProjectProps = mod.default;

    return {
      title: project.detail.name + MetaTitle,
      description: "Technical portfolio of Jinghan Wang, focusing on applied machine learning, NLP systems, end-to-end encryption, and production-grade data platforms."
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
    const mod = await import(`@/data/projects/${id}`);
    const project : ProjectProps = mod.default

    return (
      <>
        <main
          id="mxd-page-content"
          className="mxd-page-content inner-page-content"
        >
          <DetailsHero detail={project.detail} links={project.links} />
          <ParallaxDivider2 file={project.img1} />
          <div className="mxd-section mxd-project overflow-hidden">
            <div className="mxd-container grid-container">
              {
                project.content.map((item, index) => {
                  if (item.type === 'content') {
                    return <Content key={index} detail={item} />
                  } else if (item.type === 'image-gallery') {
                    return <ImageGalley key={index} detail={item} />
                  } else if (item.type === 'image') {
                    return <ParallaxDivider key={index} file={item.src} />
                  } else {
                    return <></>;
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

