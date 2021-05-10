import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase'
import { login } from '../../features/userSlice'
import './SignupPage.css'

const SignupPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const register = (e) => {
        e.preventDefault()
        if (!name){
            return alert('Please enter your full name!')
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                    }))
                })
                //it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className='signup__container'>
            <h3>Create your account</h3>
            <form>
                <input value={name} onChange={e => setName(e.target.value)} type='text' placeholder='Full name (required if registering)' />
                <input value={email} onChange={e => setEmail(e.target.value)} type='Email' placeholder='Email' />
                <input value={password} onChange={e => setPassword(e.target.value)} type='Password' placeholder='Password' />
                <button type='submit' onClick={register}>Sign In</button>
            </form>
            <p>
            This is a clone App for learning purpose. You can register with a test email to see the clone! Already registered? 
            <Link to='/login-page' style={{textDecoration: 'none'}}>Login!</Link>
            </p>
        </div>
    )
}


export default SignupPage
