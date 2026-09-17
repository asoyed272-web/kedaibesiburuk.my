import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileBottomBar from './MobileBottomBar';
import FloatingWhatsApp from './FloatingWhatsApp';
import QuickContactModal from './QuickContactModal';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900">
      <ScrollToTop />
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
