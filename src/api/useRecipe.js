import { keepPreviousData, useQuery } from "@tanstack/react-query"

const getRecipe = async ({ queryKey }) => {
  const [_, recipeId] = queryKey
  const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`)
  return response.json()
}

export default function useRecipe(recipeId) {
  return useQuery({
    queryKey: ['recipe', recipeId],
    queryFn: getRecipe,
    staleTime: 5 * 60 * 1000,
    enabled: !!recipeId,
    placeholderData: keepPreviousData,
  })
}
