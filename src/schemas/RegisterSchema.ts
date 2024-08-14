import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const RegisterSchema = z
  .object({
    email: z
      .string()
      .min(1, {
        message: "Email is required",
      })
      .regex(emailRegex, {
        message: "Invalid email address",
      }),
    password: z
      .string()
      .min(1, {
        message: "Password is required",
      })
      .regex(passwordRegex, {
        message:
          "Password must be at least 8 characters long and contain at least one letter and one number",
      }),
    confirmPassword: z.string().min(1, {
      message: "Please confirm your password",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
