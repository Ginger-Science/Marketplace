'use client';

import ResearchStudyCard from '../../components/ResearchStudyCard';
import sunscreenResearch from '../../data/research/sunscreen'; // adjust if path differs

export default function ResearchPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Research Library</h1>
      <p className="text-gray-600 max-w-3xl">
        Curated summaries of peer-reviewed research related to redhead biology, sunscreen efficacy, and dermatologic health.
      </p>

      <div className="flex flex-col gap-6">
        {sunscreenResearch.map((study) => (
          <ResearchStudyCard key={study.id} {...study} />
        ))}
      </div>
    </div>
  );
}
