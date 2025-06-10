"use client";

import React from "react";
import Link from 'next/link';

import ProjectDescriptionCard from "../../../components/ProjectDescriptionCard";
import ProjectLogoCard from "../../../components/ProjectLogoCard";
import ResearchStudyCard from "../../../components/ResearchStudyCard";
import MilestonesCard from "../../../components/MilestonesCard";
import EngagementCard from "../../../components/EngagementCard";
import BlogPreviewCard from "../../../components/BlogPreviewCard";
import sunscreenResearch from "../../../data/research/sunscreen"; 
import StudyOverviewCard from '../../../components/StudyOverviewCard';


export default function ProjectPage() {
  return (
    <div className="space-y-6">

      

      {/* 📋 Description + Logo */}
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

      {/* 🔗 Top Redirect */}
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl text-center">
        <Link href="/research">
          <span className="text-red-600 font-medium hover:underline">
            View Full Research Library →
          </span>
        </Link>
      </div>
      <StudyOverviewCard />
      <div className="text-center">
  <Link href="/protocol/sunscreen">
    <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow">
      Join the Global Sunscreen Product Test →
    </button>
  </Link>
</div>


      {/* 🧭 Milestones + Engagement */}
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

      {/* 📝 Blog Preview */}
      <BlogPreviewCard
        title="The Role of Sunscreen in Preventing Actinic Purpura"
        summary="Sunscreen is widely recommended to reduce skin damage, but its effectiveness in preventing actinic purpura is not well understood."
        link="#"
      />

      {/* 📚 Deep Research Preview */}
      <div className="pt-6 border-t border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Explore the Research</h2>
        <div className="flex flex-col gap-4">
          {sunscreenResearch.slice(0, 2).map((study) => (
            <ResearchStudyCard key={study.id} {...study} />
          ))}
        </div>
      </div>
    </div>
  );
}
