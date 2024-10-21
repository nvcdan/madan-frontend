// 'use client' directive for Next.js
'use client';

import styles from './FooterSection.module.css';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { contactInfo } from '@/app/data/contactInfo';

const FooterSection = () => {
  return (
    <footer className={styles.footerSection}>
      <div className="container">
        <div className={`row align-items-center ${styles.topSection}`}>
          <div className="col-md-4 col-12">
            <div className={styles.logoSection}>
              <span className={styles.logo}>MD</span>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <nav className={styles.navigation}>
              <ul className={styles.navList}>
                <li><a href="/invitatii">Invitații</a></li>
                <li><a href="/momenteqr">Momente QR</a></li>
                <li><a href="/gestiune">Gestiune</a></li>
              </ul>
            </nav>
          </div>
          <div className="col-md-4 col-12">
            <div className={styles.socialMedia}>
              <a href={contactInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href={contactInfo.socialLinks.tiktok} target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
              <a href={contactInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className={`row ${styles.middleSection}`}>
          <div className="col-md-6 col-12">
            <ul className={styles.legalLinks}>
              <li><a href="/cookie">Cookie</a></li>
              <li><a href="/termeni-si-conditii">Termeni și condiții</a></li>
              <li><a href="/gdpr">GDPR</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-12">
            <div className={styles.salSolSection}>
              <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer">
                <img src="/images/SAL.svg" alt="SAL Logo" className={styles.logoImage} />
              </a>
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                <img src="/images/SOL.svg" alt="SOL Logo" className={styles.logoImage} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <form className={styles.newsletterForm}>
            <label className={`handwritten ${styles.inputLabel}`} htmlFor="newsletter">Abonează-te la newsletter:</label>
            <div className={styles.inputGroup}>
              <input type="email" id="newsletter" placeholder="Introdu adresa de email" required />
              <button type="submit">Abonează-te</button>
            </div>
          </form>
          <p>&copy; {new Date().getFullYear()} MD. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;