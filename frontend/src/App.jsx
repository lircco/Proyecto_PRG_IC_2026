import { useState, useEffect } from 'react'

function App() {
  const [msg, setMsg] = useState('')

  useEffect(() => {
    fetch('http://localhost:8000/api/hola/')
      .then(r => r.json())
      .then(d => setMsg(d.message))
  }, [])

  return <h1>{msg}</h1>
}

export default App