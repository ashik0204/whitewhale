import React, { useState, useEffect } from 'react';
import './FeaturesSection.css';
import './common.css';

const FeaturesSection = () => {
  // Track which feature is currently selected
  const [selectedFeatureId, setSelectedFeatureId] = useState(null);
  // Track current page of features
  const [currentPage, setCurrentPage] = useState(0);
  // Number of features to show per page
  const featuresPerPage = 3;
  
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
  
  // Calculate total number of pages
  const totalPages = Math.ceil(features.length / featuresPerPage);
  
  // Get current features to display
  const getCurrentFeatures = () => {
    const start = currentPage * featuresPerPage;
    return filteredFeatures.slice(start, start + featuresPerPage);
  };
  
  // Navigation functions
  const goToNextPage = (e) => {
    e.stopPropagation();
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const goToPrevPage = (e) => {
    e.stopPropagation();
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  // Get the selected feature
  const selectedFeature = features.find(f => f.id === selectedFeatureId);
  const [searchTerm, setSearchTerm] = useState("");

  // Toggle selected feature
  const selectFeature = (featureId) => {
    setSelectedFeatureId(featureId === selectedFeatureId ? null : featureId);
  };
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        goToNextPage(e);
      } else if (e.key === 'ArrowLeft') {
        goToPrevPage(e);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages]);
const filteredFeatures = features.filter(feature =>
  feature.title.toLowerCase().includes(searchTerm.toLowerCase())
);

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
        
          <input className="search" id="feature-search" type="text" placeholder="Search features..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <div className="features-carousel">
          <button 
            className="nav-button prev-button" 
            onClick={goToPrevPage}
            aria-label="Previous features"
          >
            &#8592;
          </button>

          <div className="features-grid">
            {getCurrentFeatures().map((feature) => (
              <div 
                key={feature.id} 
                className={`feature-card ${selectedFeatureId === feature.id ? 'selected' : ''}`}
                onClick={() => selectFeature(feature.id)}
              >
                <div className="feature-header">
                  <h3>{feature.title}</h3>
                </div>
                
                <div className="feature-content">
                  <p className="feature-overview">{feature.overview}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="nav-button next-button" 
            onClick={goToNextPage}
            aria-label="Next features"
          >
            &#8594;
          </button>
        </div>
        
        <div className="pagination-indicator">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span 
              key={index} 
              className={`page-dot ${currentPage === index ? 'active' : ''}`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
        
        {selectedFeature && (
          <div className="feature-details-container">
            <div className="feature-details-header">
              <h3>{selectedFeature.title}</h3>
              <button 
                className="close-button" 
                onClick={() => setSelectedFeatureId(null)}
                aria-label="Close details"
              >
                ×
              </button>
            </div>
            
            <div className="feature-details-content">
              <div className="benefits-section">
                <h4>Key Benefits:</h4>
                <ul>
                  {selectedFeature.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="use-case-section">
                <h4>Use Case:</h4>
                <p>{selectedFeature.useCase}</p>
              </div>
              
              <div className="testimonial-section">
                <blockquote>
                  {selectedFeature.quote}
                  <footer>— {selectedFeature.author}</footer>
                </blockquote>
              </div>
            </div>
          </div>
        )}
        
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