// components/ProjectDescriptionCard.tsx
"use client";

import React from "react";

interface ProjectDescriptionCardProps {
  title: string;
  description: string;
}

export default function ProjectDescriptionCard({ title, description }: ProjectDescriptionCardProps) {
  return (
    <div className="card bg-base-200 shadow-md">
      <div className="card-body">
        <h2 className="card-title text-primary text-2xl">{title}</h2>
        <p className="text-base-content mt-2">{description}</p>
      </div>
    </div>
  );
}
