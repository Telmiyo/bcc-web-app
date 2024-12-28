"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@repo/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import { Textarea } from "@repo/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui/select";
import { createRecipe } from "./actions";

const formSchema = z.object({
  recipeName: z.string().min(2, {
    message: "Recipe name must be at least 2 characters.",
  }),
  ingredients: z
    .array(z.string().min(1, { message: "Ingredient cannot be empty." }))
    .min(1, { message: "At least one ingredient is required." }),
  instructions: z.string().min(10, {
    message: "Instructions must be at least 10 characters.",
  }),
  category: z.enum(["breakfast", "lunch", "dinner"], {
    errorMap: () => ({ message: "Select a valid category." }),
  }),
});

export function RecipeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recipeName: "",
      ingredients: [""],
      instructions: "",
      category: "breakfast",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    createRecipe(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Recipe Name */}
        <FormField
          control={form.control}
          name="recipeName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Recipe Name</FormLabel>
              <FormControl>
                <Input placeholder="E.g., Pancakes" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Ingredients */}
        {form.watch("ingredients").map((_, index) => (
          <FormField
            key={index}
            control={form.control}
            name={`ingredients.${index}` as const}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ingredient {index + 1}</FormLabel>
                <FormControl>
                  <Input placeholder="E.g., 1 cup of flour" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button
          type="button"
          onClick={() => form.setValue("ingredients", [...form.getValues("ingredients"), ""])}
        >
          Add Ingredient
        </Button>

        {/* Instructions */}
        <FormField
          control={form.control}
          name="instructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructions</FormLabel>
              <FormControl>
                <Textarea placeholder="Write the recipe instructions..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Category */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="breakfast">Breakfast</SelectItem>
                    <SelectItem value="lunch">Lunch</SelectItem>
                    <SelectItem value="dinner">Dinner</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
