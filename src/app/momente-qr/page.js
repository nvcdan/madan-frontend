import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import FooterSection from '../components/FooterSection';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'MADAN | Momente QR',
  description: 'Activează momente interactive pentru evenimentele tale',
};

export default function Produs() {
  const breadcrumbPaths = [
    { href: '/', label: 'Acasă' },
    { href: '/momente-qr', label: 'Momente QR' },
  ];

  return (
    <>
      <Navbar />
      <section className={styles.momenteQrSection}>
        <div className="container py-4">
          <Breadcrumbs paths={breadcrumbPaths} />
          <div className={`row ${styles.heading}`}>
            <h2 className="handwritten display-2">Momente QR</h2>
            <h1 className="display-2">Activează momente interactive pentru evenimentele tale</h1>
            <p>Rapid, elegant, și accesibil—invitații digitale la un click distanță.</p>
          </div>
          <div className={`row my-5`}>
            <a className={`btn ${styles.actionButton}`}>Descoperă</a>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-7 d-flex text-center flex-column justify-content-center">
              <h2 className="display-4">Descoperă <b>Momente QR</b></h2>
              <p>
                Oferă invitaților tăi posibilitatea de a captura și împărtăși instantaneu cele mai frumoase amintiri printr-o simplă scanare de cod QR. 
              </p>
            </div>
            <div className="col-lg-5 text-center">
              <div className={`grainy-effect ${styles.qrCard}`}>
                <Image
                  src="/images/qr.png" 
                  alt="QR code example"
                  width={1000}
                  height={2000}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}