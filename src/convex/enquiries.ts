import { v } from "convex/values";
import { mutation } from "./_generated/server";

/**
 * Table reservation / enquiry requests.
 *
 * IMPORTANT: submitting this form does NOT confirm a reservation.
 * The staff must contact the guest to confirm — this is only an enquiry.
 */
export const createEnquiry = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    guests: v.number(),
    preferredDate: v.string(),
    preferredTime: v.string(),
    message: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const name = args.name.trim();
    const phone = args.phone.trim();

    if (name.length < 2) throw new Error("Please enter your name.");
    if (!/^[+\d][\d\s-]{6,15}$/.test(phone)) {
      throw new Error("Please enter a valid phone number.");
    }
    if (args.guests < 1 || args.guests > 40) {
      throw new Error("Number of guests must be between 1 and 40.");
    }

    return await ctx.db.insert("enquiries", {
      name,
      phone,
      guests: args.guests,
      preferredDate: args.preferredDate,
      preferredTime: args.preferredTime,
      message: args.message?.trim() || undefined,
      status: "new",
      createdAt: Date.now(),
    });
  },
});
