import { Routes, Route } from 'react-router-dom';
import { SiteLayout } from './components/SiteLayout';
import { HomePage } from './pages/HomePage';
import { BookPage } from './pages/BookPage';
import { AboutPage } from './pages/AboutPage';
import { OrderPage } from './pages/OrderPage';
import { PressPage } from './pages/PressPage';
import { FaqPage } from './pages/FaqPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="book" element={<BookPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="press" element={<PressPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
