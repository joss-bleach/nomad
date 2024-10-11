import { query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    const categories = await ctx.db.query("listingCategories").collect();
    return Promise.all(
      categories.map(async (category) => ({
        ...category,
        iconUrl: await ctx.storage.getUrl(category.iconUrl!),
      })),
    );
  },
});
