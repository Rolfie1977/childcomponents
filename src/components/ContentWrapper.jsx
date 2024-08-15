// src/components/ContentWrapper.jsx
import React from 'react';
import styles from './ContentWrapper.module.scss';

function ContentWrapper(props) {
    return (
        <div className={styles.wrapper}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default ContentWrapper;
