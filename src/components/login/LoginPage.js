import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../../features/userSlice'
import { auth } from '../../firebase'
import './LoginPage.css'

const LoginPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const loginToApp = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
            }))
            history.push('/')
        }).catch(error => alert(error))
    }

    return (
        <div className='login__pageContainer'>
            <form>
                <input value={email} onChange={e => setEmail(e.target.value)} type='Email' placeholder='Email' />
                <input value={password} onChange={e => setPassword(e.target.value)} type='Password' placeholder='Password' />
                <button type='submit' onClick={loginToApp}>Log In</button>
            </form>
            <p>Not a member?{" "} <Link to='/signup-page' style={{textDecoration: 'none'}}>Register Now</Link>
            </p>
        </div>
    )
}

export default LoginPage
