import React from 'react';

const VisualElements = ({ selectedRule, currentStep }) => {
    if (!selectedRule) return null;

    return (
        <>
            <div className={`player ${selectedRule} step-${currentStep}`} />
            <div className={`puck ${selectedRule} step-${currentStep}`} />
            <div className={`player-ally-1 ${selectedRule} step-${currentStep}`} />
        </>
    );
};

export default VisualElements; 