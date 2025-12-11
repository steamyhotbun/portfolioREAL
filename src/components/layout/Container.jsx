import React from 'react';
import styles from './Container.module.scss';

function Container({ children, style, className }) {
  return (
    <div className={`${styles.customContainer} ${className || ''}`} style={style}>
      {children}
    </div>
  );
}

export default Container;
