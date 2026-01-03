import ContactForm from "@/components/contact/ContactForm";
import PageTitle from "@/components/contact/PageTitle";
import { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("contactPage") + t("metaTitle"),
    description: t("metaDesc")
  };
}

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
