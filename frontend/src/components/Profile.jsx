import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Contact, Mail, Pen } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
const skills = ["HTML", "css", "JavaScript", "ReactJS"]
const Profile = () => {
    const[open,setOpen]=useState(false);
    const isResume = true;

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                        <Avatar className='h-24 w-24'>
                            <AvatarImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s'></AvatarImage>
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>Full Name</h1>
                            <p>Add your bio here ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod cumque facere labore esse unde dignissimos ipsa expedita est architecto nam nisi, dolorem, perferendis inventore fugit ad placeat reiciendis doloribus?</p>
                        </div>
                    </div>
                    <Button className='text-right cursor-pointer' variant='outline' onClick={()=>setOpen(true)}><Pen/></Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>sufyan@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Contact />
                        <span>0900-78601</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className="flex items-center gap-1">
                        {
                            skills.length != 0 ? skills.map((item, index) =>
                                <Badge key={index} className='bg-black text-white rounded-2xl'>{item}</Badge>)
                                : <span>NA</span>
                        }
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label className='text-md font-bold'>Resume</Label>
                    {
                        isResume ? <a target='blank' className='text-blue-500 w-full hover:underline cursor-pointer' href='https://youtube.com'>Sufyan Siddiqui</a>
                            : <span>NA</span>
                    }
                </div>

            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl">
                <h1 className='text-bold text-lg my-5'>Applied Jobs</h1>
                {/* Application Table */}
                <AppliedJobTable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Profile