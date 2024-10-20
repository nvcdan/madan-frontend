import Navbar from '@/app/components/Navbar';
import HeroSection from '@/app/components/HeroSection';
import ProductSection from '@/app/components/ProductSection';
import PriceSection from '@/app/components/PriceSection';
import FaqSection from '@/app/components/FaqSection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
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

      {/* CONTACT */}
      <section className="contact my-5 bg-light">
        <div className="container">
          <h2 className="text-center">Contact</h2>
          <p className="text-center">
            Pentru mai multe informații, nu ezitați să ne contactați.
          </p>
          <form className="mt-4">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="nume" className="form-label">
                  Nume
                </label>
                <input type="text" className="form-control" id="nume" placeholder="Introduceți numele dvs." />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" placeholder="Introduceți email-ul dvs." />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="mesaj" className="form-label">
                Mesaj
              </label>
              <textarea className="form-control" id="mesaj" rows="4" placeholder="Scrieți mesajul dvs. aici"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Trimite
            </button>
          </form>
        </div>
      </section>
      <FooterSection />
    </>
  );
}