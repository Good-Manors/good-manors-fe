import React from 'react';
import styles from './AboutUs.css';
import Angela from '../assets/angela.png';
import Allison from '../assets/allison.jpg';
import Luke from '../assets/luke.jpg';
import John from '../assets/john.jpg';

export default function AboutUs() {
  return (
    <section className={styles.AboutUs}>
      <h1>Meet our team</h1>

      <ul className="ch-grid">
        <li>
          <div className="ch-item ">
            <div className="ch-info ch-img-1">
              <h3>
                Angela Vawser</h3>
              <p>description</p>
              <h5>hello-jelly.com</h5>
            </div>
          </div>
        </li>

        <li>
          <div className="ch-item ">
            <div className="ch-info ch-img-2">
              <h3>
                Allison Busse</h3>
              <p>description</p>
              <h5>allisonbusse.com</h5>
            </div>
          </div>
        </li>

        <li>
          <div className="ch-item ">
            <div className="ch-info ch-img-3">
              <h3>
                Luke Donahue</h3>
              <p>description</p>
              <h5>github.com/Luke9389</h5>
            </div>
          </div>
        </li>

        <li>
          <div className="ch-item ">
            <div className="ch-info ch-img-4">
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
