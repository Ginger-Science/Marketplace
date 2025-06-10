import { z } from "zod";

// Core schema: data pulled from Drive or Sheets
export const SocialPostSchema = z.object({
    title: z.string().min(1),
    abstract: z.string().min(10),
    doi: z.string().url(), // ensures clickable
});

// Optional: add a "posted" boolean if polling sheets
export const ExtendedSocialPostSchema = SocialPostSchema.extend({
    posted: z.boolean().optional(),
});

// Type definitions
export type SocialPostContent = z.infer<typeof SocialPostSchema>;
export type ExtendedSocialPostContent = z.infer<typeof ExtendedSocialPostSchema>;

// Type guards
export const isSocialPostContent = (obj: any): obj is SocialPostContent => {
    return SocialPostSchema.safeParse(obj).success;
};

export const isExtendedSocialPostContent = (
    obj: any
): obj is ExtendedSocialPostContent => {
    return ExtendedSocialPostSchema.safeParse(obj).success;
};

// Optional plugin config for future Twitter/Discord keys
export interface GingerSciencePluginConfig {
    twitterChannelId?: string;
    discordChannelId?: string;
    pollingIntervalMs?: number;
}
