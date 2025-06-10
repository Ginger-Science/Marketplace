import React from 'react';

interface ResearchStudyCardProps {
  title: string;
  authors?: string;
  source?: string;
  abstractSummary: string;
  link: string;
  tags?: string[];
  relevanceNotes?: string;
}

const ResearchStudyCard = ({
  title,
  authors,
  source,
  abstractSummary,
  link,
  tags = [],
  relevanceNotes,
}: ResearchStudyCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-6 bg-white border border-gray-200 rounded-xl shadow-sm p-6">
      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {authors && <p className="text-sm text-gray-600">{authors}</p>}
        {source && <p className="text-sm italic text-gray-500">{source}</p>}

        <p className="text-sm text-gray-700 line-clamp-3">{abstractSummary}</p>

        {relevanceNotes && (
          <div className="bg-blue-50 border border-blue-100 p-3 rounded mt-2">
            <p className="text-xs font-medium text-blue-800 mb-1">
              Why This Matters to Redheads:
            </p>
            <p className="text-sm text-blue-700">{relevanceNotes}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium text-red-600 mt-2 hover:underline"
        >
          View Original Study →
        </a>
      </div>
    </div>
  );
};

export default ResearchStudyCard;
