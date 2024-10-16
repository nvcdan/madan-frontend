"use client"

import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from '@/app/components/ProductSection.module.css';

export default function ProductSection() {

  // Create an array of refs for the cards
  const tiltRefs = useRef([]);

  useEffect(() => {
    // Initialize VanillaTilt on each card
    tiltRefs.current.forEach(ref => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 10,          // Maximum tilt angle
          reverse: true,
          speed: 10000,       // Transition speed
          glare: true,       // Enable glare effect
          "max-glare": 0.2
        });
      }
    });

    return () => {
      // Destroy VanillaTilt on each card when the component unmounts
      tiltRefs.current.forEach(ref => {
        if (ref && ref.vanillaTilt) {
          ref.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <>
      <div className={`container ${styles.productSection}`}>
        <div className="row text-center mt-4">
        <div className="col-12 col-md-4 mb-4">
          <div
            ref={el => tiltRefs.current[0] = el}
            className={`container ${styles.customCard}  ${styles.cardInvitatii}`}
          >
            <h3>Invitații Unice și Personalizate</h3>
            <p>Transformă-ți evenimentul într-o experiență memorabilă cu invitații personalizate online, oferind invitaților o modalitate elegantă de confirmare a prezenței.</p>

            <button className={`btn ${styles.cardButtonLight}`}>Afla mai multe</button>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div
            ref={el => tiltRefs.current[1] = el}
            className={`container ${styles.customCard} ${styles.cardQR}`}
          >
            <h3>Distribuie Amintiri prin Coduri QR</h3>
            <p>Oferă invitaților tăi posibilitatea de a împărtăși instant momente prețioase – fotografii și videoclipuri – cu toți participanții, direct printr-un cod QR.</p>

            <button className={`btn ${styles.cardButton}`}>Afla mai multe</button>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div
            ref={el => tiltRefs.current[2] = el}
            className={`container ${styles.customCard} ${styles.cardManagement}`}
          >
            <h3>Management Complet al Evenimentului</h3>
            <p>Organizează-ți evenimentul fără stres! De la repartizarea invitaților la mese, până la estimarea costurilor, ai totul sub control.</p>

            <button className={`btn ${styles.cardButton}`}>Afla mai multe</button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}