import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

// default user roles. can add / remove based on the project as needed
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

export const enquiryStatusValidator = v.union(
  v.literal("new"),
  v.literal("confirmed"),
  v.literal("cancelled"),
);
export type EnquiryStatus = Infer<typeof enquiryStatusValidator>;

const schema = defineSchema(
  {
    // default auth tables using convex auth.
    ...authTables, // do not remove or modify

    // the users table is the default users table that is brought in by the authTables
    users: defineTable({
      name: v.optional(v.string()), // name of the user. do not remove
      image: v.optional(v.string()), // image of the user. do not remove
      email: v.optional(v.string()), // email of the user. do not remove
      emailVerificationTime: v.optional(v.number()), // email verification time. do not remove
      isAnonymous: v.optional(v.boolean()), // is the user anonymous. do not remove

      role: v.optional(roleValidator), // role of the user. do not remove
    }).index("email", ["email"]), // index for the email. do not remove or modify

    // add other tables here

    // Table reservation / enquiry requests submitted from the website.
    enquiries: defineTable({
      name: v.string(),
      phone: v.string(),
      guests: v.number(),
      preferredDate: v.string(), // "YYYY-MM-DD"
      preferredTime: v.string(), // "HH:mm"
      message: v.optional(v.string()),
      status: v.optional(enquiryStatusValidator),
      createdAt: v.number(),
    }).index("by_status_created", ["status", "createdAt"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;
