"use client"
import Navigation from "@/components/molecules/Navigation"
import { Button, Input } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { useAuthStore } from "@/store/useAuthStore"
import { useRouter } from "next/navigation"

interface SignInForm {
  username: string;
  password: string;
}

const SignIn = () => {
  const { handleSubmit, control, setValue, formState: { errors } } = useForm<SignInForm>()
  const router = useRouter()
  const { isSigningIn, signin } = useAuthStore()

  const onSubmit = async (data: SignInForm) => {
    try {
      await signin(data)
      router.push('/repositories')
    } catch(error) {
      setValue('password', '')
    }
  }


  return(

    <div>
      <Navigation />
      <div className="w-full h-[100vh] flex justify-center items-center">

        <div className='w-[400px]'>
            <p className='text-[20px] text-center font-bold cursor-pointer'>Sign In</p>
            <div className="mt-[12px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='flex flex-col space-y-[6px]'>
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
                      type='primary' htmlType="submit" className="bg-blue-500 mt-[6px] text-white px-4 py-2 rounded-[12px] hover:bg-blue-500/[90%] shadow"
                  >
                      {isSigningIn ? 'Loading' : 'Sign In'}
                  </Button>
                </form>
            </div>
        </div>

      </div>
    </div>
  )
}

export default SignIn