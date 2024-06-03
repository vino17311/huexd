import { z } from "zod";


export const ContactvalidationSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "Name should be at least 3 characters long" })
    .max(50, { message: "Name should not exceed 50 characters" })
    .regex(/^[A-Za-z\s'-]+$/, { message: "Enter valid characters for a name" })
    .nonempty({ message: "Enter a valid first name" }),

  lastName: z
    .string()
    .min(3, { message: "Name should be at least 3 characters long" })
    .max(50, { message: "Name should not exceed 50 characters" })
    .regex(/^[A-Za-z\s'-]+$/, { message: "Enter valid characters for a name" })
    .nonempty({ message: "Enter a valid last name" }),

  email: z
    .string()
    .email({ message: "Email is invalid" })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "Email must be a valid format (example@example.com)",
    })
    .nonempty({ message: "Enter a valid email address" }),

  // phone: z
  //   .string()
  //   .regex(/^\d{10,15}$/, { message: "Enter a valid phone number" })
  //   .optional(),

  reasonForEnquiry: z
    .string()
    .nonempty({ message: "Enter a reason for enquiry" }),

  message: z
    .string()
    .min(50, { message: "Message should be at least 50 characters long" })
    .nonempty({ message: "Enter a message" }),
});


