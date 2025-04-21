import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = () => {
    const navigate=useNavigate();
    const jobId="fdfdfdrererre"
 
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>

            <div className="flex items-center gap-2 my-2">
                <Button>
                    <Avatar>
                        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDcwXQ2w9u4FMlEf_MMgtV0UGOblUKItSPQ&s" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Company Name</h1>
                    <p className='text-sm text-gray-500'>Pakistan</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quis, nihil nobis alias iusto consectetur dolores libero nemo fuga sunt, delectus, obcaecati quo eveniet aperiam temporibus</p>
            </div>
            <div className='flex items-center gap-2 mt-4 '>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part Time</Badge>
                <Badge className={'text-[#7209B7] font-bold'} variant="ghost">24LPA</Badge>
            </div>

            <div className="flex items-center gap-4 mt-4">
                <Button onClick={()=>navigate(`/description/${jobId}`)} variant="outline" className='cursor-pointer'>Details</Button>
                <Button className='bg-[#7209b7] text-white'>Save For Later</Button>
            </div>
        </div>
    )
}

export default Job