import Navigation from "@/components/molecules/Navigation"

const CreateRepository = () => {
    return(
        <div>
            <Navigation />
            <div className="w-full h-[100vh] flex justify-center items-center">
                <div className='w-[400px]'>
                    <p className='text-[20px] text-center font-bold cursor-pointer'>Create Repository</p>
                </div>
            </div>
        </div>
    )
}

export default CreateRepository