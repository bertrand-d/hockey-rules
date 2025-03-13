import React from 'react';
import rulesData from '../data/rules.json';

const RuleExplanation = ({ selectedRuleId }) => {
    const { rules } = rulesData;
    const selectedRule = rules.find(rule => rule.id === selectedRuleId);

    if (!selectedRule) {
        return null;
    }

    return (
        <div className="rule-explanation">
            <h2>{selectedRule.title}</h2>
            <p>{selectedRule.description}</p>
        </div>
    );
};

export default RuleExplanation; 