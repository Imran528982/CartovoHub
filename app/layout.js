import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'CartovoHub — Affiliate Marketplace for Premium Products',
  description:
    'Discover curated tech and lifestyle products on CartovoHub. Shop the best deals or join our affiliate program to earn up to 25% commission on every referral.',
  keywords: 'affiliate, ecommerce, tech products, earn commissions, CartovoHub',
  openGraph: {
    title: 'CartovoHub — Affiliate Marketplace',
    description: 'Shop premium products & earn commissions with CartovoHub affiliate program.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
