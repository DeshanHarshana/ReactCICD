import { useState } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import { DashboardContext } from './contexts/dashboardContext';

function App() {
  const [user, setUser] = useState<User>({
    isSubscribed:true,
    name:"deshan"
  })
  return (
    <div className="App">
      <h1>Example for useContext hook Azure</h1>
      <h2>You can see Dashboard component below this text</h2>
      <div>
        <label htmlFor='user'>Type username</label>
        <input type='text' id='user' onChange={(e)=>{
            var data : User = {
                isSubscribed : true,
                name:e.target.value
            }
            setUser(data)
        }}></input>

        <DashboardContext.Provider value={user}>
        <Dashboard />
        </DashboardContext.Provider>
        

    </div>
    </div>
  );
}

export default App;

export interface User{
  isSubscribed:boolean,
  name : string
}