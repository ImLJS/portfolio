import '@/styles/globals.css';

import Layout from '@/components/Layout';
import { type Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-spaceGrotesk',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Digital Garden | ImLJS',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} h-full antialiased`}
      >
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
