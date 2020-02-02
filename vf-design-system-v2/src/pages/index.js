import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Guidelines</>,
    imageUrl: 'img/guidelines-hero.svg',
    description: (
      <>
        Find our guidelines.
      </>
    ),
    gotoLink: (
      'docs/guidelines'
       
    ),
  },
  {
    title: <>Pattern Library</>,
    imageUrl: 'img/pattern-library-hero.svg',
    description: (
      <>
        Find our Pattern Library
      </>
    ),
    gotoLink: (
      'http://www.vodafone.de/brix'
       
    ),
  },
  
];

function Feature({imageUrl, title, description, gotoLink}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <Link className={classnames('col col--6 card card-teaser link-teaser', styles.feature)} to={gotoLink}>
    <div >
      
      {imgUrl && (
        <div className="text--center">
          <img className={classnames ('featureImage-card',styles.featureImage)} src={imgUrl} alt={title} />
        </div>
      )}
      <h2 class="center-text">{title}</h2>
      <p class="text-large center-text">{description}</p>
      <div className={styles.buttons}>
            <Link
              className={classnames(
                'text-button',
                styles.getStarted,
              )}
              to={useBaseUrl('#')}>
              <span class="button__text valign-middle">Get Started </span>
              <img class="left-space-50 valign-middle" src="img/icon-arrow-right.svg" alt=""></img>
            </Link>
          </div>
          
    </div>
    </Link>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Welcome to the Vodafone Design Experience">
      <header className={classnames('hero hero--primary padding-top-reset', styles.heroBanner)}>
        <div className="container-hero-primary">
          <img src="img/hero-img-start.svg" alt="Vodafone Design System"></img>
          <h1 className="hero__title">{siteConfig.tagline}</h1>
          <div class="container"><p class="text-large">Every digital brand has its own visual language. And like spoken languages our visual language is changing constantly over time. 
In the same way that a new generation develops a different manner of choosing words to express themselves, so does our design system. Different visual generations are coexisting for a certain amount of time until some are being replaced by more recent ones. 

Our design language needs to ensure a clear communication to the outside. It is the interface and the touchpoint for our users and customers. It needs to be clear and simple.</p></div>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--strong button--large face',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/introduction')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>

<div class="col4-card-teaser">
<div><h2 class="center-text space-200-bottom">Learn more about</h2></div>
      <a href="docs/dev-guides" class="col col--4-teaser card card-teaser link-teaser">
    <div>
        <div className="text--center">
          <img class="featureImage-card" src="img/code-hero.svg" alt=""/>
        </div>
      <h2 class="center-text space-reset">How we code</h2>
      <p class="text-large center-text">Our developer guidelines</p>
      <div class="center-button">
      <a href="docs/dev-guides" class="text-button space-reset">
              <span class="button__text valign-middle">Start to code</span>
              <img class="left-space-50 valign-middle" src="img/icon-arrow-right.svg" alt=""></img>
            </a>
          </div>
    </div>
    </a>
    <a href="docs/digital-design" class="col col--4-teaser card card-teaser link-teaser">
    <div>
        <div className="text--center">
          <img class="featureImage-card" src="img/design-hero.svg" alt=""/>
        </div>
      <h2 class="center-text space-reset">How we design</h2>
      <p class="text-large center-text">Our digital style guide</p>
      <div class="center-button">
      <a href="docs/digital-design" class="text-button space-reset">
              <span class="button__text valign-middle">Start to design</span>
              <img class="left-space-50 valign-middle" src="img/icon-arrow-right.svg" alt=""></img>
            </a>
          </div>
    </div>
    </a>
    <a href="docs/editorial-guides" class="col col--4-teaser card card-teaser link-teaser">
    <div>
        <div className="text--center">
          <img class="featureImage-card" src="img/editorial-hero.svg" alt=""/>
        </div>
      <h2 class="center-text space-reset">How we edit</h2>
      <p class="text-large center-text">Our editorial guide</p>
      <div class="center-button">
      <a href="docs/editorial-guides" class="text-button space-reset">
              <span class="button__text valign-middle">Start to edit</span>
              <img class="left-space-50 valign-middle" src="img/icon-arrow-right.svg" alt=""></img>
            </a>
          </div>
    </div>
    </a>
    <a href="docs/corporate-language" class="col col--4-teaser-last card card-teaser link-teaser">
    <div>
        <div className="text--center">
          <img class="featureImage-card" src="img/voice-tone-hero.svg" alt=""/>
        </div>
      <h2 class="center-text space-reset">How we speak</h2>
      <p class="text-large center-text">Our Voice and tone</p>
      <div class="center-button">
            <a href="docs/corporate-language" class="text-button space-reset">
              <span class="button__text valign-middle">Learn more</span>
              <img class="left-space-50 valign-middle" src="img/icon-arrow-right.svg" alt=""></img>
            </a>
          </div>
    </div>
    </a>
    <div class="clearfix"></div>
