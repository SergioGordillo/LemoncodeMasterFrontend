import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from './model';

interface Props {
    member: MemberEntity
}

export const MemberTableRow: React.FC<Props> = (props) => {

    const { member } = props;

    return (
        <tr key={member.id}>
            <>
                <img src={member.avatar_url} />
                <span>{member.id}</span>
                <Link to={`/detail/${member.login}`}>{member.login}</Link>
            </>
        </tr>
    )
}