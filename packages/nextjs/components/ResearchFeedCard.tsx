import React from "react";

interface ResearchStudy {
  title: string;
  summary: string;
  link: string;
}

interface ResearchFeedCardProps {
  studies: ResearchStudy[];
}

export default function ResearchFeedCard({ studies }: ResearchFeedCardProps) {
  return (
    <div className="card bg-base-200 shadow-md">
      <div className="card-body">
        <h2 className="card-title text-primary text-2xl mb-2">Related Research</h2>
        <ul className="space-y-4">
          {studies.map((study, index) => (
            <li key={index}>
              <a href={study.link} className="link link-hover text-lg font-semibold text-base-content">
                {study.title}
              </a>
              <p className="text-sm text-base-content">{study.summary}</p>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <a href="/projects" className="btn btn-sm btn-accent">
            View All Studies
          </a>
        </div>
      </div>
    </div>
  );
}
