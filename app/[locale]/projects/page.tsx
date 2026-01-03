import ProjectsMasonry from "@/components/projects/ProjectsMasonry";
import { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("projectsPage") + t("metaTitle"),
    description: t("metaDesc")
  };
}


export default function WorksMasonryPage() {
  return (
    <>
      <main
        id="mxd-page-content" className="mxd-page-content inner-page-content"
      >
        <ProjectsMasonry />
      </main>
    </>
  );
}
