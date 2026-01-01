import { Metadata } from "next";
import { MetaDescription, MetaTitle } from '@/data/metadata';
import NotFound from '@/components/common/NotFound';

export const metadata: Metadata = {
  title: "Page Not Found" + MetaTitle,
  description: MetaDescription,
};

export default function NotFoundPage() {
  return (
    <NotFound />
  );
}
