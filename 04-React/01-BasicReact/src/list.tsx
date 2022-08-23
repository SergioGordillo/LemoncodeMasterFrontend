import React from "react";
import { Link } from "react-router-dom";

interface MemberEntity {
    id: string;
    login: string;
    avatar_url: string;
}

export const ListPage: React.FC = () => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [organization, setOrganization] = React.useState("Lemoncode");

    React.useEffect(() => {
        fetch(`https://api.github.com/orgs/lemoncode/members`)
            .then((response) => response.json())
            .then((json) => setMembers(json));
    }, []);

    const handleOrganization = (e) => {
        setOrganization(e.target.value);
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
                <button>Search</button>
            </div>
            <h2>Hello from List page</h2>+{" "}
            <div className="list-user-list-container">
                <span className="list-header">Avatar</span>
                <span className="list-header">Id</span>
                <span className="list-header">Name</span>
                {members.map((member) => (
                    <>
                        <img src={member.avatar_url} />
                        <span>{member.id}</span>
                        <Link to={`/detail/${member.login}`}>{member.login}</Link>
                    </>
                ))}
            </div>
            <Link to="/detail">Navigate to detail page</Link>
        </>
    );
};