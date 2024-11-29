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

    </div>
  );
};
