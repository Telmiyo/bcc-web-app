"use server";

import { redirect } from "next/navigation";
import { createClient } from "@repo/supabase/client";

// Function to fetch all recipes
const fetchRecipes = async () => {
  const supabase = await createClient();

  // Fetch all recipes from the 'recipes' table
  const { data, error } = await supabase.from("recipes").select("*");

  if (error) {
    console.error("Error fetching recipes:", error);
    return []; // Return an empty array in case of error
  }

  return data; // Return the fetched recipe data
};

// Function to delete a recipe from DB
const deleteRecipe = async (id: string) => {
  const supabase = await createClient();

  // Delete the recipe by its ID
  const { error } = await supabase.from("recipes").delete().eq("id", id);

  if (error) {
    console.error("Error deleting recipe:", error);
    return redirect("/error");
  }

  return redirect("/");
};

// Function to create a new recipe in DB
const createRecipe = async (values: {
  recipeName: string;
  ingredients: string[];
  instructions: string;
  category: string;
}) => {
  const supabase = await createClient();

  // Prepare the recipe data
  const recipeData = {
    recipe_name: values.recipeName,
    ingredients: values.ingredients,
    instructions: values.instructions,
    category: values.category,
  };

  // Insert the recipe data into the 'recipes' table
  const { data, error } = await supabase
    .from("recipes")
    .insert([recipeData]);

  if (error) {
    console.error("Error inserting recipe:", error);
    // Handle the error (e.g., show a message or redirect)
    return redirect("/error");
  }

  // Redirect to the list of recipes or confirmation page
  return redirect("/");
};

export { fetchRecipes, deleteRecipe, createRecipe }
