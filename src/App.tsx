import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import TodosItemPage from "./components/TodosItemPage"
import TodosPage from "./components/TodosPage"
import UserPage from "./components/UserPage"
import UsersItemPage from "./components/UsersItemPage"

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
        <Route path="/users/:id" element={<UsersItemPage />} />
        <Route path="/todos/:id" element={<TodosItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
