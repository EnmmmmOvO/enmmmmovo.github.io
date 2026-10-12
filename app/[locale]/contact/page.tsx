import ContactForm from "@/components/contact/ContactForm";
import PageTitle from "@/components/contact/PageTitle";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params } : {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("contactPage") + t("metaTitle"),
    description: t("metaDesc")
  };
}

export default async function ContactPage({ params } : {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

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
