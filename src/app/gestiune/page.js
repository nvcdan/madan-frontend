import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import styles from './page.module.css'
import FooterSection from '../components/FooterSection';

export const metadata = {
  title: 'MADAN | Gestiune',
  description: '',
};

export default function Produs() {
  const breadcrumbPaths = [
    { href: '/', label: 'Acasă' },
    { href: '/gestiune', label: 'Gestiune' },
  ];

  return (
    <>
      <Navbar />
      <section className={styles.gestiuneSection}>
        <div className="container pt-4">
        <Breadcrumbs paths={breadcrumbPaths} />
          <div className={`row ${styles.heading}`}>
            <h2 className="handwritten display-2">Gestiune</h2>
            <h1 className="display-2">Planifică fiecare detaliu al evenimentului tău, fără efort</h1>
            <p>Structurat, modern, și flexibil - gestionarea evenimentului tău devine o plăcere.</p>
          </div>
          <div className={`row mt-5`}>
            <a className={`btn ${styles.actionButton}`}>Vezi DEMO</a>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-4">
          </div>
      </section>
      <FooterSection />
    </>
  );
}