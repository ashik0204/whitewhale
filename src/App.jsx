/**
 * White Whale Landing Page
 * 
 * To run this project:
 * 1. Install Node.js (https://nodejs.org)
 * 2. Open terminal/command prompt in this folder
 * 3. Run: npm install
 * 4. Run: npm run dev
 * 5. Open: http://localhost:5173 in a browser
 */

import './App.css'
import './index.css'
import whaleLogo from './assets/white_whaling_logo.jpeg'
import bg_section from './assets/bg_section.jpg'
import growthImage from './assets/growth.jpg' 
import teammateImage from './assets/teammate.jpeg'
import teamworkImage from './assets/teamwork.jpeg'
import bg_belief from './assets/bg_belief.jpeg'
function App() {
  return (
    <>
      <header className="header">
  <div className="container">
    <nav className="navbar">
      <div className="nav-logo">
        <img src={whaleLogo} className="logo" alt="White Whaling logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#about" className="nav-link">About Us</a></li>
        <li><a href="#features" className="nav-link">Features</a></li>
        <li><a href="#pricing" className="nav-link">Pricing</a></li>
        <li><a href="#blog" className="nav-link">Blog</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
      <div className="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </div>
</header>

      <section className="hero">
        <div className="container">
          <h1>Not every lead is worth chasing.<br />But some? They're your white whale.</h1>
          <p className="tagline">
            "Growth isn't about chasing more. It's about chasing right."
          </p>
          <a href="#contact" className="cta">Get Started</a>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            In today's B2B world, outreach is noisy. Onboarding is clunky. Campaigns feel like guesswork. 
            The result? Your most valuable prospects slip through unnoticed—not because your team lacks effort, 
            but because the tools weren't built for the hunt.
          </p>
          <p>
            So, we decided to build one.
          </p>
          <p>
            White Whaling is a new kind of AI-powered platform—designed by some of the brightest minds in growth, 
            product, and data science—who've helped scale startups, public companies, and everything in between. 
            Our team has walked the path: from cold-call floors and campaign war rooms to enterprise sales and GTM strategy decks.
          </p>
          <p>
            Together, we've baked industry-tested playbooks into an intelligent system that helps companies qualify leads, 
            automate outreach, onboard smoothly, run campaigns, and care for customers—without losing the human touch.
          </p>
          <p>
            <strong>We're not here to replace your team. We're here to empower them.</strong>
          </p>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <h2>Here's what we believe:</h2>
          <div className="belief-item">
            <div className="belief-arrow">→</div>
            <div className="belief-content">
              <div className="belief-title">The best growth is focused and frictionless</div>
              <div className="belief-description">
                <div className="belief-expanded-content">
                  <img src={growthImage} alt="Growth" className="belief-image" />
                  <div className="belief-text">
                    <p>We believe in quality over quantity. Our platform uses AI to identify high-value targets that align with your business goals, eliminating wasted effort on low-potential leads.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="belief-item">
            <div className="belief-arrow">→</div>
            <div className="belief-content">
              <div className="belief-title">AI should be your teammate, not a black box</div>
              <div className="belief-description">
                <div className="belief-expanded-content">
                  <img src={teammateImage} alt="AI Teammate" className="belief-image" />
                  <div className="belief-text">
                    <p>Our AI isn't designed to replace human intuition but to enhance it. We provide transparent insights that help your team make better decisions with confidence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="belief-item">
            <div className="belief-arrow">→</div>
            <div className="belief-content">
              <div className="belief-title">Great teams win when they're free to focus on the right things</div>
              <div className="belief-description">
                <div className="belief-expanded-content">
                  <img src={teamworkImage} alt="Teamwork" className="belief-image" />
                  <div className="belief-text">
                    <p>By automating repetitive tasks and highlighting high-impact opportunities, we free your team to apply their creativity and expertise where it matters most.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

     
      <section className="section" id="pricing">
  <div className="container">
    <h2>Pricing Plans</h2>
    <div className="Pricing-plans">
      <div className="Pricing-plan">
        <h3>Starter</h3>
        <div className="price">$99<span style={{ fontSize: '0.5em', fontWeight: 'normal' }}>/month</span></div>
        <p>Ideal for small teams beginning their journey.</p>
        <h4>Includes</h4>
        <ul className="Pricing-features-list">
          <li><span className="Pricing-features-item-plus">✓</span> AI-powered lead qualification</li>
          <li><span className="Pricing-features-item-plus">✓</span> Basic cold outreach</li>
          <li><span className="Pricing-features-item-plus">✓</span> Onboarding automation</li>
          <li><span className="Pricing-features-item-plus">✓</span> Omnichannel marketing</li>
          <li><span className="Pricing-features-item-plus">✓</span> Customer support</li>
        </ul>
        <div className="pricing-cta">
          <a href="#contact" className="cta">Get Started</a>
        </div>
      </div>
      <div className="Pricing-plan">
        <h3>Professional</h3>
        <div className="price">$299<span style={{ fontSize: '0.5em', fontWeight: 'normal' }}>/month</span></div>
        <p>Perfect for growing businesses.</p>
        <h4>Includes all Starter features +</h4>
        <ul className="Pricing-features-list">
          <li><span className="Pricing-features-item-plus">✓</span> Advanced lead scoring</li>
          <li><span className="Pricing-features-item-plus">✓</span> Enhanced outreach tools</li>
          <li><span className="Pricing-features-item-plus">✓</span> Custom workflows</li>
          <li><span className="Pricing-features-item-plus">✓</span> Priority support</li>
          <li><span className="Pricing-features-item-plus">✓</span> Analytics dashboard</li>
        </ul>
        <div className="pricing-cta">
          <a href="#contact" className="cta">Get Started</a>
        </div>
      </div>
      <div className="Pricing-plan">
        <h3>Enterprise</h3>
        <div className="price">$799<span style={{ fontSize: '0.5em', fontWeight: 'normal' }}>/month</span></div>
        <p>For large teams with advanced needs.</p>
        <h4>Includes all Professional features +</h4>
        <ul className="Pricing-features-list">
          <li><span className="Pricing-features-item-plus">✓</span> White labeling</li>
          <li><span className="Pricing-features-item-plus">✓</span> Team onboarding</li>
          <li><span className="Pricing-features-item-plus">✓</span> Dedicated account manager</li>
          <li><span className="Pricing-features-item-plus">✓</span> Custom integrations</li>
          <li><span className="Pricing-features-item-plus">✓</span> 24/7 support</li>
        </ul>
        <div className="pricing-cta">
          <a href="#contact" className="cta">Get Started</a>
        </div>
      </div>
      <div className="Pricing-plan">
        <h3>Enterprise Plus</h3>
        <div className="price">Contact Us</div>
        <p>Tailored solutions for unique requirements.</p>
        <h4>Includes all Enterprise features +</h4>
        <ul className="Pricing-features-list">
          <li><span className="Pricing-features-item-plus">✓</span> Bespoke solutions</li>
          <li><span className="Pricing-features-item-plus">✓</span> Full API access</li>
          <li><span className="Pricing-features-item-plus">✓</span> Custom SLA</li>
          <li><span className="Pricing-features-item-plus">✓</span> Dedicated support team</li>
          <li><span className="Pricing-features-item-plus">✓</span> Strategic consulting</li>
        </ul>
        <div className="pricing-cta">
          <a href="#contact" className="cta">Contact Us</a>
        </div>
      </div>
    </div>
  </div>
</section>
 <section className="section" id="contact">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Want to be part of it?</h2>
          <p>Reach out at <a href="mailto:hello@whitewhaling.com">hello@whitewhaling.com</a></p>
          <p>Follow us for behind-the-scenes stories, hiring updates, and our upcoming launch.</p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cta">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="cta">Twitter</a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p>© 2025 White Whaling. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
