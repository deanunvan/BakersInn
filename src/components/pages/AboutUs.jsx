import React, { useEffect } from 'react';
import './About.css';

export const AboutUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about">
      {/* Existing Sections */}
      <div className="home-of-about reveal-on-scroll">
        <h1>About Us</h1>
      </div>

      <div className="about-sec-2 reveal-on-scroll">
        <div className="our-mission">
          <div className="mission-icon">
            <i className="ri-flag-line"></i>
          </div>
          <div>
            <h1>Our Mission</h1>
            <p>
              To sharpen our edge in the manufacture <br />
              and marketing of quality baked products.
            </p>
          </div>
        </div>

        <div className="our-vision">
          <div className="mission-icon">
            <i className="ri-eye-close-fill"></i>
          </div>
          <div>
            <h1>Our Vision</h1>
            <p>
              To provide a nourishing, convenient and <br />
              accessible answer to hunger’s call.
            </p>
          </div>
        </div>
      </div>

      {/* New Section for Core Values */}
      <div className="core-values-section reveal-on-scroll">
        <h1 className="section-title">Our Core Values</h1>
        <div className="core-values-grid">
          <div className="core-value">
            <div className='teamwork-img'></div>
            <h2>Teamwork</h2>
            <p>
              We set inspiring goals that we pursue with passion and focus. We
              support one another to build on our strengths and strive for
              excellence.
            </p>
          </div>
          <div className="core-value">
          <div className='teamwork-img'></div>
            <h2>Respect</h2>
            <p>
              We build self-esteem by treating each other with dignity, empathy,
              and respect while encouraging diversity and innovation.
            </p>
          </div>
          <div className="core-value">
          <div className='teamwork-img'></div>
            <h2>Integrity</h2>
            <p>
              We uphold the highest professional and ethical standards in
              everything we do, ensuring accountability.
            </p>
          </div>
          <div className="core-value">
          <div className='teamwork-img'></div>
            <h2>Commitment</h2>
            <p>
              We are committed to our stakeholders and aim to achieve sustainable
              results and positive impact.
            </p>
          </div>
          <div className="core-value">
          <div className='teamwork-img'></div>
            <h2>Excellence</h2>
            <p>
              We strive to be the best in our business by delivering the highest
              quality and continuously improving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
