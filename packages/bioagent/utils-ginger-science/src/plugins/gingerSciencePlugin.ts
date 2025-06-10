import { Plugin } from "@elizaos/core";
import { postToSocialsAction } from "../actions/postToSocials";
import { driveWatcherProvider } from "../providers/driveWatcher";

export const gingerSciencePlugin: Plugin = {
    name: "ginger-science",
    description: "Posts redhead biology papers to Discord and Twitter when new Drive entries appear.",
    actions: [postToSocialsAction],
    providers: [driveWatcherProvider],
    evaluators: [],
    services: [],
    clients: []
};
