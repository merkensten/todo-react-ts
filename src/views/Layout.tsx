import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
