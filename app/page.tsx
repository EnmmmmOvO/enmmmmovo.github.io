import { Metadata } from "next";
import Hero from '@/components/other-pages/about/Hero';
import heroStack from '@/data/herostack.json';
import Techstack from '@/components/other-pages/about/Techstack';
import toolstack from '@/data/toolstack.json';
import Experiences from '@/components/common/Experiences';
import Education from '@/components/common/Education';
import Footer1 from '@/components/footers/Footer1';
import Services from '@/components/homes/home-personal-portfolio/Services';
import Blogs from '@/components/common/Blogs';

export const metadata: Metadata = {
  title: "WillCode | Jinghan Wang",
  description: "Technical portfolio of Jinghan Wang, focusing on applied machine learning, NLP systems, end-to-end encryption, and production-grade data platforms."
};

export default function Home() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content inner-page-content">
        <Hero />
        <Techstack techStack={heroStack} topic="Core Technologies & Tools"/>
        <Services />
        <Blogs title="Selected Writing" />
        <Experiences />
        <Techstack techStack={toolstack} topic="Tools I Use" direction="left" />
        <Education />
      </main>
    </>
  );
}
