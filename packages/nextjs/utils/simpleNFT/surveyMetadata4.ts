const surveyMetadata = [
  {
    description: "SPF Survey",
    external_url: "https://gingerscience.org", // <-- this can link to a page for the specific file too
    image: "https://tan-everyday-mite-419.mypinata.cloud/ipfs/bafkreiafazywpwzileil5e6nbiatgdv4uigbncj4bphq4qq756zdxgbj7m",
    name: "Ginger SPF",
    attributes: [
      {
        trait_type: "Survey",
        value: "Sunscreen v.1",
      },
      {
        trait_type: "Jurisdiction",
        value: "Wilmington NC",
      },
      {
        trait_type: "Age",
        value: "65-75",
      },
      {
        trait_type: "Reuse",
        value: "yes",
      },
    ],
  },
  
];

export type NFTMetaData = (typeof nftsMetadata)[number];

export default surveyMetadata;
