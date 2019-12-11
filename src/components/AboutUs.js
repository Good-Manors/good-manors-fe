import React from 'react';
import styles from './AboutUs.css';

export default function AboutUs() {
  return (
    <section className={styles.AboutUs}>
      <h1>Meet our team</h1>

      <ul className={styles.chGrid}>
        <li>
          <div className={styles.chItem}>
            <div className={styles.chInfo, styles.chImg1}>
              <h3>
                Angela Vawser</h3>
              <p>description</p>
              <h5>hello-jelly.com</h5>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.chItem}>
            <div className={styles.chInfo, styles.chImg2}>
              <h3>
                Allison Busse</h3>
              <p>description</p>
              <h5>allisonbusse.com</h5>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.chItem}>
            <div className={styles.chInfo, styles.chImg3}>
              <h3>
                Luke Donahue</h3>
              <p>description</p>
              <h5>github.com/Luke9389</h5>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.chItem}>
            <div className={styles.chInfo, styles.chImg4}>
              <h3>
                John Nelson</h3>
              <p>description</p>
              <h5>github.com/John4850</h5>
            </div>
          </div>
        </li>
      </ul>
    </section>

  );
}
