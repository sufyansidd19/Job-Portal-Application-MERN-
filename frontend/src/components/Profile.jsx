import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Pen } from 'lucide-react'

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto bg-white border-gray-200 rounded-2xl my-5 p-8'>
                <div className="flex items-center gap-4">
                    <Avatar className='h-24 w-24'>
                        <AvatarImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s'></AvatarImage>
                    </Avatar>
                    <div>
                        <h1 className='font-medium text-xl'>Full Name</h1>
                        <p>Add your bio here</p>
                    </div>
                    <Button className='text-right' variant='outline'><Pen/></Button>
                </div>

            </div>
        </div>
    )
}

export default Profile