import Navbar from '@/app/components/Navbar';
import styles from '@/app/page.module.css'

export const metadata = {
  title: 'MADAN | Acasă',
  description: 'Bine ați venit la MADAN - Soluții digitale pentru evenimentul tău.',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container main-container mt-5">
        <div className="row">
          <div className={`col ${styles.mainSection}`}>
            <h1><b>INVITATII DIGITALE <br />pentru momente memorabile</b></h1>
            <h3 className="mt-5">Surprinde-ți invitații cu eleganță și rafinament, oferindu-le o invitație care transcende obișnuitul.</h3>
          </div>
        </div>
        <div className={`preview ${styles.customCard} mt-5`}>
            <img
              src={'/images/demo.webp'}
              alt="Preview demo"
              className={`${styles.previewImage} ${styles.roundedImage}`}
            />
        </div>
      </div>
    </>
  );
}