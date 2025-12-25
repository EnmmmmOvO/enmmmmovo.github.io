import { Metadata } from "next";
import Hero from '@/components/homes/Hero';
import heroStack from '@/data/herostack.json';
import Techstack from '@/components/homes/Techstack';
import toolstack from '@/data/toolstack.json';
import WorkExperiences from '@/components/homes/WorkExperiences';
import Education from '@/components/homes/Education';
import FeaturedProjects from '@/components/homes/FeaturedProjects';
import FeaturedPortfolios from '@/components/homes/FeaturedPortfolios';
import { MetaTitle } from '@/data/metadata';

export const metadata: Metadata = {
  title: "Jinghan Wang" + MetaTitle,
  description: "Technical portfolio of Jinghan Wang, focusing on applied machine learning, NLP systems, end-to-end encryption, and production-grade data platforms."
};

export default function Home() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content inner-page-content">
        <Hero />
        <Techstack techStack={heroStack} topic="Core Technologies & Tools"/>
        <FeaturedProjects />
        <FeaturedPortfolios />
        <WorkExperiences />
        <Techstack techStack={toolstack} topic="Tools I Use" direction="left" />
        <Education />
      </main>
    </>
  );
}
