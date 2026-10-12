// app/layout.tsx
import { ReactNode } from 'react';

// <html> and <body> are rendered by app/[locale]/layout.tsx, app/page.tsx and app/not-found.tsx.
export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return children;
}
