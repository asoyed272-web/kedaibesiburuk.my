import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import Prices from './pages/Prices';
import SellScrap from './pages/SellScrap';
import RequestPickup from './pages/RequestPickup';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/Privacy';
import Terms from './pages/Terms';
import { LanguageProvider } from './context/LanguageContext';
import { QuickContactProvider } from './context/QuickContactContext';

export default function App() {
  return (
    <LanguageProvider>
      <QuickContactProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/sell" element={<SellScrap />} />
            <Route path="/pickup" element={<RequestPickup />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Layout>
      </QuickContactProvider>
    </LanguageProvider>
  );
}



