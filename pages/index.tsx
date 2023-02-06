import { createRef, useEffect, useState } from "react";

import Layout from "../components/Layout";

import cl from "../styles/home.module.scss";

import {

  distanceFromTime,

  lightYearsFromMeters,

  speedFromTime,

  yearsToUniverseEnd,

} from "../utils/math";


const IndexPage = () => {

  const ninthofmaytentythirteen = new Date("2013-04-09").getTime();

  const now = Date.now();

  const travelTime = (now - ninthofmaytentythirteen) / 1000;


  const audioRef = createRef<HTMLAudioElement>();


  const [dt, setDt] = useState(travelTime);


  useEffect(() => {

    if (audioRef.current) {

      audioRef.current.click();

      audioRef.current.volume = 0.3;

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


  const distance = distanceFromTime(dt);

  const speed = speedFromTime(dt);

  const lightYears = lightYearsFromMeters(distance);

  const yearsLeft = yearsToUniverseEnd(dt);


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

          <code>will be reached in {yearsLeft.toFixed(0)} years</code>

        </section>

        <img src="/rocket_man.png"></img>

        <audio ref={audioRef} loop src="/pog.mp3"></audio>

      </main>

    </Layout>

  );

};


export default IndexPage;

