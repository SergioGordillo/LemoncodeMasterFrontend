import React from "react";

import { Link } from "react-router-dom";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { MemberEntityVM } from "../model/MemberEntity";

interface Props {
    member: MemberEntityVM
}

export const MemberTableRow: React.FC<Props> = (props) => {

    const { member } = props;

    return (
        <TableRow key={member.id}>
            <>
                <TableCell><img className="member-img" src={member.avatar_url} /></TableCell>
                <TableCell> <span>{member.id}</span> </TableCell>
                <TableCell>  <Link to={`/detail/${member.login}`}>{member.login}</Link> </TableCell>
            </>
        </TableRow>
    )
}