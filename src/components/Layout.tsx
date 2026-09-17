import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileBottomBar from './MobileBottomBar';
import FloatingWhatsApp from './FloatingWhatsApp';
import QuickContactModal from './QuickContactModal';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function TitleAndScrollSync() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);

    const isMs = language === 'ms';
    const brand = 'Kedai Besi Buruk';

    switch (pathname) {
      case '/':
        document.title = isMs
          ? 'Kedai Besi Buruk | Kutipan & Kitar Semula'
          : 'Kedai Besi Buruk | Scrap Collection & Recycling';
        break;
      case '/services':
        document.title = isMs
          ? `Apa Yang Kami Kutip | ${brand}`
          : `What We Collect | ${brand}`;
        break;
      case '/how-it-works':
        document.title = isMs
          ? `Cara Ia Berfungsi | ${brand}`
          : `How It Works | ${brand}`;
        break;
      case '/prices':
        document.title = isMs
          ? `Harga Barangan Lusuh | ${brand}`
          : `Scrap Prices | ${brand}`;
        break;
      case '/sell':
        document.title = isMs
          ? `Jual Barangan Lusuh | ${brand}`
          : `Sell Your Scrap | ${brand}`;
        break;
      case '/pickup':
        document.title = isMs
          ? `Minta Kutipan Barangan Lusuh | ${brand}`
          : `Request Scrap Pickup | ${brand}`;
        break;
      case '/about':
        document.title = isMs
          ? `Tentang Kami | ${brand}`
          : `About Us | ${brand}`;
        break;
      case '/faq':
        document.title = isMs
          ? `Soalan Lazim (FAQ) | ${brand}`
          : `FAQ | ${brand}`;
        break;
      case '/contact':
        document.title = isMs
          ? `Hubungi Kami | ${brand}`
          : `Contact Us | ${brand}`;
        break;
      case '/privacy-policy':
        document.title = `Privacy Policy | ${brand}`;
        break;
      case '/terms':
        document.title = `Terms of Service | ${brand}`;
        break;
      default:
        document.title = 'Kedai Besi Buruk | Scrap Collection & Recycling';
    }
  }, [pathname, language]);

  return null;
}

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900">
      <TitleAndScrollSync />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
      <QuickContactModal />
    </div>
  );
}
