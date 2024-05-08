// style global
import '../styles/globals.css';

// fonts
import { Sora } from 'next/font/google';

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// components
import Nav from '@/components/Nav';
import Header from '../components/Header'
import TopLeftimg from '../components/TopLeftImg'

export default function Layout({ children }) {
  return (
    <html>
      <body >
        <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable}
  font-sora relative`}>

          <TopLeftimg />
          <Nav />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
};


