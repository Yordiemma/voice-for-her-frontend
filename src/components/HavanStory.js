// HavanStory.js
import React from 'react';
import './HavanStory.css';

function HavanStory() {
  return (
    <section className="havan-story">
      <div className="havan-container">
        <div className="havan-image">
          <img src={require('../assets/Faven.jpg')} alt="Havan" />
        </div>
        <div className="havan-description">
          <h3>About Havan</h3>
          <p>Havan, a 7-year-old girl, has become a symbol of resilience...</p>
          <p>You can learn more about Havan's story by visiting the full article here:</p>
          <a href="https://zehabesha.com/rape-and-murder-of-7-year-old-girl-public-outrage-news-examiner/" target="_blank" rel="noopener noreferrer"> Read the Full Story</a>
        </div>
      </div>
    </section>
  );
}

export default HavanStory;
