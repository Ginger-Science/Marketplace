"use client";

import { MyHoldings } from "./_components";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";
import { addToIPFS } from "~~/utils/simpleNFT/ipfs-fetch";
import surveyMetadata from "~~/utils/simpleNFT/surveyMetadata1";

const MyNFTs: NextPage = () => {
  const { address: connectedAddress, isConnected, isConnecting } = useAccount();

  const { writeContractAsync } = useScaffoldWriteContract("Ginger");

  const { data: tokenIdCounter } = useScaffoldReadContract({
    contractName: "Ginger",
    functionName: "tokenIdCounter",
    watch: true,
  });

  const handleMintItem = async () => {
    // circle back to the zero item if we've reached the end of the array
    if (tokenIdCounter === undefined) return;

    const tokenIdCounterNumber = Number(tokenIdCounter);
    const currentTokenMetaData = surveyMetadata[tokenIdCounterNumber % surveyMetadata.length];
    const notificationId = notification.loading("Uploading to IPFS");
    try {
      const uploadedItem = await addToIPFS(currentTokenMetaData);

      // First remove previous loading notification and then show success notification
      notification.remove(notificationId);
      notification.success("Metadata uploaded to IPFS");

      await writeContractAsync({
        functionName: "survey",
        args: [connectedAddress, uploadedItem.path],
      });
    } catch (error) {
      notification.remove(notificationId);
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex items-center flex-col pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">Add New Survey</span>
          </h1>
        </div>
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-xl font-bold">
              {" "}
              <a
                href="https://ipfs.io/ipfs/QmY8gnN43ZbtbBAHDEHeXX5tFYfw1MaGBYvNbpfp1bqpe4"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                View Survey Template
              </a>
            </span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        {!isConnected || isConnecting ? (
          <RainbowKitCustomConnectButton />
        ) : (
          <button className="btn btn-secondary" onClick={handleMintItem}>
            Add Survey
          </button>
        )}
      </div>
      <MyHoldings />
    </>
  );
};

export default MyNFTs;