</div>    
      <div class="home-teaser-full-gradient clearfix">
        <div class="container">
          <h2 class="center-text text-white space-150-bottom">Consistency and Sustainability</h2>
            <div class="justifiy">
              <div class="space-reset">
                <p class="center-text text-white space-reset text-large">
                Our goal is to establish patterns and styles across the entire digital brand, so that our users easily find their way around. 
                Being a strong and well-established brand, our page needs to be consistent.  Inconsistency is a trust-killer. 
                In order to meet the expectations of our users and customers the use of a sustainable pattern library is essential.
                </p>
              </div>  
            </div>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="home-teaser-strategy">
        <div class="container-30-right">
          <h2 class="space-150-bottom">Business Goals – strong design means commercial success</h2>
            <div class="justifiy">
              <div class="space-reset">
                <p class="text-large">
                Business value equals UX value equals business goals
                </p>
                <a href="docs/design-strategy" class="button button--dark">Our Design Strategy</a>
              </div>  
            </div>
        </div>
        <div class="clearfix"></div>
      </div>

      <div class="home-teaser-principles">
        <div class="container-30-left">
          <h2 class="space-150-bottom">A strong brand needs a strong design</h2>
            <div class="justifiy">
              <div class="space-reset">
                <p class="text-large">
                Our design system builds the sum of components and parameters which are used everywhere on our digital touchpoints.
                </p>
                <a href="docs/design-principles" class="button button--dark">Our Design Principles</a>
              </div>  
            </div>
        </div>
        <div class="clearfix"></div>
      </div>

      <div class="home-teaser-clean-code">
        <div class="container-30-right">
          <h2 class="space-150-bottom">Clean code</h2>
            <div class="justifiy">
              <div class="space-reset">
                <p class="text-large">
                Clean code can be read and enhanced by a developer other than its original author.
                </p>
                <a href="docs/clean-code" class="button button--dark">Our Clean Code culture</a>
              </div>  
            </div>
        </div>
        <div class="clearfix"></div>
      </div>

      <div class="home-teaser-full-gradient">
        <div class="container">
          <h2 class="center-text text-white space-150-bottom">Our goals</h2>
         <div class="justifiy">
          <div class="col-33-left space-reset"><h3 class="center-text text-white">Consistent design language</h3><p class="center-text text-white space-reset text-large">

Refine our visual language to be simpler, more fun and more communicative.</p></div>
          <div class="col-33-left space-reset"><h3 class="center-text text-white">Platform agnostic system</h3><p class="center-text text-white space-reset text-large">

          Develop a single, unified system that is transferrable across all platforms and devices.</p></div>
          <div class="col-33-left space-reset"><h3 class="center-text text-white">Expedite the design process</h3><p class="center-text text-white space-reset text-large">

          By abstracting our base styles layer, now developers can churn out UIs with minimal design input.</p></div>
        </div>
        </div>
        <div class="clearfix"></div>
      </div>
      
      <div><h2 class="center-text space-reset">Browse our foundations</h2></div>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row-feature">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}



      </main>
    </Layout>
  );
}

export default Home;


