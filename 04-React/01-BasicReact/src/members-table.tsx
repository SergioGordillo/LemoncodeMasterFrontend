import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { MemberTableRow } from "./member-table-row";
import { MemberEntity } from "./model";

const getMembers = (organization: string): Promise<MemberEntity[]> => {
    return fetch(`https://api.github.com/orgs/${organization}/members`)
        .then((response) => response.json())
}

export const MembersTable = () => {

    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [organization, setOrganization] = React.useState<string>("Lemoncode");

    React.useEffect(() => {
        getMembers(organization).then(setMembers);
    }, []);

    const handleOrganization = () => {
        getMembers(organization).then(setMembers);
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
                <TextField id="outlined-basic" label="Outlined" variant="outlined" value={organization} onChange={e => setOrganization(e.target.value)}>
                </TextField>
                <button onClick={handleOrganization}>Search</button>
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
        </>
    )
}