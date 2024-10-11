import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  listingCategories: defineTable({
    name: v.string(),
    iconUrl: v.optional(v.id("_storage")),
  }).index("by_name", ["name"]),
});

export default schema;
