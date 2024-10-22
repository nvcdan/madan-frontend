"use client";

import { useState, useEffect } from 'react';
import { Range, getTrackBackground } from 'react-range';
import Tabs from '@/app/components/Homepage/PriceSection/Tabs';
import TabContent from '@/app/components/Homepage/PriceSection/TabContent';
import InfoModal from '@/app/components/Homepage/PriceSection/InfoModal';
import styles from '@/app/components/Homepage/PriceSection.module.css';
import 'aos/dist/aos.css';
import AOS from 'aos';


const MAX_USERS = 300 + 10;
const PRICE_STAGE_1_USERS = 100
const PRICE_STAGE_2_USERS = 200

const THRESHOLDS = [PRICE_STAGE_1_USERS, PRICE_STAGE_2_USERS, MAX_USERS - 10];

const pricePerPerson = {
  intim: 2,
  festiv: 3,
  complet: 4,
};



const getFeatures = (overrides = {}) => [
  { title: 'Modele de invitații', included: true, description: 'Alege dintre modele noastre deosebite.' },
  { title: 'Personalizare', included: true, description: 'Încarcă fotografiile preferate și alege culorile și textul preferat.' },
  { title: 'Suport tehnic', included: true, description: 'Orice problemă tehnică te ajutăm să o rezolvi.' },
  { title: 'Randare 3D', included: overrides.randare3D || false, description: 'Obiecte 3D interactive pentru invitațiile online.' },
  { title: 'Momente QR', included: overrides.momenteQR || false, description: 'Partajează momentele speciale cu Momente QR.' },
  { title: 'Cerinte personalizate', included: overrides.cerintePersonalizate || false, description: 'Dacă ai o cerință specială, specialiștii noștri o vor implementa!' },
  { title: 'Invitație fizică', included: overrides.invitatieFizica || false, description: 'Invitații fizice cu cod QR pentru acces direct la invitația online.' },
];

const tabs = [
  {
    key: 'intim',
    label: 'Intim',
    content: 'Intim',
    description: 'Pachetul ideal pentru evenimente restrânse, intime, unde dorințele tale sunt puse în prim-plan.',
    features: getFeatures(),
  },
  {
    key: 'festiv',
    label: 'Festiv',
    content: 'Festiv',
    description: 'Perfect pentru evenimente mai mari și sărbători speciale.',
    features: getFeatures({ randare3D: true, momenteQR: true }),
  },
  {
    key: 'complet',
    label: 'Complet',
    content: 'Complet',
    description: 'Pentru evenimentele premium și pentru o experiență completă și impecabilă.',
    features: getFeatures({ randare3D: true, momenteQR: true, cerintePersonalizate: true, invitatieFizica: true }),
  },
];

const PriceSection = () => {
  const [users, setUsers] = useState(50);
  const [activeTab, setActiveTab] = useState(tabs[1].key);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculatePrice = (userCount, packageKey, extras = {}) => {
    const perPersonCost = pricePerPerson[packageKey];
    let totalPrice = perPersonCost;

    if (userCount > MAX_USERS - 10) {
      totalPrice = perPersonCost * 250;
    } else if (userCount > PRICE_STAGE_2_USERS) {
      totalPrice = perPersonCost * 200;
    } else if (userCount > PRICE_STAGE_1_USERS) {
      totalPrice = perPersonCost * 150;
    } else {
      totalPrice = 100 * perPersonCost;
    }

    return totalPrice;
  };

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  var currentPrice = calculatePrice(users, activeTab);
  var [displayedPrice, setDisplayedPrice] = useState(currentPrice);

  useEffect(() => {
    AOS.init({ duration: 200, offset: 50 });
  }, []);

  useEffect(() => {
    let start = displayedPrice;
    const end = currentPrice;
    const duration = 200; 
    const increment = (end - start) / (duration / 10);
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
        current = end;
        clearInterval(timer);
      }
      setDisplayedPrice(Math.round(current));
    }, 5);
    return () => clearInterval(timer);
  }, [currentPrice]);

  return (
    <section className={`container-fluid ${styles.priceSection} py-5`}>
      <div className="container text-center mt-5">
        <h1>Pe măsura ta, <b>fără costuri ascunse</b></h1>
        <h4>Simplu, transparent și adaptat 100% evenimentelor tale!</h4>
        <div className={` ${styles.priceContainer} mt-4` }>
          <div data-aos="zoom-in" className={`${styles.currentPrice}`}>
            <h1 className={`${styles.currentPriceHeading} handwritten`}>{displayedPrice} RON</h1>
          </div>
          <button onClick={() => setIsModalOpen(true)} className={`${styles.infoButton}`}>
            ⓘ Afiseaza detaliat calculul pretului
          </button>
        </div>
        <br />
        <div className="mt-2"></div>
        <p className="handwritten text-end">Câți invitați vei avea?</p>
        <div className={`${styles.sliderSection}`}>
          <Range
            values={[users]}
            step={1}
            min={1}
            max={MAX_USERS}
            onChange={(values) => setUsers(values[0])}
            renderTrack={({ props: trackProps, children }) => {
              const { key, ...restProps } = trackProps;
              return (
                <div
                  key={key}
                  onMouseDown={restProps.onMouseDown}
                  onTouchStart={restProps.onTouchStart}
                  className={styles.trackContainer}
                >
                  <div
                    ref={restProps.ref}
                    className={styles.track}
                    style={{
                      background: getTrackBackground({
                        values: [users],
                        colors: ['var(--orange)', 'var(--light)'],
                        min: 1,
                        max: MAX_USERS,
                      }),
                    }}
                  >
                    {/* Afișează marcajele */}
                    {THRESHOLDS.map((threshold) => (
                      <div
                        key={threshold}
                        className={styles.markContainer}
                        style={{
                          left: `${((threshold - 1) / (MAX_USERS - 1)) * 100}%`,
                        }}
                      >
                        <div className={styles.mark} />
                        <div className={`text-center ${styles.markLabel} `}>{threshold}</div>
                      </div>
                    ))}
                    {children}
                  </div>
                </div>
              );
            }}
            renderThumb={({ props: thumbProps, isDragged }) => {
              const { key, ...restProps } = thumbProps;
              return (
                <div
                  key={key}
                  {...restProps}
                  className={styles.thumb}
                >
                  <div className={styles.output}>
                    {users > MAX_USERS - 10 ? 'Nelimitat' : users > 1 ? `${users} invitați` : 'Doar eu'}
                    <div className={styles.outputArrow}></div>
                  </div>
                </div>
              );
            }}
          />
        </div>
        <p className="handwritten text-start">Alege un pachet de servicii</p>
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <TabContent tabs={tabs} activeTab={activeTab} />

        <InfoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          pricePerPerson={pricePerPerson}
          thresholds={THRESHOLDS}
        />
      </div>
    </section>
  );
};

export default PriceSection;