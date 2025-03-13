import React from 'react';
import rulesData from '../data/rules.json';

const RuleExplanationStep = ({ selectedRuleId, currentStep }) => {
    if (!selectedRuleId) return (
        <div className="rule-explanation-step">
            <p>Choisir une règle pour commencer</p>
        </div>
    );

    const rule = rulesData.rules.find(rule => rule.id === selectedRuleId);
    if (!rule || !rule.steps || !rule.steps[currentStep]) return null;

    return (
        <div className="rule-explanation-step">
            <p>{rule.steps[currentStep].description}</p>
        </div>
    );
};

export default RuleExplanationStep; 