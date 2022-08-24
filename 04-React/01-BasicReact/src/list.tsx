import React from "react";
import { Link } from "react-router-dom";
import { MembersTable } from "./members-table";

export const ListPage: React.FC = () => {
    return (
        <>
            <h2>Hello from List page</h2>+{" "}
            <MembersTable />
            <Link to="/detail">Navigate to detail page</Link>
        </>
    );
};