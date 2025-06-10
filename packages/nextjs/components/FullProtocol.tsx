'use client';

import React, { useState } from 'react';
import sunscreenFullProtocol from '../data/protocols/sunscreenFullProtocol';

export default function FullProtocol() {
  const [consented, setConsented] = useState(false);

  return (
    <div className="max-w-3xl mx-auto space-y-6 bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold">{sunscreenFullProtocol.title}</h1>
      <p className="text-gray-700">{sunscreenFullProtocol.objective}</p>

      <div>
        <h2 className="font-semibold text-gray-800 mt-4">Risks</h2>
        <p>{sunscreenFullProtocol.risks}</p>

        <h2 className="font-semibold text-gray-800 mt-4">Potential Benefits</h2>
        <p>{sunscreenFullProtocol.benefits}</p>
      </div>

      <div>
        <h2 className="font-semibold text-gray-800 mt-4">Eligibility Criteria</h2>

        <p className="font-medium text-sm text-gray-500 mt-2">Inclusion</p>
        <ul className="list-disc list-inside text-gray-700">
          {sunscreenFullProtocol.inclusion.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="font-medium text-sm text-gray-500 mt-4">Exclusion</p>
        <ul className="list-disc list-inside text-gray-700">
          {sunscreenFullProtocol.exclusion.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="border-t pt-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={consented}
            onChange={(e) => setConsented(e.target.checked)}
          />
          <span className="text-sm">
            I have read and understand the study information. I voluntarily consent to participate.
          </span>
        </label>

        <button
          disabled={!consented}
          className={`mt-4 w-full px-4 py-2 text-white rounded ${
            consented ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          I Agree
        </button>
      </div>
    </div>
  );
}
