import { object, string } from "zod";

export const signUpSchema = object({
    email: string({ required_error: "Email is required" }).email("Invalid email address"),
    password: string({ required_error: "Password is required" }).min(8, "Password must be at least 8 characters long").max(32, "Password must be at most 32 characters long"),
});

export const signInSchema = object({
    email: string({ required_error: "Email is required" }).email("Invalid email address"),
    password: string({ required_error: "Password is required" }),
});