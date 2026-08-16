import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'

type Todo = {
  id: number
  name: string
}

export default function App() {
  const [status, setStatus] = useState('Iniciando...')
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    async function getTodos() {
      setStatus('Consultando Supabase...')

      const { data, error } = await supabase
        .from('todos')
        .select('*')

      if (error) {
        console.error('Erro Supabase:', error)
        setStatus(`Erro: ${error.message}`)
        return
      }

      console.log('Dados recebidos:', data)

      setTodos(data ?? [])
      setStatus(`Conectado! ${data?.length ?? 0} registro(s)`)
    }

    getTodos()
  }, [])

  return (
    <div>
      <h1>{status}</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  )
}