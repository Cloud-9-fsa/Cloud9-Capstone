import react from 'react';
import "./AboutUs.css";



function AboutUs() {
    return (
        <div>
            <div className="about-us-container">
                <div className="about-us-text-container">
                    <h1>Who we are:</h1>
                    <p>We are a dedicated group of pillow experts who are dedicated to the art of the pillow. We make strides in our research and understanding of pillows and proper body alignment to ensure that our clients reap any and all benefits from our pillows. We are organized and focused on our mission to equip you with the tools and weapons you’ll need to combat sleepless nights.</p>
                    <p>We believe that no one should go to bed uncomfortable and wake up feeling worse than when they fell asleep. We are constantly researching ancient, classic, and modern methods of making pillows. Our team comes together daily to discuss findings and ideas in our “Pillow Talk” gatherings.</p>
                    <p>Our team takes consumer feedback seriously and will always be there for our clients when it comes to the many demands of a restful night.</p>
                    <p>For us there is no time to rest while achieving comfort.</p>
                </div>
                {/* <div className="about-us-image-container">
                    <img src={imageUrl} alt="About Us" />
                </div> */}
            </div>
            <footer>
        <div>
            <img
              class="contact"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <a href="http://instagram.com">
            <img
              src="https://pbs.twimg.com/profile_images/1526231349354303489/3Bg-2ZsT_400x400.jpg"
              alt=""
            />
          </a>
          <a href="http://twitter.com">
            <img
              src="https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg"
              alt=""
            />
          </a>
          <a href="http://facebook.com">
            <img
              src="https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/1f/25/9e/1f259e4c-6362-711f-6b2a-7624b0d4684f/Icon-Production-0-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png"
              alt=""
            />
          </a>
    </footer>
        </div>
    );
}

export default AboutUs;
