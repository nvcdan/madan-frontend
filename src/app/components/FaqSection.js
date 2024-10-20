"use client"

import { useState, useRef } from 'react';
import styles from './FaqSection.module.css';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const faqs = [
    {
      question: 'Cum pot crea o invitație personalizată?',
      answer: 'Pentru a crea o invitație personalizată, accesează platforma noastră și urmează pașii pentru a alege un design, adăuga detalii despre evenimentul tău și personaliza textul invitației. După finalizare, vei putea vizualiza și distribui invitația ta unică.',
    },
    {
      question: 'Cum funcționează codul QR din invitație?',
      answer: 'Codul QR din invitație permite invitaților să acceseze o pagină dedicată evenimentului tău. Aici, aceștia pot confirma prezența, vizualiza detalii suplimentare despre eveniment și chiar încărca fotografii sau mesaje pentru a împărtăși momente speciale.',
    },
    {
      question: 'Pot gestiona lista invitaților direct pe platformă?',
      answer: 'Da, platforma noastră oferă o funcționalitate de gestionare a invitaților. Poți adăuga, edita și organiza invitații, precum și să primești notificări când aceștia confirmă participarea. De asemenea, poți folosi această funcționalitate pentru a organiza locurile la eveniment.',
    },
    {
      question: 'Este nevoie să am un cont pentru a crea invitații?',
      answer: 'Da, pentru a crea și gestiona invitații, este necesar să-ți creezi un cont pe platforma noastră. Astfel, vei avea acces la toate funcționalitățile disponibile, inclusiv istoricul invitațiilor și opțiunile de personalizare.',
    },
    {
      question: 'Pot actualiza detaliile invitației după ce am trimis-o?',
      answer: 'Da, poți actualiza detaliile invitației chiar și după ce aceasta a fost trimisă. Orice modificare va fi actualizată automat pentru toți invitații prin intermediul paginii dedicate a evenimentului. Acest lucru este util în cazul în care intervin schimbări în program sau locație.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h2 className={`handwritten ${styles.title}`}>Întrebări frecvente</h2>
            <p className={styles.subtitle}>
              Îți putem răspunde la câteva întrebări chiar acum! Nu găsești răspunsul căutat aici? Hai să discutăm și să găsim soluția potrivită pentru tine.
            </p>
            <button className={`btn ${styles.contactButton}`}>Contactează-ne →</button>
          </div>
          <div className="col-lg-7">
            <div className={styles.accordion}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={styles.accordionItem}
                >
                  <button
                    className={`${styles.accordionButton}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    {faq.question}
                    <span className={`${styles.icon} ${activeIndex === index ? styles.iconActive : ''}`}>+</span>
                  </button>
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className={styles.accordionContent}
                    style={{
                      maxHeight: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0',
                    }}
                  >
                    <div className="p-4">
                      <p className="m-0">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;