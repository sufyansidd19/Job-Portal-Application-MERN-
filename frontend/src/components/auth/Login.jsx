import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Login = () => {
    const [input, setinput] = useState({
        email: "",
        password: "",
        role: ""
    });
    const changeEventHandler = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/")
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);

        }
    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Login</h1>

                    <div className='my-2'>
                        <Label className='my-2'>Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="sufyan1234@gmail.com"
                        />
                    </div>

                    <div className='my-2'>
                        <Label className='my-2'>Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="****"
                        />
                    </div>


                    <div className="flex items-center justify-between">
                        <RadioGroup className='flex items-center gap-4 my-2'>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio" name="role" value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                />
                                <Label htmlFor="option-one">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio" name="role" value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                />
                                <Label htmlFor="option-two">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <Button type="submit" className="w-full my-2 bg-black text-white">Login</Button>
                    <span className="text-sm">Don't have an account? <Link to="/signup" className='text-blue-600'>Signup</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login