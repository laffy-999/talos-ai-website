import { v } from "convex/values";
import { mutation } from "./_generated/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const submitLead = mutation({
  args: {
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
    source: v.string(),
  },
  handler: async (ctx, args) => {
    const name = args.name.trim();
    const email = args.email.trim().toLowerCase();
    const company = args.company.trim();
    const goal = args.goal.trim();

    if (!name) throw new Error("Name is required.");
    if (!emailPattern.test(email)) throw new Error("A valid email is required.");
    if (!company) throw new Error("Company is required.");
    if (!goal) throw new Error("Main goal is required.");
    if (!args.consent) throw new Error("Consent is required.");

    return await ctx.db.insert("leads", {
      name,
      email,
      company,
      website: args.website.trim(),
      projectType: args.projectType,
      goal,
      timeline: args.timeline,
      preferredContact: args.preferredContact,
      message: args.message.trim(),
      consent: args.consent,
      createdAt: Date.now(),
      source: args.source,
    });
  },
});
