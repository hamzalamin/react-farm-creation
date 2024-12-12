import React from 'react';
import '../styles/heroComponent.css';
import { Link } from 'react-router-dom';


function HeroComponent() {
  return (
    <div className="hero-container">
        <div class="typing-container">
          <h1 class="typing-effect">Welcome to Citronix 🍋</h1>
        </div>
        <p>Citronix is more than just a management tool, it’s your partner in enhancing efficiency and ensuring the success of your lemon farm. Whether you're a small-scale farmer or managing a large plantation, Citronix is here to help you grow smarter, not harder. 🌿</p>
        <div className="button-container">
        <Link to="/create-farm">
          <button className="create-farm-btn">
            Create Your Farm
          </button>
        </Link>
        <Link to="/learn-more">
          <button className="learn-more-btn">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroComponent;