"use client";

import React from "react";

interface BlogPreviewCardProps {
  title: string;
  summary: string;
  link: string;
}

export default function BlogPreviewCard({ title, summary, link }: BlogPreviewCardProps) {
  return (
    <div className="card bg-base-200 shadow-md">
      <div className="card-body">
        <h2 className="card-title text-primary text-2xl">{title}</h2>
        <p className="text-base-content mt-2">{summary}</p>
        <div className="mt-4">
          <a href={link} className="btn btn-accent btn-sm">
            Read Full Post →
          </a>
        </div>
      </div>
    </div>
  );
}
