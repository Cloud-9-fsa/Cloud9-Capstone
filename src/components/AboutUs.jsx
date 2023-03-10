import React from "react";
import "../style/AboutUs.css";

function AboutUs() {
  return (
    <div>
      <div className="about-us-container">
        <div className="about-us-text-container">
          <h1>Who we are:</h1>
          <p>
            We are a dedicated group of pillow experts who are dedicated to the
            art of the pillow. We make strides in our research and understanding
            of pillows and proper body alignment to ensure that our clients reap
            any and all benefits from our pillows. We are organized and focused
            on our mission to equip you with the tools and weapons you’ll need
            to combat sleepless nights.
          </p>
          <p>
            We believe that no one should go to bed uncomfortable and wake up
            feeling worse than when they fell asleep. We are constantly
            researching ancient, classic, and modern methods of making pillows.
            Our team comes together daily to discuss findings and ideas in our
            “Pillow Talk” gatherings.
          </p>
          <p>
            Our team takes consumer feedback seriously and will always be there
            for our clients when it comes to the many demands of a restful
            night.
          </p>
          <p>For us, there is no time to rest while achieving comfort.</p>
        </div>
      </div>
      <div className="developers-container">
        <h3 className="h3andme">Meet the Developers</h3>
        <div className="developer-card">
          <h3>Jellena Solan</h3>
          <p>Frontend/ CSS / Golden Retriever fanatic. Based in New Jersey.</p>
        </div>
        <div className="developer-card">
          <h3>Mohamad Ayyad</h3>
          <p>Backend / funny / cat lover guy. Based in New Orleans.</p>
        </div>
        <div className="developer-card">
          <h3>Rahmat Bakhshi</h3>
          <p>
            Love the frontend/CSS. Sports enthusiast, loves cars. Based in Ohio.{" "}
          </p>
        </div>
        <div className="developer-card">
          <h3>Christopher Pettypiece</h3>
          <p>
            CSS Master/ motivator/ entrepreneur/ lover of milk and cool breezes.
            Based in Oklahoma.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
