import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Virtual Preparatory Academy of Oregon',
  description: 'Tuition-Free Oregon Public School — Real Teachers, Live Instruction. Helping students who are falling behind turn things around.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
