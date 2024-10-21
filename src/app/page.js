import Navbar from '@/app/components/Navbar';
import HeroSection from '@/app/components/Homepage/HeroSection';
import ProductSection from '@/app/components/Homepage/ProductSection';
import PriceSection from '@/app/components/Homepage/PriceSection';
import FaqSection from '@/app/components/Homepage/FaqSection';
import TestimonialSection from './components/Homepage/TestimonialSection';
import ContactSection from './components/Homepage/ContactSection';
import FooterSection from './components/FooterSection';

export const metadata = {
  title: 'MADAN | Acasă',
  description: 'Bine ați venit la MADAN - Soluții digitale pentru evenimentul tău.',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="madanMain">
        <div className="container-fluid mb-5">
          <div className={`container d-flex`}>
            <div className="row">
              <div className="col-lg-6">
                <h1 className="text-justify">
                  Creează <b>invitații unice</b> și partajează momentele speciale prin <b>coduri QR</b> cu invitații tăi!
                </h1>
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-end text-end">
                <em>“Amintirile sunt comoara sufletului.” — Marcus Tullius Cicero</em>
              </div>
            </div>
          </div>
          <HeroSection />
        </div>
        <div className="container py-5 mt-5">
          <div className="row text-start">
            <div className="col">
              <h1>O suita de servicii pentru evenimentul tau</h1>
              <p>
                Fiecare eveniment pe care il avem este specific si special. Ne straduim sa aducem solutii ingenioase care sa se preteze pentru orice ocazie! 
              </p>
            </div>
          </div>
          <ProductSection />
        </div>
      </section>
      <PriceSection />
      <FaqSection />
      <TestimonialSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}