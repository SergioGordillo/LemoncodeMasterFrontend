import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from './model';

interface Props {
    member: MemberEntity
}

export const MemberTableRow: React.FC<Props> = (props) => {

    const { member } = props;

    return (
        <tr key={member.id} className="member-row">
            <>
                <div className="member-img-wrapper">
                    <img className="member-img" src={member.avatar_url} />
                </div>
                <span className="y-center id">{member.id}</span>
                <Link className="y-center name" to={`/detail/${member.login}`}>{member.login}</Link>
            </>
        </tr>
    )
}