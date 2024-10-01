import Card, { CardVariant } from "./components/Card"
import UserList from "./components/UserList"
import { IUser } from "./types/types"

const App = () => {
  const users: IUser[] = [
    { id: 1, name: 'xGerfy', email: 'asf@mail.ru', address: { city: 'Moscow', street: 'Lenina', zipcode: "123456" } },
    { id: 2, name: 'roman', email: 'asf@mail.ru', address: { city: 'Izhevsk', street: 'Lenina', zipcode: "654321" } },
  ]

  return (
    <div>
      <Card variant={CardVariant.outlined} height="200px" width="200px">
        <button>Кнопка</button>
      </Card>
      <UserList users={users} />
    </div >
  )
}

export default App
