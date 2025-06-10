const nftsMetadata = [
  {
    description: "Ginger Science Study Enrollment",
    external_url: "https://gingerscience.org", // <-- this can link to a page for the specific file too
    //     image: "https://tan-everyday-mite-419.mypinata.cloud/ipfs/bafybeigexxenxbilx23ouhdierwevb4pgoulup5w7mzxgmtwydpfai6ehe",
    name: "Ginger SPF",
    attributes: [
      {
        trait_type: "Consent",
        value: "Consent v.1",
      },
      {
        trait_type: "Survey",
        value: 0,
      },
      {
        trait_type: "Reviews",
        value: 0,
      },
    ],
  },
  
];

export type NFTMetaData = (typeof nftsMetadata)[number];

export default nftsMetadata;
