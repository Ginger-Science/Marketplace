"use client";

import React from "react";

interface EngagementCardProps {
  commentsCount: number;
  upvotes: number;
  onUpvote: () => void;
}

export default function EngagementCard({ commentsCount, upvotes, onUpvote }: EngagementCardProps) {
  return (
    <div className="card bg-base-200 shadow-md">
      <div className="card-body">
        <h2 className="card-title text-primary text-2xl mb-2">Get Involved</h2>

        <div className="flex items-center justify-between mt-2">
          <p className="text-base-content">Comments</p>
          <span className="badge badge-outline">{commentsCount}</span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <p className="text-base-content">Upvotes</p>
          <span className="badge badge-outline">{upvotes}</span>
        </div>

        <div className="mt-4">
          <button onClick={onUpvote} className="btn btn-primary btn-sm w-full">
            👍 Upvote this Project
          </button>
        </div>
      </div>
    </div>
  );
}
