import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 560px)' }}>{children}</main>
      <Footer />
    </>
  );
};
