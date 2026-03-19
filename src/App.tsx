import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileCTA from './components/layout/MobileCTA';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import HairRemovalPage from './pages/menu/HairRemovalPage';
import BodyPage from './pages/menu/BodyPage';
import FacialPage from './pages/menu/FacialPage';
import MachinePage from './pages/menu/MachinePage';
import HeadPage from './pages/menu/HeadPage';
import BridalPage from './pages/menu/BridalPage';
import QAPage from './pages/QAPage';
import SalonPage from './pages/SalonPage';
import VoicePage from './pages/VoicePage';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToTop />
      <main className={`flex-1 ${isHome ? '' : 'pt-16 md:pt-20'}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/hair-removal" element={<HairRemovalPage />} />
          <Route path="/menu/body" element={<BodyPage />} />
          <Route path="/menu/facial" element={<FacialPage />} />
          <Route path="/menu/machine" element={<MachinePage />} />
          <Route path="/menu/head" element={<HeadPage />} />
          <Route path="/menu/bridal" element={<BridalPage />} />
          <Route path="/qa" element={<QAPage />} />
          <Route path="/salon" element={<SalonPage />} />
          <Route path="/voice" element={<VoicePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
