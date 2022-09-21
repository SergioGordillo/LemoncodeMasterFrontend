import React, { useEffect } from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';

import { MemberTableRow } from "./member-table-row";
import { MemberEntity, PaginationEntity, PaginationDataEntity } from "./model";

export const getMembers = (organization: string): Promise<MemberEntity[]> => {
    return fetch(`https://api.github.com/orgs/${organization}/members`)
        .then((response) => response.json())
}

async function getMembersPagination(members: MemberEntity[], organization: string, { from, to }): Promise<PaginationDataEntity> {

    const membersData = await getMembers(organization)
    const interval = membersData.slice(from, to);
    console.log("interval", interval);
    console.log("countService", members.length + membersData.length);
    return {
        count: members.length + membersData.length,
        data: interval
    }
}

export const MembersTable = () => {

    const pageSize = 3;
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [pagination, setPagination] = React.useState<PaginationEntity>({
        count: 0,
        from: 0,
        to: pageSize
    });
    const [organization, setOrganization] = React.useState<string>("Lemoncode");

    useEffect(() => {
        getMembersPagination(members, organization, { from: pagination.from, to: pagination.to }).then(response => {
            setPagination({ ...pagination, count: response.count })
            console.log("paginationCount", pagination.count); //TODO: Explorar bien, parece que aquí hay bugs
            setMembers(response.data); //Esto es el interval
        })
    }, [pagination.from, pagination.to])


    const handleOrganization = () => {
        getMembers(organization).then(setMembers);
        // getMembersPagination(members, organization, {from: pagination.from, to: pagination.to}).then(setMembers);
    }

    const handlePageChange = (event: any, page: number) => { //It makes the calculations of the items we wanna show on screen for a given page
        const from = (page - 1) * pageSize;
        const to = (page - 1) * pageSize + pageSize;
        console.log("from", from);
        console.log("to", to);

        setPagination({ ...pagination, from: from, to: to })

    }

    return (

        <>
            <Box component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                <label> Write the organization you want to look for </label>
                <TextField id="outlined-basic" label="Write Here" variant="outlined" value={organization} onChange={e => setOrganization(e.target.value)}> //TODO: Implement OnDebounce
                </TextField>
                <Button variant="contained" onClick={handleOrganization} sx={{
                    minHeight: 56,
                }}>
                    Search
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Avatar</TableCell>
                            <TableCell align="left">Id</TableCell>
                            <TableCell align="left">Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {members.map((member) => (
                            <MemberTableRow key={member.id} member={member} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}
                sx={{
                    margin: "20px 0px"
                }}>
                <Pagination
                    color="primary"
                    count={Math.ceil(pagination.count / pageSize)}
                    onChange={handlePageChange}
                />
            </Box>
        </>
    )
}