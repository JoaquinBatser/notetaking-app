import './App.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true

function App() {
  const handleClick = e => {
    e.preventDefault()
    axios.get('/')
  }
  return (
    <>
      <h1>Hello</h1>
      <form
        action=''
        onSubmit={handleClick}
      >
        <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default App
