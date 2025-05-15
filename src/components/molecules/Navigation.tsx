import React from 'react'
import { Button } from 'antd'
import Link from "next/link"
import { useAuthStore } from '@/store/useAuthStore'

interface UserInfoTypes {
    username: string;
    email: string;
    password: string;
    bio: string;
    profileImage: string
}

const Navigation = () => {
    const { authUser } = useAuthStore()
    return (
        <div className="w-full fixed top-0 right-0 left-0 h-[60px] pr-[40px] pl-[40px] flex  flex-row items-center justify-between">
            <div className='flex flex-row items-center space-x-[10px]'>
                <div>
                    <p className='font-bold text-[18px]'>PYGIT HUB</p>
                </div>
                <div>
                    <Link href='/repositories'>
                        <p className='text-[16px] cursor-pointer'>Repositories</p>
                    </Link>
                </div>
                <div>
                    <Link href='/repositories/create'>
                        <p className='text-[16px] cursor-pointer'>Create Repository</p>
                    </Link>
                </div>
                <div>
                    <p className='text-[16px] cursor-pointer'>Explore Users</p>
                </div>
            </div>
            {authUser ? 
                <div>
                    <p className='text-[16px] uppercase cursor-pointer'>{authUser.username}</p>
                </div>
                : 
                <div className='flex flex-row space-x-[6px] items-center'>
                    <Link href='/signin'>
                        <Button>Sign In</Button>
                    </Link>
                    <Link href='/signup'>
                        <Button type='primary'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                                <path d="M280-400q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-60-80 60-85-60h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98.5-34t56.5-86h125l58 41 82-61 71 55 75-75-40-40H435q-14-52-56.5-86T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/>
                            </svg>
                            Sign Up
                        </Button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Navigation