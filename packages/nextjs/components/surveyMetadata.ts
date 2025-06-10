const surveyMetadata = [
  {
    description: "Baseline sunscreen usage survey",
    external_url: "https://gingerscience.org/user/placeholder", // to be set later
    name: "Survey Response",
    attributes: [
      { trait_type: "UploadType", value: "survey_response" },
      { trait_type: "SkinType", value: "I-II" },
      { trait_type: "Region", value: "face" },
      { trait_type: "PrefersNonFDA", value: "true" },
      { trait_type: "DailySunscreenUse", value: "no" },
    ],
  },
];

export type SurveyMetadata = (typeof surveyMetadata)[number];

export default surveyMetadata;
