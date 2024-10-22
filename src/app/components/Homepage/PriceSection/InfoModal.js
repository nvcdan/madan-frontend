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
                    <h2 className="handwritten">Plătești mai puțin pe măsură ce inviți mai mulți!</h2>
                    <p>
                        Cu cât lista ta de invitați crește, cu atât economisești mai mult! Prețurile noastre sunt concepute pentru a-ți oferi cea mai bună valoare, indiferent de mărimea evenimentului tău.
                    </p>
                    <h3 className="handwritten mt-5">Alege pachetul perfect pentru tine</h3>
                    <p>
                        <b>Intim</b> - {pricePerPerson.intim} lei / invitat<br />
                        <b>Festiv</b> - {pricePerPerson.festiv} lei / invitat<br />
                        <b>Complet</b> - {pricePerPerson.complet} lei / invitat<br />
                    </p>
                    <h3 className="handwritten mt-5">Mai mulți invitați, mai multe economii</h3>
                    <p>
                        Iată cum scade costul per invitat pe măsură ce numărul de invitați crește:
                    </p>
                    <p>
                        <b>Până la {thresholds[0]} invitați</b>: plătești pentru 100 invitați<br />
                        <b>Între {thresholds[0] + 1} și {thresholds[1]} invitați</b>: plătești pentru 150 invitați<br />
                        <b>Între {thresholds[1] + 1} și {thresholds[2]} invitați</b>: plătești pentru 200 invitați<br />
                        <b>Peste {thresholds[2]} invitați (nelimitat)</b>: plătești pentru 250 invitați<br />
                    </p>
                    <p>
                        Astfel, deși numărul de invitați crește, costul suplimentar este minim, iar prețul per invitat scade semnificativ!
                    </p>   
                    <h3 className="handwritten mt-5">De ce este prețul variabil?</h3>               
                    <p>
                        Pentru ca ne gândim la tine! Invitând mai multe persoane, beneficiezi de un preț mai mic per invitat și economisești bani!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;