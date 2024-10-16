import Navbar from '@/app/components/Navbar';
import HeroSection from '@/app/components/HeroSection';
import ProductSection from '@/app/components/ProductSection';

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
        <div className="container pt-5 pb-5 mt-5">
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

      {/* CALCULATOR PREȚ (QR + INVITAȚII) */}
      <section className="calculator-pret my-5">
        <div className="container">
          <h2 className="text-center">Calculator Preț</h2>
          <p className="text-center">
            Calculează costul pentru invitațiile și codurile QR personalizate.
          </p>
          <form className="mt-4">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="numInvitatii" className="form-label">
                  Număr Invitații
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="numInvitatii"
                  placeholder="Introduceți numărul de invitații"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="tipQR" className="form-label">
                  Tip Cod QR
                </label>
                <select className="form-select" id="tipQR">
                  <option value="static">Static</option>
                  <option value="dinamic">Dinamic</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Calculează
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq my-5 bg-light">
        <div className="container">
          <h2 className="text-center">Întrebări Frecvente</h2>
          <div className="accordion mt-4" id="faqAccordion">
            {/* FAQ Item 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeadingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseOne"
                  aria-expanded="true"
                  aria-controls="faqCollapseOne"
                >
                  Cum pot comanda invitații personalizate?
                </button>
              </h2>
              <div
                id="faqCollapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="faqHeadingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Puteți comanda invitații personalizate prin intermediul site-ului nostru, completând formularul de comandă.
                </div>
              </div>
            </div>
            {/* FAQ Item 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeadingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseTwo"
                  aria-expanded="false"
                  aria-controls="faqCollapseTwo"
                >
                  Ce este un cod QR dinamic?
                </button>
              </h2>
              <div
                id="faqCollapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeadingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Un cod QR dinamic poate fi actualizat cu noi informații fără a fi necesară reimprimarea codului.
                </div>
              </div>
            </div>
            {/* Adăugați mai multe întrebări după nevoie */}
          </div>
        </div>
      </section>

      {/* TESTIMONIALE */}
      <section className="testimoniale my-5">
        <div className="container">
          <h2 className="text-center">Testimoniale</h2>
          <div className="row mt-4">
            {/* Testimonial 1 */}
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p>"Serviciile MADAN au transformat evenimentul nostru într-unul de neuitat!"</p>
                  <footer className="blockquote-footer">
                    Maria Popescu
                  </footer>
                </blockquote>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p>"Recomand cu încredere pentru profesionalism și calitate."</p>
                  <footer className="blockquote-footer">
                    Ion Ionescu
                  </footer>
                </blockquote>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p>"Codurile QR au adăugat o notă modernă invitațiilor noastre."</p>
                  <footer className="blockquote-footer">
                    Elena Vasilescu
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}