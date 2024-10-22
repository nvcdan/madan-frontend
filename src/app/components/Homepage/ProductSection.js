"use client"

import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from '@/app/components/Homepage/ProductSection.module.css';

export default function ProductSection() {

  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach(ref => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 10,     
          reverse: true,
          speed: 10000,     
          glare: true,       
          "max-glare": 0.2
        });
      }
    });

    return () => {
      tiltRefs.current.forEach(ref => {
        if (ref && ref.vanillaTilt) {
          ref.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <>
      <div className={`container p-0 ${styles.productSection}`}>
        <div className="row text-center mt-4">
        <div className="col-12 col-xl-4 col-md-6 mb-4">
          <div
            ref={el => tiltRefs.current[0] = el}
            className={`container ${styles.customCard}  ${styles.cardInvitatii}`}
          >
            <h1 className="handwritten">Invitații</h1>
            <h3>unice și personalizate</h3>
            <p>Transformă-ți evenimentul într-o experiență memorabilă cu invitații personalizate online, oferind invitaților o modalitate elegantă de confirmare a prezenței.</p>

            <a href="/invitatii" className={`btn ${styles.cardButtonLight}`}>Afla mai multe</a>
          </div>
        </div>
        <div className="col-12 col-xl-4 col-md-6 mb-4">
          <div
            ref={el => tiltRefs.current[1] = el}
            className={`container ${styles.customCard} ${styles.cardQR}`}
          >
            <h3>Distribuie amintiri prin</h3>
            <h1 className="handwritten">Momente QR</h1>
            <p>Oferă invitaților tăi posibilitatea de a împărtăși instant momente prețioase – fotografii și videoclipuri – cu toți participanții, direct printr-un cod QR.</p>

            <a href="/momente-qr" className={`btn ${styles.cardButton}`}>Afla mai multe</a>
          </div>
        </div>
        <div className="col-12 col-xl-4 col-md-12 mb-4">
          <div
            ref={el => tiltRefs.current[2] = el}
            className={`container ${styles.customCard} ${styles.cardManagement}`}
          >
            <h1 className="handwritten">Gestiune</h1>
            <h3>completa a evenimentului</h3>
            <p>Organizează-ți evenimentul fără stres! De la repartizarea invitaților la mese, până la estimarea costurilor, ai totul sub control.</p>

            <a href="/gestiune" className={`btn ${styles.cardButton}`}>Afla mai multe</a>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}