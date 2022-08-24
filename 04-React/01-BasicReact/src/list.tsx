import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "./model";
import { MemberTableRow } from './member-table-row';


const getMembers = async (): Promise<MemberEntity[]> => {
    return fetch(`https://api.github.com/orgs/lemoncode/members`)
        .then((response) => response.json())
}

export const ListPage: React.FC = () => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [organization, setOrganization] = React.useState<string>("Lemoncode");

    React.useEffect(() => {
        getMembers().then(setMembers);
    }, []);

    const handleOrganization = (e) => {
        setOrganization(e.target.value);
    }

    const searchOrganization = () => {
        fetch(`https://api.github.com/orgs/${organization}/members`)
            .then((response) => response.json())
            .then((json) => setMembers(json));
    }

    return (
        <>
            <div>
                <label> Write the organization you want to look for </label>
                <input
                    type="text"
                    value={organization}
                    onChange={handleOrganization}
                />
                <button onClick={searchOrganization}>Search</button>
            </div>
            <h2>Hello from List page</h2>+{" "}
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

            <Link to="/detail">Navigate to detail page</Link>
        </>
    );
};