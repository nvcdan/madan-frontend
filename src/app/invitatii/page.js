import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import styles from './page.module.css';
import FooterSection from '../components/FooterSection';

export const metadata = {
  title: 'MADAN | Invitații',
  description: '',
};

export default function Produs() {
  const breadcrumbPaths = [
    { href: '/', label: 'Acasă' },
    { href: '/invitatii', label: 'Invitații' },
  ];

  return (
    <>
      <Navbar />
      <section className={styles.inviteSection}>
        <div className="container pt-4">
          <Breadcrumbs paths={breadcrumbPaths} />
          <div className={`row ${styles.heading}`}>
            <h2 className="handwritten display-2">Invitații</h2>
            <h1 className="display-2">Creează și personalizează invitații online în câteva minute</h1>
            <p>Simplu, sigur și eficient - momentele tale, centralizate digital.</p>
          </div>
          <div className={`row mt-5`}>
            <a className={`btn ${styles.actionButton}`}>Inregistreaza-te</a>
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