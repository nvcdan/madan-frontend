import FeatureCard from '@/app/components/PriceSection/FeatureCard';
import styles from '@/app/components/PriceSection.module.css';

const TabContent = ({ tabs, activeTab }) => {
  return (
    <div className={`${styles.tabContent} my-4`}>
      {tabs.map((tab) => (
        tab.key === activeTab && (
          <div key={tab.key}>
            <div className="row">
              <div className="col text-start">
                <h2>{tab.content}</h2>
                <p>{tab.description}</p>
                <div className={`${styles.featureCardContainer}`}>
                  {tab.features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default TabContent;