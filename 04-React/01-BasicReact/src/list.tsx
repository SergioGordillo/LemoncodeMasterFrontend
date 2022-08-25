import React from "react";
import { MembersTable } from "./members-table";

export const ListPage: React.FC = () => {
    return (
        <>
            <h2>Hello from List of the searched organization</h2>
            <MembersTable />
        </>
    );
};