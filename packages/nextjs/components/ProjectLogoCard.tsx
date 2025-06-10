"use client";
import React from "react";

interface ProjectLogoCardProps {
  logo: string;
  status: string;
}

export default function ProjectLogoCard({ logo, status }: ProjectLogoCardProps) {
  return (
    <div className="card bg-base-200 shadow-md items-center justify-center h-full">
      <div className="card-body items-center text-center">
        <div className="avatar placeholder">
          <div className="w-16 rounded-full bg-neutral text-neutral-content text-xl">
            {logo}
          </div>
        </div>
        <h3 className="font-semibold text-base-content mt-2">Project #001</h3>
        <span className="badge badge-accent mt-1">{status}</span>
      </div>
    </div>
  );
}
