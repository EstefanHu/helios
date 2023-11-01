import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  applicationName: 'Helios',
  title: 'Helios',
  description: 'An assistive journaling app',
  keywords: ['journal', 'write', 'online'],
  creator: 'Estefan Hu',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
