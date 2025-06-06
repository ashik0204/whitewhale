import React, { useState } from 'react';
import './FeaturesSection.css';
import './common.css';

const FeaturesSection = () => {
  // Track which feature cards are expanded
  const [expandedFeatures, setExpandedFeatures] = useState({});
  
  const toggleFeature = (featureId) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [featureId]: !prev[featureId]
    }));
  };
  
  // Feature data from the content provided
  const features = [
    {
      id: 'lead-qualification',
      title: 'Lead Qualification',
      overview: 'Use AI to qualify leads in real-time based on behavior, firmographics, and buyer intent signals.',
      benefits: [
        'Auto-score leads from CRM or uploaded lists',
        'Prioritize by fit, activity, and channel',
        'Auto-tag and assign by segment'
      ],
      useCase: 'SDRs spend 40% less time on low-quality leads.',
      quote: '"White Whaling doubled our MQL-to-SQL conversion by eliminating unfit leads."',
      author: 'VP, SalesOps, SaaSCo'
    },
    {
      id: 'cold-outreach',
      title: 'Cold Outreach',
      overview: 'Launch AI-personalized outbound sequences across email, LinkedIn, and WhatsApp.',
      benefits: [
        'Create multi-touch cold campaigns',
        'A/B test subject lines and templates',
        'Monitor opens, clicks, replies in real time'
      ],
      useCase: 'Automate 1,000+ cold emails/week without triggering spam filters.',
      quote: '"Our response rate jumped 3X with White Whaling\'s GPT outreach."',
      author: 'Head of Growth, FinTechX'
    },
    {
      id: 'onboarding',
      title: 'Onboarding',
      overview: 'Streamline new customer onboarding with dynamic workflows.',
      benefits: [
        'Trigger product walkthroughs and videos',
        'Deliver milestone check-ins',
        'Track onboarding progress'
      ],
      useCase: 'Cut customer time-to-value by 40%.',
      quote: '"Customers complete onboarding 2x faster since we switched to White Whaling."',
      author: 'CSM Lead, CloudSuite'
    },
    {
      id: 'omnichannel',
      title: 'Omnichannel Marketing',
      overview: 'Engage users across email, WhatsApp, LinkedIn, and in-app with unified campaigns.',
      benefits: [
        'Plan and launch across all platforms',
        'Segment audiences dynamically',
        'View consolidated campaign analytics'
      ],
      useCase: 'Drive 25% higher engagement with coordinated messaging.',
      quote: '"We scaled from 2 to 7 channels without hiring more marketers."',
      author: 'VP Marketing, HealthTech.io'
    },
    {
      id: 'customer-care',
      title: 'Customer Care',
      overview: 'Deliver faster, smarter support with AI-enhanced chatbots and automation.',
      benefits: [
        'Handle Tier 1 queries 24/7',
        'Route complex issues to live agents',
        'Analyze sentiment and satisfaction trends'
      ],
      useCase: 'Reduce first response time to under 1 minute.',
      quote: '"White Whaling\'s bots deflect 60% of tickets automatically."',
      author: 'Director of CX, EdTechCo'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      overview: 'Real-time dashboards that surface actionable insights from your data.',
      benefits: [
        'See metrics by persona, channel, or workflow',
        'Identify drop-offs and conversion gaps',
        'Forecast pipeline performance'
      ],
      useCase: 'Weekly report time reduced from 6 hours to 30 minutes.',
      quote: '"I finally have one dashboard for everything."',
      author: 'Head of RevOps, SaaSPlus'
    },
    {
      id: 'crm-integration',
      title: 'CRM Integration',
      overview: 'Plug into your CRM with zero-code, bi-directional sync.',
      benefits: [
        'Auto-update fields and lifecycle stages',
        'Trigger flows from contact properties',
        'Connect with Salesforce, HubSpot, Zoho'
      ],
      useCase: 'No more duplicate records or lost contacts.',
      quote: '"Our data stays in sync 24/7—no manual work needed."',
      author: 'RevOps Manager, D2C Platform'
    },
    {
      id: 'data-enrichment',
      title: 'Data Enrichment',
      overview: 'Enhance records with live data from third-party sources and AI.',
      benefits: [
        'Fill in missing job titles, emails, company size',
        'Score data freshness and quality',
        'Enrich leads as they enter your funnel'
      ],
      useCase: 'Enrich 5,000 leads/month with no extra cost.',
      quote: '"We 5x\'ed our connect rate thanks to real-time enrichment."',
      author: 'Sales Director, CleanTech Co'
    },
    {
      id: 'workflow-engine',
      title: 'Workflow Engine',
      overview: 'Build visual customer journeys that trigger based on behavior, time, or intent.',
      benefits: [
        'Drag-and-drop builder',
        'Branch logic and delays',
        'Trigger email, webhook, CRM updates, and more'
      ],
      useCase: 'Build and deploy new flows in <30 minutes.',
      quote: '"This engine replaced 4 separate tools. It\'s our central nervous system."',
      author: 'Product Ops Lead, API.io'
    }
  ];

  return (
    <section className="section" id="features">
      <div className="container">
        <h2>Our Features</h2>
        <div className="description">
          <p>
            We're building comprehensive features to transform your business growth strategy.
            Explore our powerful tools that make sales and marketing smarter, more efficient, and data-driven.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className={`feature-card ${expandedFeatures[feature.id] ? 'expanded' : ''}`}
              onClick={() => toggleFeature(feature.id)}
            >
              <div className="feature-header">
                <h3>{feature.title}</h3>
                <span className="expand-icon">{expandedFeatures[feature.id] ? '−' : '+'}</span>
              </div>
              
              <div className="feature-content">
                <p className="feature-overview">{feature.overview}</p>
                
                <div className="feature-details">
                  <div className="benefits-section">
                    <h4>Key Benefits:</h4>
                    <ul>
                      {feature.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="use-case-section">
                    <h4>Use Case:</h4>
                    <p>{feature.useCase}</p>
                  </div>
                  
                  <div className="testimonial-section">
                    <blockquote>
                      {feature.quote}
                      <footer>— {feature.author}</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cta-container">
          <p>
            <strong>This is White Whaling. Built by operators, trusted by industry, powered by purpose.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;