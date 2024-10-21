"use client"

import React from 'react';
import { useEffect } from 'react';
import styles from '@/app/components/Homepage/PriceSection.module.css';

const InfoModal = ({ isOpen, onClose, pricePerPerson, thresholds }) => {
    useEffect(() => {
        if (isOpen) {
            // Adaugă evenimentul pentru a închide modalul când se apasă tasta ESC
            document.addEventListener('keydown', handleKeyDown);
        } else {
            // Curăță evenimentul
            document.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const handleKeyDown = (e) => {
        if (e.keyCode === 27) { // Tasta ESC
            onClose();
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={` ${styles.modalOverlay} ${isOpen ? styles.show : ''}`} onClick={handleOverlayClick}>
            <div className={`container ${styles.modalContent} ${isOpen ? styles.slideIn : ''}`}>

                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <div className={`py-5 ${styles.modalBody}`}>
                    <h2>Cum se calculează prețul?</h2>
                    <p>
                        Prețul se calculează în funcție de pachetul ales și numărul de invitați.
                    </p>
                    <h3>Pachete</h3>
                    <b>Intim</b> - {pricePerPerson.intim} lei / persoană<br />
                    <b>Festiv</b> - {pricePerPerson.festiv} lei / persoană<br />
                    <b>Complet</b> - {pricePerPerson.complet} lei / persoană<br />
                    <h3 className="mt-5">Numărul de invitați</h3>
                    <p>
                        În funcție de numărul de invitați, se aplică următoarele tarife:
                    </p>
                    Până la {thresholds[0]} invitați: 100 x preț per persoană<br />
                    Între {thresholds[0] + 1} și {thresholds[1]} invitați: 150 x preț pachet<br />
                    Între {thresholds[1] + 1} și {thresholds[2]} invitați: 200 x preț pachet<br />
                    Peste {thresholds[2]} invitați: 250 x preț pachet<br />
                    <br/>
                    <p>
                        De exemplu, dacă alegi pachetul <b>Festiv</b> și ai 120 de invitați, prețul va fi: <br></br>
                        150 x {pricePerPerson.festiv} lei = {150 * pricePerPerson.festiv} lei 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;