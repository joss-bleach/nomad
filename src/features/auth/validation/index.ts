import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Your password must contain 8 characters",
  }),
});

export const signUpFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Your password must contain 8 characters",
  }),
});
