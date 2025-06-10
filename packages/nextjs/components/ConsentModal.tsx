'use client';

import React, { useState, useEffect } from 'react';

interface ConsentModalProps {
  studyTitle: string;
  description: string;
  risks: string;
  benefits: string;
  onConsent: () => void;
}

const ConsentModal: React.FC<ConsentModalProps> = ({
  studyTitle,
  description,
  risks,
  benefits,
  onConsent,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('sunscreenConsent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem('sunscreenConsent', 'true');
    onConsent();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">{studyTitle}</h2>
        <p className="text-sm text-gray-700">{description}</p>

        <div className="text-sm text-gray-600">
          <h3 className="font-semibold mt-4">Risks</h3>
          <p>{risks}</p>
          <h3 className="font-semibold mt-4">Potential Benefits</h3>
          <p>{benefits}</p>
        </div>

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="consent"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="mr-2"
          />
          <label htmlFor="consent" className="text-sm text-gray-700">
            I have read and understand the study information. I voluntarily consent to participate.
          </label>
        </div>

        <button
          disabled={!isChecked}
          onClick={handleConsent}
          className={`mt-4 w-full px-4 py-2 rounded font-semibold text-white ${
            isChecked ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default ConsentModal;
