"use client"

import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from '@/app/components/Homepage/HeroSection.module.css';

export default function HeroSection() {

    const tiltRef = useRef(null);

    useEffect(() => {
      if (tiltRef.current) {
        VanillaTilt.init(tiltRef.current, {
          max: 0.6,          // Unghiul maxim de înclinare
          reverse: true,
          speed: 1000,       // Viteza tranziției
          glare: true,      // Activează efectul de "glare"
          "max-glare": 0.2  // Intensitatea efectului de "glare"
        });
      }

      return () => {
        if (tiltRef.current && tiltRef.current.vanillaTilt) {
          tiltRef.current.vanillaTilt.destroy();
        }
      };
    }, []);

  return (
    <>
        <div ref={tiltRef} className={`container ${styles.mainSection} d-flex align-items-center justify-content-center`}>
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="handwritten display-5">Descoperă magia invitatiilor animate</h1>
              <p className="font-weight-bold">Testează platforma noastră și vezi cum o invitațile pot prinde viață cu efecte dinamice și interactive.</p>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              <div className={`card ${styles.customCard} p-4`}>
               
              <label className={styles.heroLabel} htmlFor="invitationName">Numele invitației</label>
                <input
                className={`handwritten`}
                type="text"
                id="invitationName"
                placeholder="Exemplu: Madalina & Dan"
                />
                <button className={`handwritten ${styles.demoBtn} `}>START</button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}