"use client";

import { TableCell, TableRow } from "@repo/ui/table";
import { Trash } from "lucide-react";
import { deleteRecipe } from "@ui/forms/actions";

const RecipeRow = ({ recipe }: { recipe: any }) => {
  const handleDelete = async () => {
    await deleteRecipe(recipe.id);
  };

  return (
    <TableRow key={recipe.id}>
      <TableCell className="font-medium">{recipe.recipe_name}</TableCell>
      <TableCell>{recipe.ingredients.join(", ")}</TableCell>
      <TableCell>{recipe.instructions}</TableCell>
      <TableCell className="text-right">{recipe.category}</TableCell>
      <TableCell className="text-right">
        <button onClick={handleDelete} className="text-red-500">
          <Trash size={16} />
        </button>
      </TableCell>
    </TableRow>
  );
};

export { RecipeRow };
