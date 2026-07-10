import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.string(),
    website: v.string(),
    projectType: v.string(),
    goal: v.string(),
    timeline: v.string(),
    preferredContact: v.string(),
    message: v.string(),
    consent: v.boolean(),
    createdAt: v.number(),
    source: v.string(),
  }).index("by_createdAt", ["createdAt"]),
});
