"use client";

import { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > lastScrollY.current) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
        lastScrollY.current = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav>
            <div className={`container-fluid ${styles.navbar} ${showNavbar ? styles.show : styles.hide}`}>
                <div className={`container d-flex justify-content-between align-items-center ${styles.navbarContainer}`}>
                    <div className="d-flex align-items-center">
                        <div className={`text-lime text-center ${styles.logo}`}>
                            <Link href="/" passHref>
                                <span>MD</span>
                            </Link>
                        </div>
                        <div className="d-none d-md-flex ms-4">
                            <Link href="/" passHref>
                                <span className={styles.navLinkSpecial}>Invitatii</span>
                            </Link>
                            <Link href="/momente" passHref>
                                <span className={styles.navLinkSpecial}>Momente QR</span>
                            </Link>
                        </div>
                    </div>
                    <div className="d-none d-md-flex align-items-center">
                        <Link href="/preturi" passHref>
                            <span className={styles.navLink}>Preturi</span>
                        </Link>
                        <Link href="/servicii" passHref>
                            <span className={styles.navLink}>Toate serviciile</span>
                        </Link>
                        <Link href="/contact" passHref>
                            <span className={styles.navLink}>Contact</span>
                        </Link>
                    </div>
                    <div className="d-md-none">
                        <button onClick={toggleNav} className={styles.menuButton}>
                            <FontAwesomeIcon
                                icon={navOpen ? faTimes : faBars}
                                className={`${styles.icon} ${navOpen ? styles.closeIcon : styles.menuIcon}`}
                            />
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="d-none d-md-flex">
                <div className="container justify-content-between align-items-center">
                    <div className={`align-items-center ${styles.subNavbar} `}>
                        <Link href="/testimoniale" passHref>
                            <span className={styles.subNavLink}>Testimoniale</span>
                        </Link>
                        <Link href="/portofoliu" passHref>
                            <span className={styles.subNavLink}>Portofoliu</span>
                        </Link>
                    </div>
                </div>
            </div> */}
            <div className={`d-md-none ${styles.mobileMenu} ${navOpen ? styles.open : ''}`}>
                <div className={` container ${styles.mobileTopNav} `}>
                    <Link href="/" passHref>
                        <span className={styles.navLinkSpecial}>Invitații</span>
                    </Link>
                    <Link href="/momente" passHref>
                        <span className={styles.navLinkSpecial}>Momente QR</span>
                    </Link>
                </div>
                <div className={styles.mobileMenuCentered}>
                    <Link className={styles.mobileLink} href="/preturi" passHref>
                        <span className={styles.navLink}>Preturi</span>
                    </Link>
                    <Link className={styles.mobileLink} href="/servicii" passHref>
                        <span className={styles.navLink}>Toate serviciile</span>
                    </Link>
                    <Link className={styles.mobileLink} href="/contact" passHref>
                        <span className={styles.navLink}>Contact</span>
                    </Link>
                </div>
                <div className={styles.mobileSubNav}>
                    <Link href="/testimoniale" passHref>
                        <span className={styles.mobileSubNavLink}>Testimoniale</span>
                    </Link>
                    <Link href="/portofoliu" passHref>
                        <span className={styles.mobileSubNavLink}>Portofoliu</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;