import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mx-auto flex min-h-screen max-w-3xl flex-col px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Header />
      {children}
      <Footer />
    </section>
  );
};
export default Layout;
