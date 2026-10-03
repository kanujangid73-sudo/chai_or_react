import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import Button from './Button'
import Input from './Input'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const current = await authService.getCurrentUser()
                if (current) dispatch(login({ userData: current }))
                navigate("/")
            }
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="flex items-center justify-center my-8">
            <div className="mx-auto w-full max-w-lg bg-gray-800 rounded-xl p-10 border border-gray-700">
                <h2 className="text-center text-2xl font-bold leading-tight text-white">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-gray-400">
                    Already have an account?&nbsp;
                    <Link to="/login" className="font-medium text-indigo-400 hover:underline">
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-500 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(create)} className="mt-8 space-y-5">
                    <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", { required: true })}
                    />
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
                    <Button type="submit" className="w-full">Create Account</Button>
                </form>
            </div>
        </div>
    )
}

export default Signup