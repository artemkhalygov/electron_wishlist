import React, { useEffect, useState } from 'react'
import useTodo from '../../api/useTodo'
import { useQueryClient } from '@tanstack/react-query'


export default function TodosList() {
  const [id, setId] = React.useState(1)
  const queryClient = useQueryClient()
  const { data: todo, isLoading, isFetching, isError } = useTodo(id)
  

  if(isError) {
    return <div>Error</div>
  }

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(isFetching) {
    return <div>Fetching...</div>
  }

  return <div style={{display: 'flex', flexDirection: 'column'}}>
    {todo?.title}
    <button onClick={() => setId(id + 1)}>Next todo</button>
    <button onClick={() => setId(id - 1)}>Prev todo</button>

    <button onClick={() => queryClient.invalidateQueries({ queryKey: ['todo', 2] })}>invalidate 2nd query</button>
    </div>
}
