import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';

const inter = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  title: 'Biswajit Panda | Full Stack Developer (AI)',
  description:
    'Portfolio of Biswajit Panda - Next.js, React, Node, Express, PostgreSQL, Redux, JWT',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${outfit.variable}`}>
      <head />
      <body
        className={inter.className}
        style={{ '--navH': '64px' }}
      >
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
