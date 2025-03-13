import React, { useState, useEffect } from 'react'
import './scss/main.scss'
import HockeyRink from './components/HockeyRink'
import RuleSelector from './components/RuleSelector'
import RuleExplanation from './components/RuleExplanation'
import RuleExplanationStep from './components/RuleExplanationStep'

function App() {
  const [selectedRuleId, setSelectedRuleId] = useState('')
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    if (!selectedRuleId) return;

    const interval = setInterval(() => {
      setCurrentStep(prevStep => {
        if (prevStep >= 5) {
          return 0;
        }
        return prevStep + 1;
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [selectedRuleId]);

  return (
    <div className="container">
      <h1>Les Règles du Hockey sur Glace</h1>
      <RuleSelector onRuleSelect={setSelectedRuleId} />
      <RuleExplanationStep 
        selectedRuleId={selectedRuleId} 
        currentStep={currentStep} 
      />
      <HockeyRink 
        selectedRule={selectedRuleId} 
        currentStep={currentStep} 
      />
      <RuleExplanation selectedRuleId={selectedRuleId} />
    </div>
  )
}

export default App 