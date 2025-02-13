import Header from '../shared/navbar/Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mx-auto min-h-screen max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Header />
      {children}
      <Footer />
    </section>
  );
};
export default Layout;
