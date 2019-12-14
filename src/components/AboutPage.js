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
                <p>With a spare hour on his hands, Luke might sit down to write some creative code, find some friends to play a board game, or write/record music.</p>
                <a href="https://github.com/Luke9389"className={styles.linkPage}>github.com/Luke9389</a>

              </div>
            </li>
            
            <li className={styles.profile}>
              <div className={styles.Angela} />
              <div className={styles.content}>
                <h3 className={styles.Name} >Angela Vawser</h3>
                <p>Software Developer w/ a background in Graphic Design and Animation. Enjoys gardening, costume designing, cooking, anime, and horror/sci-fi flicks.</p>
                <a href="https://hello-jelly.com"className={styles.linkPage}>hello-jelly.com</a>

              </div>
            </li>

            <li className={styles.profile}>
              <div className={styles.Allison} />
              <div className={styles.content}>
                <h3 className={styles.Name}>Allison Busse</h3>
                <p>Allison is a software developer and former technical writer who still appreciates proper grammar. When not staring at a computer screen, you can find her reading, hiking, cooking, and wondering if it’s too late for another cup of coffee.</p>
                <a href="https://allisonbusse.com"className={styles.linkPage}>allisonbusse.com</a>
              </div>
            </li>

            <li className={styles.profile}>
              <div className={styles.John} />
              <div className={styles.content}>
                <h3 className={styles.Name}>John Nelson</h3>
                <p>Software Developer & Firefighter</p>
                <a href="https://github.com/John4850"className={styles.linkPage}>github.com/John4850</a>

              </div>
            </li>
          </ul>
        </section>
      </section>
    </section>

  );
};

export default AboutPage;
