import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import EUMap from '@site/src/components/EUMap';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          润学维基
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/countries">
            查看移民指南 →
          </Link>
        </div>
      </div>
    </header>
  );
}

function MapSection() {
  return (
    <section className={styles.mapSection}>
      <div className="container">
        <div className={styles.mapContainer}>
          <div className={styles.mapIntro}>
            <Heading as="h2">欧盟国家移民地图</Heading>
            <p>
              将鼠标悬停在地图上的任何国家上可以查看国家名称，点击即可浏览该国家的详细移民信息。
              我们提供了每个欧盟国家的最新移民政策、申请流程、居留要求等关键信息。
            </p>
          </div>
          <div className={styles.mapWrapper}>
            <EUMap />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>📚</div>
            <Heading as="h3">全面的移民资源</Heading>
            <p>
              我们提供最新、最全面的移民信息，包括各国签证类型、申请流程、必要文件和申请条件。
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>🔍</div>
            <Heading as="h3">详细的国家指南</Heading>
            <p>
              每个国家页面包含该国的基本信息、文化背景、生活成本、就业机会和教育资源等实用内容。
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>💡</div>
            <Heading as="h3">实用移民建议</Heading>
            <p>
              基于实际经验的移民建议，帮助您避免常见陷阱，顺利完成移民过程并适应新生活。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`首页 | ${siteConfig.title}`}
      description="润学维基 - 提供详细的欧盟国家移民信息、签证申请指南和海外生活资源">
      <HomepageHeader />
      <main>
        <MapSection />
        <FeatureSection />
      </main>
    </Layout>
  );
}
