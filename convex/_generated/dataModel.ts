/**
 * Generated data model bootstrap.
 *
 * Regenerate with `npx convex dev` after connecting the Convex project.
 */

import type { GenericId } from "convex/values";

export type DataModel = Record<string, unknown>;
export type Id<TableName extends string> = GenericId<TableName>;
export type Doc<TableName extends string> = Record<string, unknown> & {
  _id: Id<TableName>;
  _creationTime: number;
};
