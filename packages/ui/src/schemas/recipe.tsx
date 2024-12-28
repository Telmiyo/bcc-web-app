import { z } from "zod";

const formSchema = z.object({
  recipeName: z.string().min(1, { message: "Recipe name is required" }).max(100, { message: "Recipe name is too long" }),
  ingredients: z
    .array(z.string().min(1, { message: "Ingredient cannot be empty" }))
    .nonempty({ message: "At least one ingredient is required" }),
  instructions: z.string().min(1, { message: "Instructions are required" }),
  category: z
    .enum(["breakfast", "lunch", "dinner"])
    .refine((val) => ["breakfast", "lunch", "dinner"].includes(val), {
      message: "Invalid category selected",
    }),
});

export { formSchema };
