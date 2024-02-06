import { Inter } from 'next/font/google';
import { ContextProvider } from '@/lib/helpers/ContextProvider.jsx';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  applicationName: 'Helios',
  title: 'Helios',
  description: 'An assistive journaling app',
  keywords: ['journal', 'diary', 'write'],
  creator: 'Estefan Hu',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
