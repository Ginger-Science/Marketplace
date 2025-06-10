"use client";

import type { NextPage } from "next";

const SPFSurvey: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10 px-6">
      <h1 className="text-center mb-8">
        <span className="block text-4xl font-bold">Ginger Science SPF Survey</span>
        <span className="block text-2xl font-semibold mt-2">Welcome and Product Protocol</span>
      </h1>

      <div className="max-w-3xl space-y-6 text-left text-gray-800">
        <p>
          Thank you for joining the Ginger Science SPF Research Registry. You are participating in a cosmetic product evaluation
          focused on the sun protection needs of individuals with MC1R genetic variants.
        </p>

        <h2 className="text-xl font-semibold">What to Expect</h2>
        <p>
          You will receive a selection of SPF products for home use and feedback. This is a cosmetic research initiative evaluating
          user preferences and experiences. Your participation will help shape product development and consumer education specific
          to redhead phototypes.
        </p>

        <h2 className="text-xl font-semibold">Included in Your Package</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Three to five SPF formulations in various formats (lotion, spray, stick)</li>
          <li>A printed copy of your informed consent</li>
          <li>A printed version of the application protocol</li>
          <li>A link to submit product feedback</li>
        </ul>
        <p>
          These SPF products are marketed as cosmetic items. No claims are being made about their medical efficacy, and your
          participation does not constitute involvement in a drug trial.
        </p>

        <h2 className="text-xl font-semibold">Product Evaluation Protocol</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Use one SPF product per week or longer, depending on your preference and daily exposure.</li>
          <li>Apply the product to one consistent area of the body such as the arms, shoulders, or face.</li>
          <li>Evaluate the product based on sensory criteria including texture, scent, ease of application, absorption, and residue.</li>
          <li>After sun exposure, reflect on how your skin felt. Note any discomfort, irritation, or positive sensations.</li>
          <li>Complete the feedback survey provided with each product.</li>
          <li>Repeat the protocol for each item in your test kit.</li>
        </ol>

        <p>
          Your honest observations will inform future cosmetic SPF formulations and guidance for redhead skin profiles.
        </p>

        <h2 className="text-xl font-semibold">Step 1: Shipping Information</h2>
        <p>
          To receive your product kit, complete the order form linked below.
        </p>
        <p>
          [Button or Link: Submit Shipping Details]  
          (This form opens in a new window and is powered by MailerLite.)
        </p>

        <h2 className="text-xl font-semibold">Step 2: Begin the Protocol</h2>
        <p>
          When your kit arrives, follow the enclosed instructions. Submit your product feedback using the review form provided by
          email or included in the packet.
        </p>
        <p>
          If you have any questions or issues with your shipment, contact the research coordinator at research@gingerscience.org.
        </p>

        <p>
          Thank you for your contribution to a new standard of sun protection for people with rare phototypes.
        </p>
      </div>
    </div>
  );
};

export default SPFSurvey;
