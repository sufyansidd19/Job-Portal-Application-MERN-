import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'

const shortListingStatus = ['Accepted', 'Rejected']

const ApplicantsTable = () => {
    const { applicants } = useSelector(store => store.application);

    // If applicants or applications is not available, show empty state
    if (!applicants || !applicants.applications) {
        return (
            <div>
                <Table>
                    <TableCaption>A list of your recent applied users</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Full Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead>Resume</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className='text-right'>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={6} className="text-center">No applications found</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent applied users</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {applicants.applications.map((item) => (
                        <TableRow key={item._id}>
                            <TableCell>{item?.applicant?.fullname || 'N/A'}</TableCell>
                            <TableCell>{item?.applicant?.email || 'N/A'}</TableCell>
                            <TableCell>{item?.applicant?.phoneNumber || 'N/A'}</TableCell>
                            <TableCell>
                                {item.applicant?.profile?.resume ? (
                                    <a className='text-blue-600' href={item.applicant.profile.resume}>
                                        {item.applicant.profile.resumeOriginalName}
                                    </a>
                                ) : (
                                    <span>N/A</span>
                                )}
                            </TableCell>
                            <TableCell>
                                {item?.applicant?.createdAt ? item.applicant.createdAt.split("T")[0] : 'N/A'}
                            </TableCell>
                            <TableCell className='text-right'>
                                <Popover>
                                    <PopoverTrigger>
                                        <MoreHorizontal className='cursor-pointer' />
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        {shortListingStatus.map((status, index) => (
                                            <div key={index} className='flex w-fit items-center my-2 cursor-pointer'>
                                                <span>{status}</span>
                                            </div>
                                        ))}
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ApplicantsTable;