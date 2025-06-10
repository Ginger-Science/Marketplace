import {
  Action,
  IAgentRuntime,
  Memory,
  HandlerCallback,
  State,
  elizaLogger,
} from "@elizaos/core";

import {
  isSocialPostContent,
  SocialPostContent
} from "../types";

import { formatPostText } from "../templates";

export const postToSocialsAction: Action = {
  name: "POST_TO_SOCIALS",
  description: "Posts a summary of a redhead-relevant paper to Discord and Twitter.",
  validate: async (runtime: IAgentRuntime) => {
    return runtime.clients?.discord && runtime.clients?.twitter;
  },
  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    state: State,
    _options: any,
    callback: HandlerCallback
  ) => {
    try {
      // ✅ Zod validation using your schema
      if (!isSocialPostContent(message.content)) {
        callback({ text: "Invalid content format." });
        return;
      }

      const content = message.content as SocialPostContent;
      const text = formatPostText(content);

      await runtime.discord.send({ content: text });
      await runtime.twitter.send({ content: text });

      elizaLogger.info("Posted to Discord and Twitter.");
      callback({ text: "Post sent successfully." });
    } catch (error) {
      elizaLogger.error("Error posting:", error);
      callback({ text: "Failed to post. Check logs." });
    }
  },
  examples: [],
};
