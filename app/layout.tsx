import { Metadata } from 'next';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard',
    default: 'Created by thangtruong',
  },
  description:
    'The official Next.js Learn Dashboard built with App Router - thangtruong1808@gmail.com.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* <body>{children}</body> */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
