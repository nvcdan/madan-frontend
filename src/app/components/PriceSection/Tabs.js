import styles from '@/app/components/PriceSection.module.css';

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className={`${styles.tabContainer} my-4`}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tab} ${activeTab === tab.key ? styles.active : ''}`}
            onClick={() => onTabChange(tab.key)}
          >
            {tab.label}
          </button>
        ))}
        <div
          className={styles.indicator}
          style={{
            transform: `translateX(${tabs.findIndex(tab => tab.key === activeTab) * 100}%)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Tabs;