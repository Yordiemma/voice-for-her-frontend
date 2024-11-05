import React from 'react';
import './Awareher.css';

function Awareher() {
  return (
    <div className="awareher-container">
      <h1 className="awareher-title">Awareher Blog</h1>
      <p>Welcome to Awareher, a space dedicated to raising awareness about the struggles and resilience of women and children affected by conflict.</p>

      <section className="havan-story">
        <div className="havan-container">
          <div className="havan-image">
            <img src={require('../assets/Faven.jpg')} alt="Havan" />
          </div>
          <div className="havan-description">
            <h3>About Havan</h3>
            <p>Havan, a 7-year-old girl, has become a symbol of resilience in the face of violence against women and children...</p>
            <p>By sharing her story, we aim to raise awareness and stand against violence...</p>
            <p>You can learn more about Havan's story by visiting the full article here:
              <a href="https://zehabesha.com/rape-and-murder-of-7-year-old-girl-public-outrage-news-examiner/" target="_blank" rel="noopener noreferrer"> Read the Full Story</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Awareher;
