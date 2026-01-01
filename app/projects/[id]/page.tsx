import DetailsHero from "@/components/common/DetailsHero";
import NextPrevNavigation from "@/components/common/NextPrevNavigation";
import ParallaxDivider from "@/components/projects/ParallaxDivider";
import Content from "@/components/projects/Content";
import { Metadata } from "next";
import { notFound } from 'next/dist/client/components/not-found';
import { type ProjectProps } from '@/types/project';
import ImageGalley from '@/components/projects/ImageGalley';
import { MetaDescription, MetaTitle } from '@/data/metadata';
import ImageLarge from '@/components/projects/ImageLarge';

export async function generateMetadata({ params } : {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const mod = await import(`@/data/projects/${id}`);
    const project: ProjectProps = mod.default;

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
    const mod = await import(`@/data/projects/${id}`);
    const project : ProjectProps = mod.default

    return (
      <>
        <main
          id="mxd-page-content"
          className="mxd-page-content inner-page-content"
        >
          <DetailsHero detail={project.detail} links={project.links} />
          {project.img1 && <ParallaxDivider file={project.img1}/>}
          <div className="mxd-section mxd-project overflow-hidden">
            <div className="mxd-container grid-container">
              {
                project.content.map((item, index) => {
                  if (item.type === 'content') {
                    return <Content key={index} detail={item} />
                  } else if (item.type === 'image-gallery') {
                    return <ImageGalley key={index} detail={item} />
                  } else {
                    return <ImageLarge key={index} detail={item} />
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

