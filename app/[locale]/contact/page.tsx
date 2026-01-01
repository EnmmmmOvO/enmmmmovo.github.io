import ContactForm from "@/components/contact/ContactForm";
import PageTitle from "@/components/contact/PageTitle";
import { Metadata } from "next";
import { MetaDescription, MetaTitle } from '@/data/metadata';

export const metadata: Metadata = {
  title: "Contact" + MetaTitle,
  description: MetaDescription
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
