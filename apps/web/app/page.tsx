import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui/table";
import { fetchRecipes } from "@ui/forms/actions";
import { RecipeForm } from "@ui/forms/recipe-form";
import { RecipeRow } from "@ui/forms/recipe-row";

export default async function Home() {
  const recipes = await fetchRecipes();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4">
        <h1 className="font-semibold text-center text-4xl">BCC Test</h1>
      </header>

      <main className="flex flex-1 p-6 space-x-12">
        {/* Left side: Recipe form */}
        <div className="w-1/3 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl">Add a new recipe</h2>
          <RecipeForm />
        </div>

        {/* Right side: List of recipes */}
        <div className="w-2/3 shadow-lg rounded-lg p-6">
          <Table>
            <TableCaption>All recipes</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead>Ingredients</TableHead>
                <TableHead>Instructions</TableHead>
                <TableHead className="text-right">Category</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recipes.length > 0 ? (
                recipes.map((recipe: any) => (
                  <RecipeRow key={recipe.id} recipe={recipe} />
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    No recipes available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </main>

      <footer className="p-4 text-center">
        <span>Telmo Beroiz</span>
      </footer>
    </div>
  );
}
