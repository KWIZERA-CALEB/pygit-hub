"use client"
import { useEffect } from "react"
import Navigation from "@/components/molecules/Navigation"
import Link from 'next/link'
import { useRepoStore } from "@/store/useRepoStore"

const Repositories = () => {
    const { isFetchingRepositories, repositories, fetchRepositories } = useRepoStore()


    useEffect(() => {
        fetchRepositories()
    }, [])
    return (
        <div>
            <Navigation />

            <div className='w-full pr-[40px] pl-[40px] pt-[65px] grid grid-cols-4 gap-4'>
                <div className='p-[20px] rounded-[15px] border-solid border-gray-200 border-[1px]'>
                    <p className='text-[16px] cursor-pointer'>Repository Name: <Link href='/repositories/sxhsjx'><span className='font-bold underline'>Ecommerce site</span></Link></p>
                    <p className='text-[16px] cursor-pointer'>Contributions: 100 commits</p>
                    <p className='text-[16px] cursor-pointer'>Last updated: 8 days ago</p>
                </div>
                <div className='p-[20px] rounded-[15px] border-solid border-gray-200 border-[1px]'>
                    <p className='text-[16px] cursor-pointer'>Repository Name: <Link href='/repo'><span className='font-bold underline'>Ecommerce site</span></Link></p>
                    <p className='text-[16px] cursor-pointer'>Contributions: 100 commits</p>
                    <p className='text-[16px] cursor-pointer'>Last updated: 8 days ago</p>
                </div>
            </div>  
        </div>
    )
}

export default Repositories