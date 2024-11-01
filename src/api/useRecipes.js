import { keepPreviousData, useQuery } from "@tanstack/react-query"

const getRecipes = async ({ queryKey }) => {
  const [_, page, search] = queryKey
  const response = await fetch(`https://dummyjson.com/recipes?limit=10&skip=${page * 10}&search=${search}`)
  return response.json()
}

export default function useRecipes(page, search) {
  return useQuery({
    queryKey: ['recipes', page, search],
    queryFn: getRecipes,
    staleTime: 5 * 60 * 1000,
    placeholderData: keepPreviousData,
  })
}
