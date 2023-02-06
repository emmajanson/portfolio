import '../styles/globals.css';
import Navbar from '@/componentscomponents/Navbar';
import Footer from '@/componentscomponents/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
