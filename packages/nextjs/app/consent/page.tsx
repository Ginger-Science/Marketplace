"use client";

import { MyHoldings } from "./_components";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";
import { addToIPFS } from "~~/utils/simpleNFT/ipfs-fetch";
import consentMetadata from "~~/utils/simpleNFT/consentMetadata1";

const MyNFTs: NextPage = () => {
  const { address: connectedAddress, isConnected, isConnecting } = useAccount();

  const { writeContractAsync } = useScaffoldWriteContract("Ginger");

  const { data: tokenIdCounter } = useScaffoldReadContract({
    contractName: "Ginger",
    functionName: "tokenIdCounter",
    watch: true,
  });

  const handleMintItem = async () => {
    if (tokenIdCounter === undefined) return;

    const tokenIdCounterNumber = Number(tokenIdCounter);
    const currentTokenMetaData = consentMetadata[tokenIdCounterNumber % consentMetadata.length];
    const notificationId = notification.loading("Uploading to IPFS");
    try {
      const uploadedItem = await addToIPFS(currentTokenMetaData);

      notification.remove(notificationId);
      notification.success("Metadata uploaded to IPFS");

      await writeContractAsync({
        functionName: "joinStudy",
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
            <span className="block text-4xl font-bold">Add New Sun Survey Participants</span>
          </h1>
        </div>
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl font-bold">Study Artifacts</span>
          </h1>
        </div>
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-xl font-bold">
              View{" "}
              <a
                href="https://tan-everyday-mite-419.mypinata.cloud/ipfs/bafkreihh5etdxk4vy4mnrv6vx7rzy5oyilpxso7ze5s7dondq6fl6sudiu"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                Consent v.1
              </a>
            </span>
          </h1>
          <h1 className="text-center mb-8">
            <span className="block text-xl font-bold">
              View{" "}
              <a
                href="https://tan-everyday-mite-419.mypinata.cloud/ipfs/bafkreifjg5z53ag3rpjjkrcumpswe3arq2kwq4hd7zo5pxhawlxk5oxypm"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                Review v.1
              </a>
            </span>
          </h1>
          <h1 className="text-center mb-8">
            <span className="block text-xl font-bold">
              View{" "}
              <a
                href="https://tan-everyday-mite-419.mypinata.cloud/ipfs/bafkreibxiamw6qwirxevbv45ws4kn3z3sa3pppb5ylp4kyevze4utebt3u"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                Survey v.1
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
            Add Consent
          </button>
        )}
      </div>

      <MyHoldings />
    </>
  );
};

export default MyNFTs;
