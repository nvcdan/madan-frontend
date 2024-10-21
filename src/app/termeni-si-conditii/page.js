import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Homepage/Breadcrumbs';
import FooterSection from '../components/FooterSection';
import styles from './page.module.css';

export const metadata = {
  title: 'MADAN | Termeni și condiții',
  description: 'Termeni si conditii.',
};

export default function TermeniSiConditii() {
  const breadcrumbPaths = [
    { href: '/', label: 'Acasă' },
    { href: '/termeni-si-conditii', label: 'Termeni și condiții' },
  ];

  return (
    <>
      <Navbar />
      <div className="container mt-5 py-5">
        <Breadcrumbs paths={breadcrumbPaths} />
        <div className={styles.legalContainer}>
          <h1 className="my-4 handwritten display-1">Termeni și Condiții</h1>
          <hr />

          <h2 className="handwritten">1. Introducere</h2>
          <p>
            Acești termeni și condiții guvernează utilizarea platformei noastre de invitații online, momente QR și gestionare a evenimentelor. Prin utilizarea platformei, sunteți de acord cu acești termeni. Dacă nu sunteți de acord, vă rugăm să nu utilizați serviciile noastre.
          </p>

          <h2 className="handwritten">2. Servicii Oferite</h2>
          <p>Platforma noastră permite organizatorilor de evenimente să:</p>
          <ul>
            <li>Creeze și distribuie invitații online pentru evenimente.</li>
            <li>Încarce date despre participanți pentru gestionarea evenimentului.</li>
            <li>Acceseze și partajeze momente QR, unde utilizatorii pot încărca poze și filmări.</li>
          </ul>

          <h2 className="handwritten">3. Utilizarea Platformei</h2>
          <ul>
            <li>
              Organizatorii sunt responsabili de exactitatea și legalitatea datelor încărcate despre participanți.
            </li>
            <li>
              Utilizatorii care încarcă momente QR sunt responsabili de conținutul furnizat și garantează că au toate drepturile necesare asupra materialelor încărcate.
            </li>
            <li>
              Platforma noastră își rezervă dreptul de a șterge orice conținut care încalcă acești termeni sau legile în vigoare.
            </li>
          </ul>

          <h2 className="handwritten">4. Drepturile și Obligațiile Utilizatorilor</h2>
          <ul>
            <li>
              Utilizatorii trebuie să utilizeze platforma în conformitate cu legislația aplicabilă și să respecte drepturile altor utilizatori.
            </li>
            <li>
              Utilizatorii sunt de acord să nu încarce conținut ilegal, ofensator sau care încalcă drepturile de proprietate intelectuală.
            </li>
          </ul>

          <h2 className="handwritten">5. Limitarea Răspunderii</h2>
          <p>
            Platforma noastră nu este responsabilă pentru daunele directe, indirecte sau incidentale rezultate din utilizarea sau imposibilitatea utilizării serviciilor noastre.
          </p>
          </div>
      </div>
      <FooterSection />
    </>
  );
}