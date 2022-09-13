import React, { useEffect } from "react";

import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

import { getMembers } from "./members-table";

const pageSize = 3;

export default function AppPagination(organization) {

    useEffect(() => {
        console.log("organization", organization);
        console.log("pasa por aquí", getMembers(organization));
    }, [])

    //I might have to adapt my service to have a better one here



    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}
            sx={{
                margin: "20px 0px"
            }}>
            <Pagination count={10} />
        </Box>

    );
}