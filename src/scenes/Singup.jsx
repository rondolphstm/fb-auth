import {useState} from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword  } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDjUYqnfkS8IoqnvEA_eA4_mebjZX-TwaY",
    authDomain: "fb-auth-rstm.firebaseapp.com",
    projectId: "fb-auth-rstm",
    storageBucket: "fb-auth-rstm.appspot.com",
    messagingSenderId: "1078389456014",
    appId: "1:1078389456014:web:b9033cebd316681cb95ddf"
  };

export default function Signup({setUser}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignup = async (e) =>{
        e.preventDefault()
        const app = initializeApp(firebaseConfig) // contects to firebase
        const auth = getAuth(app) // connect us to Firebase Auth
        const response = await createUserWithEmailAndPassword(auth, email, password)
        .catch(alert)
     setUser(response.user)
    }

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="email">
          Email:{""}
          <input type="email" name="email"
           value={email} onChange={e => setEmail(e.target.value)} 
           placeholder="yourname@domain.com" />
        </label>
        <br />
        <label htmlFor="password">
          Password{""}
          <input
            type="password"
            name="password"
            value={password} onChange={e => setPassword(e.target.value)}
            placeholder="......"/>
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
    </>
  )
}
