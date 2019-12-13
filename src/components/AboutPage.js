import React from 'react';
import styles from './AboutPage.css';
import Menu from '../components/Menu';
import Header from '../components/Header/Header';

const AboutPage = () => {

  return (
    <section id='about-wrapper' className={styles.AboutWrapper}>
      <Header />
      <Menu />
      <section className={styles.ProfileWrapper}>
        <h1 className={styles.Intro}>Meet The Devs</h1>

        <section className={styles.profileContainer}>
          <ul className={styles.Profiles}>

            <li className={styles.profile}>
              <div className={styles.Luke} />
              <div className={styles.content}>
                <h3 className={styles.Name}>Luke Donahue</h3>
                <p>Software Developer & Educator</p>
                <h5 className={styles.linkPage}>github.com/Luke9389</h5>
              </div>
            </li>
            
            <li className={styles.profile}>
              <div className={styles.Angela} />
              <div className={styles.content}>
                <h3 className={styles.Name} >Angela Vawser</h3>
                <p>Software Developer w/ a background in Graphic Design and Animation. Enjoys gardening, costume designing, cooking, anime, and horror/sci-fi flicks.</p>
                <h5 className={styles.linkPage}>hello-jelly.com</h5>
              </div>
            </li>

            <li className={styles.profile}>
              <div className={styles.Allison} />
              <div className={styles.content}>
                <h3 className={styles.Name}>Allison Busse</h3>
                <p>Allison is a software developer and former technical writer who still appreciates proper grammar. When not staring at a computer screen, you can find her reading, hiking, cooking, and wondering if it’s too late for another cup of coffee.</p>
                <h5 className={styles.linkPage}>allisonbusse.com</h5>
              </div>
            </li>

            <li className={styles.profile}>
              <div className={styles.John} />
              <div className={styles.content}>
                <h3 className={styles.Name}>John Nelson</h3>
                <p>Software Developer & Firefighter</p>
                <h5 className={styles.linkPage}>github.com/John4850</h5>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </section>

  );
};

export default AboutPage;
