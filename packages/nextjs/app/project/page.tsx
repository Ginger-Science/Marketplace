"use client";

import React from "react";

import ProjectDescriptionCard from "../../components/ProjectDescriptionCard";
import ProjectLogoCard from "../../components/ProjectLogoCard";
import ResearchFeedCard from "../../components/ResearchFeedCard";
import MilestonesCard from "../../components/MilestonesCard";
import EngagementCard from "../../components/EngagementCard";
import BlogPreviewCard from "../../components/BlogPreviewCard";

export default function ProjectPage() {
  return (
    <div className="space-y-6">
      {/* Top Row: Description + Logo */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-3">
          <ProjectDescriptionCard
            title="Can Sunscreen Prevent Actinic Purpura in Redheads?"
            description="We’re studying whether consistent sunscreen use can help prevent actinic purpura in redheaded individuals. This research project invites participants to log sunscreen habits, share photos, and compare results across the MC1R phenotype spectrum."
          />
        </div>
        <div className="md:col-span-1">
          <ProjectLogoCard />
        </div>
      </div>

      {/* Research Section */}
      <ResearchFeedCard
        studies={[
          {
            title: "Sunscreen and Photodamage in MC1R Carriers",
            summary: "Examining UV response in redheaded populations.",
            link: "#",
          },
          {
            title: "Actinic Purpura: Epidemiology and Pathogenesis",
            summary: "A clinical review of sun-related skin fragility.",
            link: "#",
          },
          {
            title: "Barriers to Sunscreen Use in Melanocompromised Individuals",
            summary: "Understanding behavior and access in high-risk groups.",
            link: "#",
          },
        ]}
      />

      {/* Milestones + Engagement */}
      <div className="grid md:grid-cols-2 gap-4">
        <MilestonesCard
          milestones={[
            { label: "Participant Recruitment", complete: true },
            { label: "Sunscreen Usage Baseline Survey", complete: true },
            { label: "Monthly Photo Uploads", complete: false },
            { label: "Initial Data Analysis", complete: false },
          ]}
        />
        <EngagementCard
          commentsCount={14}
          upvotes={57}
          onUpvote={() => console.log("Upvoted")}
        />
      </div>

      {/* Optional Blog Feed */}
      <BlogPreviewCard
        title="The Role of Sunscreen in Preventing Actinic Purpura"
        summary="Sunscreen is widely recommended to reduce skin damage, but its effectiveness in preventing actinic purpura is not well understood."
        link="#"
      />
    </div>
  );
}
