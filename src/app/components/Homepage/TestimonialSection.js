"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TestimonialSection.module.css';

const testimonials = [
  {
    quote: "Am avut o experiență excelentă cu serviciile oferite de MADAN!",
    author: "Andrei Popescu",
  },
  {
    quote: "Profesionalism de top și atenție la detalii. Recomand!",
    author: "Laura Ionescu",
  },
  {
    quote: "Invitatiile noastre au fost admirate de toți invitații.",
    author: "Mihai Georgescu",
  },
  {
    quote: "Servicii de calitate superioara, cu un personal foarte amabil.",
    author: "Cristina Marinescu",
  },
  {
    quote: "Am fost impresionat de rapiditatea și eficiența echipei.",
    author: "Alexandru Dobre",
  },
  {
    quote: "O alegere excelenta pentru orice eveniment important.",
    author: "Ioana Radu",
  },
  {
    quote: "Calitate exceptionala a produselor și servicii impecabile.",
    author: "Daniel Popa",
  },
  {
    quote: "Multumim echipei MADAN pentru tot sprijinul acordat.",
    author: "Ana-Maria Stoica",
  },
  {
    quote: "Experienta noastra a fost una fara cusur.",
    author: "Robert Ilie",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = testimonials.length;
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      paginate((currentIndex + 1) % totalTestimonials, 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, totalTestimonials]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: 'absolute',
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative',
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      position: 'absolute',
    }),
  };

  const paginate = (newIndex, dir) => {
    setDirection(dir);
    setCurrentIndex(newIndex);
  };

  return (
    <section className={`${styles.testimonialSection} my-5`}>
      <div className="container position-relative">
        <div className="row justify-content-center">
          <h1 className="text-center py-4">Părerea <b>clienților</b></h1>
          <div className={`${styles.carouselWrapper} col-12 col-md-8`}>
            <AnimatePresence custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'linear', stiffness: 100, damping: 20 },
                  opacity: { duration: 0.4 },
                }}
                className={styles.testimonialCard}
              >
                <div className={styles.cardContent}>
                  <p>"{testimonials[currentIndex].quote}"</p>
                  <h5 className="handwritten"> {testimonials[currentIndex].author}</h5>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicatori Carousel */}
        <div className="row">
          <div className="col-12 text-center">
            <div className={styles.indicators}>
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.indicator} ${
                    index === currentIndex ? styles.active : ''
                  }`}
                  onClick={() => paginate(index, index > currentIndex ? 1 : -1)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;