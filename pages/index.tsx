import { createRef, useEffect, useState } from "react";
import Layout from "../components/Layout";
import cl from "../styles/home.module.scss";

const IndexPage = () => {
  const ninthofmaytentythirteen = new Date("2013-04-09").getTime();
  const now = Date.now();
  const travelTime = (now - ninthofmaytentythirteen) / 1000;

  const audioRef = createRef<HTMLAudioElement>();

  const [dt, setDt] = useState(travelTime);

  useEffect(() => {
    // play music
    if (audioRef.current) {
      audioRef.current.play();
    }

    let secTimer = setInterval(() => {
      const now = Date.now();

      setDt((now - ninthofmaytentythirteen) / 1000);
    }, 100);

    return () => {
      clearInterval(secTimer);
    };
  }, []);

  // s(x) = (x^3)/3   +  50x
  const distance = parseInt(
    (dt ** 3 / 3 + 50 * dt).toLocaleString("fullwide", {
      useGrouping: false,
    })
  );
  const lightYears = distance / (9.4607304725808 * 10 ** 15);

  // v(x) = x^2 + 50 m/s
  const speed = dt ** 2 + 50;

  const toUniversesEnd = (
    (1.09695 * 10 ** 9 - dt) /
    60 /
    60 /
    24 /
    365.25
  ).toFixed(0);

  return (
    <Layout title="Billyrocket calculator">
      <main className={cl.main}>
        <section className={cl.box}>
          <span>
            <p>distance</p>
          </span>
          <code>{lightYears.toFixed(0)} light years</code>
        </section>
        <section className={cl.box}>
          <span>
            <p>speed</p>
          </span>
          <code>{speed} m/s</code>
        </section>
        <section className={cl.box}>
          <span>
            <p>universe border</p>
          </span>
          <code>will be reached in {toUniversesEnd} years</code>
        </section>
        <img src="/rocket_man.png"></img>
        <audio ref={audioRef} loop src="/pog.mp3"></audio>
      </main>
    </Layout>
  );
};

export default IndexPage;
