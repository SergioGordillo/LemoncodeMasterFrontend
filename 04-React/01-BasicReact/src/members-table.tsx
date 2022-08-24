import React from "react";
import { MemberTableRow } from "./member-table-row";
import { MemberEntity } from "./model";

const getMembers = async (organization: string): Promise<MemberEntity[]> => {
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
            <div>
                <label> Write the organization you want to look for </label>
                <input
                    type="text"
                    value={organization}
                    onChange={e => setOrganization(e.target.value)}
                />
                <button onClick={handleOrganization}>Search</button>
            </div>
            <table>
                <thead className="list-user-list-container">
                    <th className="list-header">Avatar</th>
                    <th className="list-header">Id</th>
                    <th className="list-header">Name</th>
                </thead>
                <tbody>

                    {members.map((member) => (
                        <MemberTableRow key={member.id} member={member} />
                    ))}
                </tbody>
            </table>
        </>
    )
}