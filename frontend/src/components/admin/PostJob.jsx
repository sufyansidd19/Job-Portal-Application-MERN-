import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { SelectGroup } from '@radix-ui/react-select'
import axios from 'axios'
import { JOB_API_END_POINT } from '../utils/constant'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

const companyArray = []

const PostJob = () => {
    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 0,
        companyId: ""
    });

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const { companies } = useSelector(store => store.company)

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find((company) => company.name.toLowerCase() === value);
        setInput({ ...input, companyId: selectedCompany._id })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/admin/jobs');
            }
        }
        catch (error) {
            toast.error(error.response.data.message);
        }
        finally{
            setLoading(false);
        }
    }
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center w-screen my-5">

                <form onSubmit={submitHandler} className='p-8 max-w-4xl border-gray-200 shadow-lg rounded-md'>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <Label>Title</Label>
                            <Input
                                type="text"
                                name="title"
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                                value={input.title}
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Input
                                type="text"
                                name="description"
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                                value={input.description}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>Requirements</Label>
                            <Input
                                type="text"
                                name="requirements"
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                                value={input.requirements}
                                onChange={changeEventHandler}
                            />
                        </div>


                        <div>
                            <Label>Salary</Label>
                            <Input
                                type="text"
                                name="salary"
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                                value={input.salary}
                                onChange={changeEventHandler}
                            />
                        </div>


                        <div>
                            <Label>Location</Label>
                            <Input
                                type="text"
                                name="location"
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                                value={input.location}
                                onChange={changeEventHandler}
                            />
                        </div>


                        <div>
                            <Label>Job Type</Label>
                            <Input
                                type="text"
                                name="jobType"
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                                value={input.jobType}
                                onChange={changeEventHandler}
                            />
                        </div>


                        <div>
                            <Label>Experience Level </Label>
                            <Input
                                type="text"
                                name="experience"
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                                value={input.experience}
                                onChange={changeEventHandler}
                            />
                        </div>


                        <div>
                            <Label>No of Positions</Label>
                            <Input
                                type="number"
                                name="position"
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                                value={input.position}
                                onChange={changeEventHandler}
                            />
                        </div>

                    </div>
                    {
                        companies.length > 0 && (
                            <Select onValueChange={selectChangeHandler} className='bg-white'>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a Company" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {
                                            companies.map((company) => {
                                                return (
                                                    <SelectItem value={company?.name?.toLowerCase()}>{company.name}</SelectItem>
                                                )
                                            })
                                        }

                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )
                    }
                    
                    {
                        loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4 bg-black text-white">Post New Job</Button>
                    }
                    {
                        companies.length === 0 && <p className='text-xs text-red-600 font-bold text-center my-3'> Please register a company first , before posting jobs</p>
                    }
                </form>
            </div>
        </div>
    )
}

export default PostJob