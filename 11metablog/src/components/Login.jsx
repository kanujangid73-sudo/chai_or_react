import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import Button from './Button'
import Input from './Input'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin({ userData }))
                navigate("/")
            }
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className='flex items-center justify-center w-full my-8'>
            <div className='mx-auto w-full max-w-lg bg-gray-800 rounded-xl p-10 border border-gray-700'>
                <h2 className='text-center text-2xl font-bold leading-tight text-white'>Sign in to your account</h2>
                <p className='mt-2 text-center text-base text-gray-400'>
                    Don&apos;t have an account?&nbsp;
                    <Link to="/signup" className='font-medium text-indigo-400 hover:underline'>
                        Sign Up
                    </Link>
                </p>
                {error && <p className='text-red-500 mt-8 text-center'>{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8 space-y-5'>
                    <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", { required: true })}
                    />
                    <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
                    />
                    <Button type="submit" className="w-full">Sign in</Button>
                </form>
            </div>
        </div>
    )
}

export default Login