import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Homepage/Breadcrumbs';
import FooterSection from '../components/FooterSection';
import styles from './page.module.css';
import { contactInfo } from '@/app/data/contactInfo';

export const metadata = {
  title: 'MADAN | Politica de Cookie-uri',
  description: 'Descoperiți informații despre utilizarea cookie-urilor pe platforma MADAN.',
};

export default function PoliticaCookie() {
  const breadcrumbPaths = [
    { href: '/', label: 'Acasă' },
    { href: '/cookie', label: 'Politica de Cookie-uri' },
  ];

  return (
    <>
      <Navbar />
      <div className="container mt-5 py-5">
        <Breadcrumbs paths={breadcrumbPaths} />
        <div className={styles.legalContainer}>
          <h1 className="my-4 handwritten display-1">Politica de Cookie-uri</h1>
          <hr />

          <h2 className="handwritten">1. Ce sunt cookie-urile?</h2>
          <p>
            Cookie-urile sunt fișiere mici salvate pe dispozitivul utilizatorului pentru a îmbunătăți experiența de navigare pe platforma noastră.
          </p>

          <h2 className="handwritten">2. Tipuri de cookie-uri utilizate</h2>
          <ul>
            <li>
              <strong>Cookie-uri esențiale:</strong> Necesare pentru funcționarea corectă a platformei.
            </li>
            <li>
              <strong>Cookie-uri de performanță:</strong> Utilizate pentru a analiza utilizarea platformei și pentru a îmbunătăți serviciile noastre.
            </li>
            <li>
              <strong>Cookie-uri de funcționalitate:</strong> Salvează preferințele utilizatorilor pentru a oferi o experiență personalizată.
            </li>
          </ul>

          <h2 className="handwritten">3. Gestionarea și ștergerea cookie-urilor</h2>
          <p>
            Utilizatorii pot gestiona și șterge cookie-urile din setările browser-ului lor. Refuzarea cookie-urilor esențiale poate afecta funcționarea corectă a platformei.
          </p>

          <h2 className="handwritten">4. Contact</h2>
          <p>
            Pentru orice întrebări legate de politica noastră de cookie-uri, utilizatorii pot contacta echipa noastră la <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
          </p>
        </div>
      </div>
      <FooterSection />
    </>
  );
}