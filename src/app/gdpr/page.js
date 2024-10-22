import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import FooterSection from '../components/FooterSection';
import styles from './page.module.css';
import { contactInfo } from '@/app/data/contactInfo';

export const metadata = {
  title: 'MADAN | Politica de confidentialitate',
  description: 'Politica de confidentialitate.',
};

export default function Gdpr() {
  const breadcrumbPaths = [
    { href: '/', label: 'Acasă' },
    { href: '/gdpr', label: 'GDPR' },
  ];

  return (
    <>
      <Navbar />
      <div className="container mt-5 py-5">
        <Breadcrumbs paths={breadcrumbPaths} />
        <div className={styles.legalContainer}>
          <h1 className="my-4 handwritten display-1">Politică de Confidențialitate (GDPR)</h1>
          <hr />

          <h2 className="handwritten">1. Introducere</h2>
          <p>
            Această politică explică modul în care colectăm, utilizăm și protejăm datele personale ale utilizatorilor conform Regulamentului General privind Protecția Datelor (GDPR).
          </p>

          <h2 className="handwritten">2. Ce date colectăm</h2>
          <ul>
            <li>
              <strong>Date furnizate de organizatori:</strong> nume, e-mail, informații de contact și alte detalii necesare pentru gestionarea evenimentului.
            </li>
            <li>
              <strong>Date încărcate de utilizatori prin momente QR:</strong> fotografii, videoclipuri și orice alte informații vizuale sau textuale.
            </li>
          </ul>

          <h2 className="handwritten">3. Cum utilizăm datele</h2>
          <ul>
            <li>
              Datele participanților sunt utilizate exclusiv pentru gestionarea și organizarea evenimentelor.
            </li>
            <li>
              Fotografiile și videoclipurile încărcate sunt stocate pe platformă și sunt vizibile pentru alți utilizatori în funcție de setările de confidențialitate ale evenimentului.
            </li>
          </ul>

          <h2 className="handwritten">4. Drepturile utilizatorilor</h2>
          <p>Conform GDPR, utilizatorii au dreptul de a:</p>
          <ul>
            <li>Accesa datele personale pe care le deținem despre ei.</li>
            <li>Solicita ștergerea datelor lor.</li>
            <li>Solicita rectificarea datelor incorecte.</li>
            <li>Retrage consimțământul privind prelucrarea datelor în orice moment.</li>
          </ul>

          <h2 className="handwritten">5. Securitatea Datelor</h2>
          <p>
            Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele personale împotriva accesului neautorizat, pierderii sau distrugerii.
          </p>

          <h2 className="handwritten">6. Contact</h2>
          <p>
            Pentru orice întrebări privind datele personale, utilizatorii pot contacta echipa noastră la <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
          </p>
        </div>
      </div>
      <FooterSection />
    </>
  );
}