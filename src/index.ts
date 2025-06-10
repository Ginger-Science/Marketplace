import { type Project } from "@elizaos/core";
import "dotenv/config";

import { nftAgent } from "./scholar";

const project: Project = {
  agents: [nftAgent],
};

export default project;
