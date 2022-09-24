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
import { getMembers } from "../api/member.api";
import { mapMemberEntityFromAPIModelToVM } from "../api/member.mappers";
import { MemberEntityVM } from "../model/MemberEntity";

export const MembersTable = () => {

    const perpage: number = 3;
    const [members, setMembers] = React.useState<MemberEntityVM[]>([]);
    const [organization, setOrganization] = React.useState<string>("Lemoncode");
    const [page, setPage] = React.useState<number>(1);

    useEffect(() => {
        getMembers(organization, perpage, page)
            .then((data) => {
                const membersVM = mapMemberEntityFromAPIModelToVM(data);
                setMembers(membersVM);
            }
            );
    }, [page])


    const handleOrganization = () => {
        setPage(1);
        getMembers(organization, perpage, page)
            .then((data) => {
                const membersVM = mapMemberEntityFromAPIModelToVM(data);
                setMembers(membersVM);
            }
            )
    };

    const handlePagination = (event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page);
    };

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
                    count={10}
                    defaultPage={1}
                    page={page}
                    onChange={handlePagination}
                />
            </Box>
        </>
    )
}
