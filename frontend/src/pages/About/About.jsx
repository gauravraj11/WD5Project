import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to <span className="highlight">Foodie Express</span>, your ultimate destination for delicious meals delivered straight to your door. 
          We are passionate about connecting people with their favorite cuisines from local restaurants and chefs.
        </p>
        <p className="about-description">
          Our mission is to make food delivery quick, easy, and affordable, while ensuring the best dining experience from the comfort of your home.
          With a wide range of options and a user-friendly platform, we bring the joy of food to every moment.
        </p>
        <div className="about-stats">
          <div className="stat">
            <h2>500+</h2>
            <p>Restaurants</p>
          </div>
          <div className="stat">
            <h2>10k+</h2>
            <p>Orders Delivered</p>
          </div>
          <div className="stat">
            <h2>4.8/5</h2>
            <p>Customer Ratings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
