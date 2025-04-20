import React from 'react'
import { Table ,TableBody,TableCaption, TableCell, TableHead, TableHeader, TableRow} from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
    <div>
        <Table>
            <TableCaption>List of your applied jobs</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className='text-right'>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                [1,2,3,4].map((Item,index)=>(
                    <TableRow key={index}>
                        <TableCell>20-04-2025</TableCell>
                        <TableCell>Data Scientist</TableCell>
                        <TableCell>Venture Dive</TableCell>
                        <TableCell className='text-right '><Badge className='bg-black text-white rounded-2xl'>Selected</Badge></TableCell>
                    </TableRow>
                ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable 