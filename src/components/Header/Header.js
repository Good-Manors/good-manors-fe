import React, { useState, useEffect, useRef } from 'react';
import bathroom from '../../assets/img-vertical/bathroom-vert.jpg';
import catYard from '../../assets/img-vertical/cat-yard-vert.jpg';
import dining from '../../assets/img-vertical/dining-vert.jpg';
import garden from '../../assets/img-vertical/garden-vert.jpg';
import kidRoom from '../../assets/img-vertical/kid-room-vert.jpg';
import kitchen from '../../assets/img-vertical/kitchen-vert.jpg';
import nook from '../../assets/img-vertical/nook-vert.jpg';
import styles from './Header.css';
import Logo from '../Logo/Logo';

const bgImageArrayVert = [bathroom, dining, garden, kidRoom, kitchen, nook, catYard];

export default function Header() {
  const bgRef = useRef(null);

  const [bg1, setBg1] = useState(0);
  const [bg2, setBg2] = useState(1);
  const [bgCurrent, setBgCurrent] = useState('bg1');

  useEffect(() => {
    const bgMap = {
      bg1,
      bg2
    };

    setTimeout(() => {
      if(!bgRef.current) return;
      bgRef.current.style.background = `url(${bgImageArrayVert[bgMap[bgCurrent]]}) no-repeat center`;
      bgRef.current.style.backgroundSize = 'cover';

      if(bgCurrent === 'bg1') {
        setBgCurrent('bg2');
        if(bg1 + 2 >= bgImageArrayVert.length && bg2 === 0) {
          setBg1(1);
        } else if(bg1 + 2 >= bgImageArrayVert.length) {
          setBg1(0);
        } else {
          setBg1(bg1 + 2);
        }
      }

      if(bgCurrent === 'bg2') {
        setBgCurrent('bg1');
        if(bg2 + 2 >= bgImageArrayVert.length && bg1 === 0) {
          setBg2(1);
        } else if(bg2 + 2 >= bgImageArrayVert.length) {
          setBg2(0);
        } else {
          setBg2(bg2 + 2);
        }
      }
    }, 6000);
  }, [bgCurrent]);

  return (
    <header ref={bgRef} className={styles.Header}>
      <Logo />
    </header >
  );
}
