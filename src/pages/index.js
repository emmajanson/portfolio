import Head from 'next/head';
import { Inter } from '@next/font/google';
import Hero from '../components/Hero';
import About from '@/componentscomponents/About';
import Experience from '@/componentscomponents/Experience';
import Certificates from '@/componentscomponents/Certificates';
import Portfolio from '@/componentscomponents/Portfolio';
import Testimonials from '@/componentscomponents/Testimonials';
import Contact from '@/componentscomponents/Contact';
import { motion as m } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Emma Janson - Frontend Developer</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="Home">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        >
          <Hero />
          <About />
          <Experience />
          <Certificates />
          <Portfolio />
          {/* <Testimonials /> */}
          <Contact />
        </m.div>
      </main>
    </>
  );
}
