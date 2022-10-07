import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Knedime Tatlı Notlar',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Bu siteyi açmamdaki asıl amaç, kendi kendime not tutma alışkanlığımı altyapısı güçlü bir uygulama ile geliştirmekti. Bu süreçte Obsidian'dan Notion'a, Zettlr'den MarkText'e kadar sayısız uygulama kullandım ancak bir şekilde bazı kısımlar eksik gibi hissettim. Burada Docusaurus bana çok yardımcı oldu. 
      Çevrimdışı notun hızı ile çevrimiçi olarak dilediğim yerden erişebilme özelliği bana büyük fayda sağladı. Yine de başka alternatifler olursa deneyeceğim.
      </>
    )
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
