"use client";

import { MyHoldings } from "./_components";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";
import { addToIPFS } from "~~/utils/simpleNFT/ipfs-fetch";
import reviewMetadata from "~~/utils/simpleNFT/reviewMetadata1";

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
    const currentTokenMetaData = reviewMetadata[tokenIdCounterNumber % reviewMetadata.length];
    const notificationId = notification.loading("Uploading to IPFS");
    try {
      const uploadedItem = await addToIPFS(currentTokenMetaData);

      // First remove previous loading notification and then show success notification
      notification.remove(notificationId);
      notification.success("Metadata uploaded to IPFS");

      await writeContractAsync({
        functionName: "review",
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
            <span className="block text-4xl font-bold">Add New Review</span>
          </h1>
        </div>
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-xl font-bold">
             {" "}
              <a
                href="https://tan-everyday-mite-419.mypinata.cloud/ipfs/bafkreifjg5z53ag3rpjjkrcumpswe3arq2kwq4hd7zo5pxhawlxk5oxypm"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                View Review Template
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
            Add Review
          </button>
        )}
      </div>
      <MyHoldings />
    </>
  );
};

export default MyNFTs;
