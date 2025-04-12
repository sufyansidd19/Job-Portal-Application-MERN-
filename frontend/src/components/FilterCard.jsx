import React from 'react'
import { RadioGroupItem ,RadioGroup} from './ui/radio-group'
import { Label } from './ui/label'

const filterData = [
    {
        filterType: "Location",
        array: ["Karachi", "Lahore", "Peshawar", "Islamabad", "Gujrawala"]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Data Science", "DevOps"]
    },
    {
        filterType: "Salary",
        array: ["0-40k", "41-1lac", "1lac-5lac", "5lac-8lac"]
    },
]
const FilterCard = () => {
    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3'/>
            <RadioGroup>
                {
                    filterData.map((data,index)=>(
                        <div>
                            <h1 className='font-bold text-lg'>{data.filterType}</h1>
                            {
                                data.array.map((item,index)=>{
                                    return(
                                        <div className='flex items-center space-x-2 my-2'>
                                            <RadioGroupItem value={item}/>
                                            <Label>{item}</Label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    )
}

export default FilterCard