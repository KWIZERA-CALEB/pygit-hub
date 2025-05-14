"use client"
import { useEffect } from 'react'
import Navigation from "@/components/molecules/Navigation"
import { Button, Input } from 'antd'
import { Controller, useForm } from "react-hook-form"
import { useAuthStore } from "@/store/useAuthStore"
import { useRouter } from 'next/navigation'


interface SignupForm {
    email: string;
    username: string;
    password: string;
}

const SignUp = () => {
    const { signup, isSigningUp } = useAuthStore()
    const router = useRouter()
    const { control, handleSubmit, setValue, formState: { errors } } = useForm<SignupForm>({
        defaultValues: {
            email: '',
            password: '',
            username: ''
        },
    })
    const prefilledEmail = localStorage.getItem('prefillEmail') || ''

    useEffect(() => {
        if (prefilledEmail) {
        setValue('email', prefilledEmail);
        }
    }, [prefilledEmail, setValue]);

    const onSubmit = async (data: SignupForm) => {
        try {
            await signup(data)
            router.push('/signin')
            localStorage.removeItem('prefillEmail')
        } catch(error) {
            console.log(`Error: ${error}`)
            setValue('password', '')
            localStorage.removeItem('prefillEmail')
        }
    }
  return(
    <div>
      <Navigation />
      <div className="w-full h-[100vh] flex justify-center items-center">

        <div className='w-[400px]'>
            <p className='text-[20px] text-center font-bold cursor-pointer'>Sign Up</p>
            <div className="mt-[12px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col space-y-[6px]'>
                        <Controller
                            name='email'
                            control={control}
                            rules={{
                                required: 'Email is required',
                            }}
                            render={({ field }) => (
                                <input 
                                    type="text" 
                                    {...field}
                                    placeholder="Email address" 
                                    className="w-full mb-[10px] text-gray-600 pl-4 py-[12px] bg-white text-[16px] placeholder:text-[14px] placeholder:text-[#777]/[60%] rounded-[8px] border-0 focus:outline-none shadow-md"
                                />
                            )}
                        />
                        {errors.email && (
                            <p className='font-afacadFlux text-[12px] text-[#FF204E]'>{errors.email.message}</p>
                        )} 
                        <Controller
                            name='username'
                            control={control}
                            rules={{
                                required: 'Username is required',
                            }}
                            render={({ field }) => (
                                <input 
                                    type="text" 
                                    {...field}
                                    placeholder="Username" 
                                    className="w-full mb-[10px] text-gray-600 pl-4 py-[12px] bg-white text-[16px] placeholder:text-[14px] placeholder:text-[#777]/[60%] rounded-[8px] border-0 focus:outline-none shadow-md"
                                />
                            )}
                        />
                        {errors.username && (
                            <p className='font-afacadFlux text-[12px] text-[#FF204E]'>{errors.username.message}</p>
                        )} 
                        <Controller
                            name='password'
                            control={control}
                            rules={{
                                required: 'Password is required',
                            }}
                            render={({ field }) => (
                                <input 
                                    type="password" 
                                    {...field}
                                    placeholder="Password" 
                                    className="w-full mb-[10px] text-gray-600 pl-4 py-[12px] bg-white text-[16px] placeholder:text-[14px] placeholder:text-[#777]/[60%] rounded-[8px] border-0 focus:outline-none shadow-md"
                                />
                            )}
                        />
                        {errors.password && (
                            <p className='font-afacadFlux text-[12px] text-[#FF204E]'>{errors.password.message}</p>
                        )} 
                    </div>
                    <Button 
                        type='primary' htmlType="submit" disabled={isSigningUp} className="bg-blue-500 mt-[6px] text-white px-4 py-2 rounded-[12px] hover:bg-blue-500/[90%] shadow"
                    >
                        {isSigningUp ? 'Loading' : 'Sign Up'}
                    </Button>
                </form>
            </div>
        </div>

      </div>
    </div>
  )
}

export default SignUp