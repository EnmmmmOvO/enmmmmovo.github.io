import ProjectsMasonry from "@/components/projects/ProjectsMasonry";
import { Metadata } from "next";
import { MetaDescription, MetaTitle } from '@/data/metadata';

export const metadata: Metadata = {
  title: "Project List" + MetaTitle,
  description: MetaDescription
};

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
