import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './Pages.css';

export const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div>

{/* -------------------------------------home-------------------------------- */}
        <div id="home">
            <div className="home-container">
                <div className="home-content reveal">
                <h1>Bringing you the <br /> best value at the <br /> best prices.</h1>
                <p>The freshest sandwiches you can make are <br /> with Baker's Inn soft white loaf.</p>
                <button className="read-more-btn">READ MORE</button>
                </div>
                <div className="home-images reveal">
                </div>
            </div>
        </div>

{/* -----------------------------------------about---------------------------------------------------- */}

        <div id="about">
            <div className="about-container reveal">
                <div className="about-content">
                <div className='about-content-h1'><h1>About Baker’s Inn</h1></div>
                    <div className="textnbtn">
                    <p>
                    It all started back in the eighties when Baker’s Inn was just a small confectionery company that employed 40 people and produced about 30,000 loaves a day. 
                    We now aim to provide a nourishing, convenient, and accessible answer to hunger’s call.
                    </p>
                    <button className="read-more-btn">READ MORE</button>
                    </div>
                </div>
                <div className="about-images">
                    <div className="about-image-1"></div>
                    <div className="about-image-2"></div>
                    <div className="about-image-3"></div>
                    <div className="about-image-4"></div>
                </div>
            </div>
        </div>


 {/* --------------------------------------------production--------------------------------        */}

        <div id='prodution'>
            <div className="products-container reveal">
                <h1>Our Product Range</h1>
                <div className="products-images">
                    <div className="products-image-1">
                        <h2 className='img-txt'>Bread</h2>
                    </div>
                    <div className="products-image-2">
                        <h2 className='img-txt'>Meat Pies</h2>
                    </div>
                    <div className="products-image-3">
                        <h2 className='img-txt'>Scones</h2>
                    </div>
                    <div className="products-image-4">
                        <h2 className='img-txt'>Donuts</h2>
                    </div>

                </div>
            </div>
            <button class="view-all-button">VIEW COMPLETE RANGE</button>
        </div>

{/* -----------------------------------book------------------------------------------------ */}


<div id="book">
      <div className="book-container reveal">
        <div className="book-content-1">
          <h1>Book A Factory Tour</h1>
          <p>
            Keen on seeing how Baker's Inn products are <br /> made? Are you interested
            in a field trip day for your school’s class?<br /> Get in touch with us to
            book a tour of our factory that is <br /> closest to you. Fill in the
            booking form and we will get <br /> back to you.
          </p>
          <button className="book-btn">BOOK FACTORY TOUR</button>
        </div>
        <div className="book-content-2">
          </div>
        </div>
      </div>

{/* --------------------------request------------------------ */}


   <div id="request">
    <div className="request-container reveal">
    <div className="request-content-2">
    </div>
    <div className="request-content-1">
          <h1>Book A Factory Tour</h1>
          <p>
          If you are holding an event that you wish to have us <br />
          donate to, we’re more than glad to help. Fill in the <br />
           donation request form for us <br />
           to best understand how we can increase your event’s impact in the local community
          </p>
          <button className="request-btn">REQUEST DONATION</button>
        </div>
    </div>

    </div> 

{/* --------------------------------kids-corner---------------------------------------------------- */}


<div id="kids-corner">
    <div className="kids-corner-content reveal">
      <div className="kids-corner-1"></div>

      <div className="kids-corner-2">
      <h1>Kids Corner</h1>
        <p>
          Let your children join the fun. Explore a place <br /> with exciting games
          and the top winners stand a <br /> chance to win exciting monthly prizes!
        </p>
        <button className="play-games-btn">PLAY GAMES</button>
      </div>
      </div>
</div>

    </div>
  );
};
