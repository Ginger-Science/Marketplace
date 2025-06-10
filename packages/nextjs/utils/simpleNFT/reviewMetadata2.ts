const reviewMetadata = [
  {
    description: "Product Review",
    external_url: "https://gingerscience.org", // <-- this can link to a page for the specific file too
    image: "https://tan-everyday-mite-419.mypinata.cloud/ipfs/bafkreien7uqxxmflegjhhkjnrpwu2jsxhosxx3x2tfeyh24g6ujkxifmhm",
    name: "Ginger SPF",
    attributes: [
      {
        trait_type: "Product",
        value: "SPF Serum",
      },
      {
        trait_type: "Active",
        value: "Tinosorb-C",
      },
      {
        trait_type: "Protocol",
        value: "Protocol 1",
      },
      {
        trait_type: "Jurisdiction",
        value: "Denver CO USA",
      },
      {
        trait_type: "Age",
        value: "55-65",
      },
      {
        trait_type: "Reuse",
        value: "yes",
      },
    ],
  },
  
];

export type NFTMetaData = (typeof nftsMetadata)[number];

export default reviewMetadata;
