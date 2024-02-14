import { useUserContext } from '../contexts/dashboardContext'

export default function Button() {
    //const user = useContext(DashboardContext)
    const user = useUserContext()
  return (
    <div>
        
            {/* <button>{user?.name}</button>

            but we can use customHook then it garantee useContext always return user Object
            now it may be return user object or undefined
            that is why we use ?  */}

<button>{user.name}</button>
        
    </div>
  )
}

