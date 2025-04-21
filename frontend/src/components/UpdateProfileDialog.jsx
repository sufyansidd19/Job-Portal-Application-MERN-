import React from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'

const UpdateProfileDialog = ({open, setOpen}) => {
    return (
        <div>
            <Dialog open={open}>
                <DialogContent className="sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                    </DialogHeader>
                    <form action="">
                        <div className='grid gap-4 py-4'>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className='text-right'>Name</Label>
                                <Input
                                    id="name"
                                    className="col-span-3"
                                    name="name">
                                </Input>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className='text-right'>Email</Label>
                                <Input
                                    id="email"
                                    className="col-span-3"
                                    name="">
                                </Input>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="number" className='text-right'>Number</Label>
                                <Input
                                    id="number"
                                    className="col-span-3"
                                    name="number">
                                </Input>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="bio" className='text-right'>bio</Label>
                                <Input
                                    id="bio"
                                    className="col-span-3"
                                    name="bio">
                                </Input>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="skills" className='text-right'>Skills</Label>
                                <Input
                                    id="skills"
                                    className="col-span-3"
                                    name="skills">
                                </Input>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="file" className='text-right'>Resume</Label>
                                <Input
                                    id="file"
                                    className="col-span-3"
                                    name="file"
                                    type="file"
                                    accept="application/pdf">
                                </Input>
                            </div>

                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfileDialog