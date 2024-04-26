import * as z from "zod";

export const UserSchema = z.object({
  first_name: z.string({ required_error: "First name is Required" }),
  last_name: z.string({ required_error: "Last name is Required" }),
  email: z.string({ required_error: "Email is Required" }).email("Invalid email address"),
  password: z.string({ required_error: "Password is Required" }),
  id: z.string().optional(),
});
