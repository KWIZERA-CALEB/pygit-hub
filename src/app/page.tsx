"use client"
import Navigation from "@/components/molecules/Navigation"
import { Button, Input } from 'antd'
import { useRouter } from "next/navigation"
import { Controller, useForm } from 'react-hook-form'

interface HomeFormEmailPrefill {
  email: string;
}

const Home = () => {
  const router = useRouter()
  const { handleSubmit, control, formState: { errors } } = useForm<HomeFormEmailPrefill>()


  const onSubmit = (data: HomeFormEmailPrefill) => {
      console.log(`Email: ${data.email}`)
      localStorage.setItem('prefillEmail', data.email)
      router.push('/signup')
  }
  return(
    <div>
      <Navigation />
      <div className="w-full h-[100vh] flex justify-center items-center">

        <div>
          <p className='text-[64px] text-center font-bold cursor-pointer'>Build and ship software on<br></br> a single, collaborative platform</p>
          <div className="mt-[12px]">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name='email'
                  control={control}
                  rules={{
                      required: 'Email is required',
                  }}
                  render={({ field }) => (
                      <Input 
                        {...field}
                        type="text" 
                        placeholder="Email address" 
                        className="w-full pr-[100px] text-gray-400 pl-4 py-[12px] bg-white text-[16px] placeholder:text-[14px] placeholder:text-[#777]/[60%] rounded-[8px] border-0 focus:outline-none shadow-md"
                      />
                  )}
                />
                {errors.email && (
                    <p className='font-afacadFlux text-[12px] text-[#FF204E]'>{errors.email.message}</p>
                )} 
                
                <Button 
                    type='primary' htmlType="submit" className="bg-blue-500 mt-[6px] text-white px-4 py-2 rounded-[12px] hover:bg-blue-500/[90%] shadow"
                >
                    Sign Up
                </Button>
              </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home