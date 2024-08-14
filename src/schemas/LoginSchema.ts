import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const LoginSchema = z.object({
  email: z
    .string()
    .regex(emailRegex, {
      message: "Invalid email address",
    })
    .min(1, {
      message: "Email is required",
    }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});
