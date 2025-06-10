"use client";

import React from "react";

interface Milestone {
  label: string;
  complete: boolean;
}

interface MilestonesCardProps {
  milestones: Milestone[];
}

export default function MilestonesCard({ milestones }: MilestonesCardProps) {
  return (
    <div className="card bg-base-200 shadow-md">
      <div className="card-body">
        <h2 className="card-title text-primary text-2xl mb-4">Project Milestones</h2>
        <ul className="space-y-2">
          {milestones.map((milestone, index) => (
            <li key={index} className="flex items-center">
              <input
                type="checkbox"
                checked={milestone.complete}
                readOnly
                className="checkbox checkbox-success checkbox-sm mr-3"
              />
              <span className={milestone.complete ? "line-through text-base-content/70" : "text-base-content"}>
                {milestone.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
