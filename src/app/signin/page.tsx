import Navigation from "@/components/molecules/Navigation"
import { Button, Input } from 'antd'


const SignIn = () => {
  return(
    <div>
      <Navigation />
      <div className="w-full h-[100vh] flex justify-center items-center">

        <div className='w-[400px]'>
            <p className='text-[20px] text-center font-bold cursor-pointer'>Sign In</p>
            <div className="mt-[12px]">
                <div className='flex flex-col space-y-[6px]'>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        className="w-full text-gray-600 mt-[10px] pl-4 py-[12px] bg-white text-[16px] placeholder:text-[14px] placeholder:text-[#777]/[60%] rounded-[8px] border-0 focus:outline-none shadow-md"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="w-full text-gray-600 mt-[10px] pl-4 py-[12px] bg-white text-[16px] placeholder:text-[14px] placeholder:text-[#777]/[60%] rounded-[8px] border-0 focus:outline-none shadow-md"
                    />
                </div>
                <Button 
                    type='primary' className="bg-blue-500 mt-[6px] text-white px-4 py-2 rounded-[12px] hover:bg-blue-500/[90%] shadow"
                >
                    Sign In
                </Button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default SignIn