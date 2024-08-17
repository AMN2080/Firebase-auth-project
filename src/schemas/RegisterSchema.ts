import { z } from "zod";

export const RegisterSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[a-zA-Z]/, "Password must contain both letters and numbers")
      .regex(/[0-9]/, "Password must contain both letters and numbers"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    rules: z.boolean().refine((v) => v === true, {
      message: "Please agree to the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type RegisterType = z.infer<typeof RegisterSchema>;
