import React, { useState, useRef, useEffect } from 'react';
import './common.css';
import './AboutSection.css';

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideshowRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Minimum distance to be considered a swipe
  const minSwipeDistance = 50;
  
  const slides = [
    {
      id: 0,
      text: "In today's hyper-competitive B2B landscape, outreach is noisy and saturated. Onboarding journeys are clunky and fragmented. Campaign performance feels like expensive guesswork. The result? Your highest-value enterprise prospects and accounts slip through unnoticed—not because your team lacks effort or expertise, but because traditional tools weren't built for strategic account-based hunting in the age of information overload.",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
    },
    {
      id: 1,
      text: "So, we decided to build one. A system that doesn't just manage your pipeline, but transforms it with predictive intelligence and precision targeting, eliminating the guesswork that plagues even the most sophisticated sales organizations.",
      background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
    },
    {
      id: 2,
      text: "White Whaling is a next-generation, AI-powered revenue acceleration platform—designed by some of the brightest minds in growth engineering, product strategy, and computational data science—who've helped scale category-defining startups, Fortune 500 enterprises, and everything in between. Our team has walked the path: from cold-call floors and campaign war rooms to enterprise deal negotiation and cross-functional GTM strategy. We've lived your pain points and know what it takes to surpass ambitious revenue targets quarter after quarter.",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
    },
    {
      id: 3, 
      text: "Together, we've distilled decades of industry-tested playbooks into an intelligent system that leverages proprietary algorithms to help companies qualify high-intent prospects, personalize outreach at scale, streamline customer onboarding, orchestrate multi-channel campaigns, and deliver proactive customer success interventions—all without sacrificing the human touch that defines meaningful business relationships. Our platform's machine learning models continuously improve, identifying buying signals your team might miss and suggesting optimal engagement strategies based on real-world conversion data.",
      background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
    },
    {
      id: 4,
      text: <strong>We're not here to replace your revenue team. We're here to transform them into a data-driven, laser-focused unit that consistently lands and expands high-value enterprise accounts with unprecedented efficiency. In a marketplace where everyone claims to be 'AI-powered', we deliver measurable ROI through genuine intelligence that adapts to your unique sales motion and customer journey.</strong>,
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
    }
  ];

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  // Touch event handlers
  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNextSlide();
    } else if (isRightSwipe) {
      goToPrevSlide();
    }
  };
  
  // Add visual feedback during swipe
  useEffect(() => {
    if (!slideshowRef.current || touchStart === null || touchEnd === null) return;
    
    const distance = touchStart - touchEnd;
    // Limit the transform to avoid excessive movement
    const maxOffset = 50;
    const offset = Math.abs(distance) > maxOffset ? 
                   (distance > 0 ? -maxOffset : maxOffset) : 
                   -distance;

    const currentTransform = -currentSlide * 100;
    const newTransform = currentTransform + (offset / slideshowRef.current.offsetWidth * 100);
    
    slideshowRef.current.style.transform = `translateX(${newTransform}%)`;
    
    return () => {
      if (slideshowRef.current) {
        slideshowRef.current.style.transform = `translateX(${currentTransform}%)`;
      }
    };
  }, [touchStart, touchEnd, currentSlide]);

  return (
    <section className="section" id="about">
      <div className="container">
        <h2>Our Story</h2>
        
        <div className="slideshow-container">
          <div 
            className="slideshow-slides" 
            ref={slideshowRef}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="slide">
                <div 
                  className="slide-content"
                  style={{ background: slide.background }}
                >
                  <p>{slide.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="slideshow-controls">
            <button className="slide-arrow prev" onClick={goToPrevSlide}>
              &larr;
            </button>
            <div className="slide-indicators">
              {slides.map((slide, index) => (
                <span 
                  key={index} 
                  className={`indicator ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
            <button className="slide-arrow next" onClick={goToNextSlide}>
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;