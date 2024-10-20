// 'use client' directive for Next.js
'use client';

import styles from './FooterSection.module.css';

const FooterSection = () => {
  return (
    <section className={`${styles.footerSection}`}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-auto">
            <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer">
              <img src="images/SAL.svg" alt="SAL Logo" className={styles.logo} />
            </a>
          </div>
          <div className="col-auto">
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              <img src="images/SOL.svg" alt="SOL Logo" className={styles.logo} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;