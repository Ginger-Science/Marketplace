"use client"

import React from 'react';
import sunscreenProtocol from '../data/protocols/sunscreenProtocol';

const statusMap: Record<string, string> = {
  'in-progress': '🟡 In Progress',
  'not-started': '⚪ Not Started',
  'complete': '🟢 Complete'
};

const StudyOverviewCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Study Overview</h2>
      <p className="text-sm text-gray-700">{sunscreenProtocol.objective}</p>

      <div>
        <h3 className="text-sm font-semibold text-gray-600 uppercase mt-4 mb-2">Milestones</h3>
        <ul className="space-y-1">
          {sunscreenProtocol.milestones.map((m) => (
            <li key={m.label} className="text-sm text-gray-700">
              {statusMap[m.status] || '❓'} {m.label}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-600 uppercase mt-4 mb-2">Eligibility</h3>
        <p className="text-xs text-gray-500 font-medium">Inclusion</p>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {sunscreenProtocol.eligibility.inclusion.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-xs text-gray-500 font-medium mt-2">Exclusion</p>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {sunscreenProtocol.eligibility.exclusion.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudyOverviewCard;
