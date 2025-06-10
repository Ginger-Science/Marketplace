import {
  Provider,
  IAgentRuntime,
  Memory,
  State,
  elizaLogger,
} from "@elizaos/core";

import {
  isSocialPostContent,
  SocialPostContent
} from "../types";

import { fetchNewJsonFiles } from "../services/gdrive";

const FOLDER_ID = process.env.GDRIVE_FOLDER_ID!;

export const driveWatcherProvider: Provider = {
  get: async (runtime: IAgentRuntime, _msg: Memory, _state: State) => {
    elizaLogger.log("Vivian: Checking Google Drive...");

    const entries = await fetchNewJsonFiles(FOLDER_ID);

    for (const entry of entries) {
      if (!isSocialPostContent(entry)) {
        elizaLogger.warn("Vivian: Skipped file — invalid schema.");
        continue;
      }

      await runtime.storeMemory({
        type: "paper_entry",
        content: entry as SocialPostContent,
        timestamp: new Date().toISOString(),
      });

      elizaLogger.log("Vivian: Added paper to memory.");
    }
  },
};
