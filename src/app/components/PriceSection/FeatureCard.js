import styles from '@/app/components/PriceSection.module.css';

const FeatureCard = ({ feature }) => {
  return (
    <div className={`${styles.featureCard} ${feature.included ? '' : styles.featureCardDisabled}`}>
      <div className={styles.featureContent}>
        <div className={styles.iconContainer}>
          <span className={styles.icon}>{feature.included ? '✔️' : '✘'}</span>
        </div>
        <div className={styles.textContainer}>
          <b className={styles.featureTitle}>{feature.title}</b>
          <p className={styles.featureDescription}>{feature.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;