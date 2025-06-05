import React from 'react';
import './FeaturesSection.css';
import './common.css';

const FeaturesSection = () => {
  return (
    <section className="section" id="features">
      <div className="container">
        <h2>What Makes Us Different</h2>
        <div className="value-prop">
          <div className="value-card">
            <h3>Smart Qualification</h3>
            <p>Our AI helps you identify which leads are worth your team's precious time and resources.</p>
          </div>
          <div className="value-card">
            <h3>Seamless Onboarding</h3>
            <p>Transform a clunky process into a smooth experience that sets the right tone from day one.</p>
          </div>
          <div className="value-card">
            <h3>Strategic Campaigns</h3>
            <p>Replace guesswork with data-driven outreach that connects with decision makers.</p>
          </div>
        </div>
        <p>
          We're early. We're building. And we're already working with partners to bring our vision to life.
        </p>
        <p>
          If you believe the future of business growth is smarter, calmer, and more strategic, you're in the right place.
        </p>
        <p>
          <strong>This is White Whaling. Built by operators, trusted by industry, powered by purpose.</strong>
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;