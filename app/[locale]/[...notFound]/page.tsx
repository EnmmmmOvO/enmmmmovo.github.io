// app/[locale]/[...notFound]/page.tsx
import { Metadata } from "next";
import { MetaDescription, MetaTitle } from '@/data/metadata';
import { notFound } from 'next/dist/client/components/not-found';

export const metadata: Metadata = {
  title: "Page Not Found" + MetaTitle,
  description: MetaDescription,
};

export default function NotFoundPage() {
  notFound()
}
