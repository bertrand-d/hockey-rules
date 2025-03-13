import React from 'react';
import VisualElements from './VisualElements';

const HockeyRink = ({ selectedRule, currentStep }) => {
  return (
    <div className="rink-container">
      <div className="hockey-rink">
        {/* Lignes centrales */}
        <div className="center-line"></div>
        <div className="center-circle"></div>

        {/* Lignes bleues */}
        <div className="blue-line-left"></div>
        <div className="blue-line-right"></div>

        {/* Cercles d'engagement */}
        <div className="face-off-circle" style={{ top: '10%', left: '16%' }}></div>
        <div className="face-off-circle" style={{ bottom: '10%', left: '16%' }}></div>
        <div className="face-off-circle" style={{ top: '10%', right: '16%' }}></div>
        <div className="face-off-circle" style={{ bottom: '10%', right: '16%' }}></div>
        <VisualElements selectedRule={selectedRule} currentStep={currentStep} />
      </div>
    </div>
  );
};

export default HockeyRink; 