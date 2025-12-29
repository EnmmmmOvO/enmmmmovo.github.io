import ContactForm from "@/components/contact/ContactForm";
import PageTitle from "@/components/contact/PageTitle";
import { Metadata } from "next";
import { MetaTitle } from '@/data/metadata';

export const metadata: Metadata = {
  title:
    "Contact" + MetaTitle,
  description:
    "Technical portfolio of Jinghan Wang, focusing on applied machine learning, NLP systems, end-to-end encryption, and production-grade data platforms."
};

export default function ContactPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <PageTitle />
        <ContactForm />
      </main>
    </>
  );
}
