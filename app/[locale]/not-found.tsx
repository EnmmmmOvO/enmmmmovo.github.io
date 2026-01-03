// app/[locale]/not-found.tsx
import { Metadata } from "next";
import { getTranslations } from 'next-intl/server';
import NotFoundPage from '@/components/common/NotFound';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("pageNotFound") + t("metaTitle"),
    description: t("metaDesc")
  };
}

export default function NotFound() {
  return <NotFoundPage />;
}
