'use client';

import styles from './ContactSection.module.css';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { GrSend } from 'react-icons/gr';
import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { contactInfo } from '@/app/data/contactInfo';

const ContactSection = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    AOS.init({ duration: 400, offset: 250, delay: 100 });
  }, []);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('ro-RO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <section id="contact" className={`${styles.contactSection}`}>
      <div className="container ">
        <div className="row">
          <div className={`col-md-6 order-2 order-md-1 `}>
            <div data-aos="flip-left" className={styles.postcard}>
              <form className="mt-4">
                <div className="mb-3">
                  <label htmlFor="nume" className={`${styles.postcardLabel}`}>
                    Nume:
                  </label>
                  <input
                    type="text"
                    className={`handwritten ${styles.postcardInput}`}
                    id="nume"
                    placeholder="Introduceți numele dvs."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className={`${styles.postcardLabel}`}>
                    Email:
                  </label>
                  <input
                    type="email"
                    className={`handwritten ${styles.postcardInput}`}
                    id="email"
                    placeholder="Introduceți email-ul dvs."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mesaj" className={`${styles.postcardLabel}`}>
                    Mesaj:
                  </label>
                  <textarea
                    id="mesaj"
                    rows="2"
                    className={`handwritten ${styles.postcardTextarea}`}
                    placeholder="Scrieți mesajul dvs. aici"
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <p className={`mb-0 ${styles.postcardLabel}`}>Data:</p>
                    <span className="handwritten">{currentDate}</span>
                  </div>
                  <div className="col-lg-4 mt-3 text-end">
                    <button type="submit" className={`handwritten ${styles.btnSend}`}>
                      Trimite <GrSend />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2 mb-5">
            <div className="text-center">
              <h2 className={`handwritten ${styles.heading}`}>Get in Touch</h2>
              <p className={styles.paragraph}>
                Completați acest formular pentru cerințe custom sau nelămuriri.
              </p>
              <div className={styles.socialMediaButtons}>
                <a href={contactInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
                  <FaFacebookF />
                </a>
                <a href={contactInfo.socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
                  <FaTiktok />
                </a>
                <a href={contactInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
                  <FaInstagram />
                </a>
              </div>
              <div className={styles.contactInfo}>
                <p>
                  <strong>Telefon:</strong> <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </p>
                <p>
                  <strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </p>
                <p>
                  <strong>Program:</strong> {contactInfo.program}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;