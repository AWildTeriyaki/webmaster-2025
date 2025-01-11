import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <section className="about-container">
      <div className="about-hero">
        <img
          src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg"
          alt="Restaurant"
          className="about-hero-image"
        />
        <div className="about-hero-text">
          <h1>About Our Restaurant</h1>
          <p>
            At <strong>Leaf to Ladle</strong>, we believe every meal should be an unforgettable
            experience. From our locally-sourced ingredients to our curated wine list, we strive to
            offer the best of both flavor and ambiance.
          </p>
        </div>
      </div>
      <div className="about-content">
        <h2>Our Chef</h2>
        <p>
        John Smith is a chef and artist who believes every dish tells a story. Born and raised in a small town in rural Pennsylvania, he learned the art of cooking at an early age from his grandmother, mastering recipes that have been passed down for generations. After years of traveling and working in renowned kitchens across the world, John returned to Pennsylvania to bring his vision to life at Leaf and Ladle, a vegetarian restaurant that reflects his deep passion for the culinary arts.
        </p>

        <h2>Our Commitment</h2>
        <p>
        A lifelong animal lover, John has always believed in the importance of compassionate living. His decision to create a fully vegetarian menu stems from his commitment to showcasing how plant-based dishes can be both innovative and delicious. At Leaf and Ladle, his dishes combine bold flavors with a touch of nostalgia, creating meals that feel both exciting and familiar. Outside the kitchen, John dedicates his time to animal rescue efforts and working in the greenhouse of his restaurant to ensure the use of the freshest ingredients for his menu.

        </p>

        <h2>Our Accolades</h2>
        <p>
        John's work and dedication has been widely recognized, as he is proud to have won a Michelin Star and be awarded the most Sustainable Chef of the Year in 2024. His passion for elevating vegetarian cuisine continues to inspire diners and chefs alike.

        </p>

        <h2>Visit Us</h2>
        <p>
          Whether you're joining us for a casual lunch with friends or celebrating a special
          occasion, we can't wait to serve you. We hope our love for good food shines through in
          every plate!
        </p>
      </div>
    </section>
  );
};

export default About;
