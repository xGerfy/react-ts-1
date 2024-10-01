import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import TodosPage from "./components/TodosPage"
import UserPage from "./components/UserPage"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/todos">Todos</Link>
      </div>
      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
