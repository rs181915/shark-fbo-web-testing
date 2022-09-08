import React from 'react';

import Lottie from 'react-lottie';
import animationData from 'assets/animations/coming_soon.json';
import styles from './styles.module.css';

const ComingSoon = () => (
  <div className="">
    <div className="container my-5 d-flex flex-column flex-md-row justify-content-evenly align-items-center gap-3">
      <div>
        coming soon
      </div>
    </div>
  </div>
);

export const ComingSoonProduction = () => {
  const linkedInLink = 'https://www.linkedin.com/company/sharkfbo';
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <>
      <div className={styles.main}>
        <span>
          v1.0 is under development, for now please visit our LinkedIn profile
          {' '}
          <a target="_blank" rel="noreferrer" href={linkedInLink}>sharkfbo</a>
        </span>
        <div className={styles.coming_soon}>
          <Lottie
            style={{ width: '100%', height: '100%' }}
            options={defaultOptions}
          />
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
