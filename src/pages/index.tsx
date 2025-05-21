import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.logoContainer}>
          <img 
            src="assets/logos/primary_logo.png" 
            alt="GoVote-IO Logo" 
            className={styles.logoImage} 
          />
        </div>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__text">
          Open-source, transparent, and secure electronic voting built for the modern world.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
          <Link
            className="button button--outline button--lg button--secondary"
            href="https://github.com/GoVote-IO"
            style={{marginLeft: '1rem'}}>
            View on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function MissionSection() {
  return (
    <section className={styles.missionSection}>
      <div className="container">
        <div className="row">
          <div className="col">
            <Heading as="h2" className={styles.missionTitle}>
              Our Mission
            </Heading>
            <p className={styles.missionText}>
              GoVote-IO was created in response to concerns about electronic voting systems used in recent elections.
              We believe that voting technology should be transparent, secure, and accessible to all citizens.
            </p>
            <p className={styles.missionText}>
              By building an open-source voting system using the Go programming language and modern security practices,
              we aim to create a solution that election officials can trust, voters can verify, and the public can audit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemArchitecture() {
  return (
    <section className={styles.architectureSection}>
      <div className="container">
        <div className="row">
          <div className="col">
            <Heading as="h2" className={styles.architectureTitle}>
              System Architecture
            </Heading>
            <p className={styles.architectureText}>
              The GoVote-IO system follows a microservices architecture with dedicated services
              for election management, voter authentication, and vote recording. Data is stored redundantly
              across multiple cloud providers to ensure integrity and enable independent verification.
            </p>
            <div className={styles.architectureButtons}>
              <Link
                className="button button--primary"
                to="/docs/architecture">
                Learn About Our Architecture
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Open Source Voting System`}
      description="GoVote-IO is an open-source, secure, and transparent voting system designed to restore trust in electronic voting.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <MissionSection />
        <SystemArchitecture />
      </main>
    </Layout>
  );
}
