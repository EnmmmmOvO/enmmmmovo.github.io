// app/[locale]/[...notFound]/page.tsx
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import NotFoundPage from '@/components/common/NotFound';

// Exported as /{locale}/404.html, which Cloudflare serves for missing paths under each locale.
export function generateStaticParams() {
  return [{ notFound: ['404'] }];
}

export async function generateMetadata({ params } : {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("pageNotFound") + t("metaTitle"),
    description: t("metaDesc")
  };
}

export default async function NotFound({ params } : {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <NotFoundPage />;
}
