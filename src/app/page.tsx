import Navigation from "@/components/molecules/Navigation"
import { Button } from 'antd'


const Home = () => {
  return(
    <div>
      <Navigation />
      <div className="w-full h-[100vh] flex justify-center items-center">

        <div>
          <p className='text-[64px] text-center font-bold cursor-pointer'>Build and ship software on<br></br> a single, collaborative platform</p>
          <div className="mt-[12px]">
              <input 
                  type="text" 
                  placeholder="Email address" 
                  className="w-full pr-[100px] text-gray-400 pl-4 py-[12px] bg-white text-[16px] placeholder:text-[14px] placeholder:text-[#777]/[60%] rounded-[8px] border-0 focus:outline-none shadow-md"
              />
              <Button 
                  type='primary' className="bg-blue-500 mt-[6px] text-white px-4 py-2 rounded-[12px] hover:bg-blue-500/[90%] shadow"
              >
                  Sign Up
              </Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home