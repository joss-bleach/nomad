import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  listingCategories: defineTable({
    name: v.string(),
    icon: v.string(),
  })
    .index("by_name", ["name"])
    .index("by_icon", ["icon"]),
});

export default schema;
