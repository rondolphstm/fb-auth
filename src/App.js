import {useState} from 'react'
import Login from './scenes/Login'
import Signup from './scenes/Singup'
import Protected from './scenes/Protected'

function App(){
  const [user , setUser] = useState()
  return (
    <>
    {!user
    ? <> <Login setUser={setUser}/> <Signup setUser={setUser}/></>
      : <Protected/>
    }
    </>
  );
}
export default App 