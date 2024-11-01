import { useQuery } from "@tanstack/react-query"

const getTodos = async ({ queryKey }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${queryKey[1]}`)
  return response.json()
}

export default function useTodo(id) {
  return useQuery({ queryKey: ['todo', id], queryFn: getTodos, staleTime: 5 * 60 * 1000 })
}
