import React from 'react';
import rulesData from '../data/rules.json';

const RuleSelector = ({ onRuleSelect }) => {
    const { rules } = rulesData;

    return (
        <div className="rules-selector">
            <label htmlFor="rule-select">Sélectionnez une règle :</label>
            <select 
                id="rule-select" 
                onChange={(e) => onRuleSelect(e.target.value)}
            >
                <option value="">--Choisissez une règle--</option>
                {rules.map(rule => (
                    <option key={rule.id} value={rule.id}>
                        {rule.title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default RuleSelector; 