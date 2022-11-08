import {useState} from 'react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">
          Email:{""}
          <input type="email" name="email"
           value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <label htmlFor="password">
          Password{""}
          <input
            type="password"
            name="password"
            value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  )
}
