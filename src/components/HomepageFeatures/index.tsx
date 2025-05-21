import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Open Source Transparency',
    image: 'assets/logos/primary_logo.png',
    description: (
      <>
        Built transparently with full public access to the codebase under the 
        AGPL-3.0 license. Every line of code can be audited and verified by anyone.
      </>
    ),
  },
  {
    title: 'Military-Grade Security',
    image: 'assets/logos/primary_logo.png',
    description: (
      <>
        Designed with end-to-end encryption, secure voter authentication, and multi-cloud 
        redundant storage across major providers to ensure the highest level of data integrity.
      </>
    ),
  },
  {
    title: 'Built for Everyone',
    image: 'assets/logos/primary_logo.png',
    description: (
      <>
        Focused on accessibility with support for screen readers, high-contrast interfaces,
        and multilingual capabilities to ensure voting is accessible to all citizens.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
